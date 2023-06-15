require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json({ limit: "16mb" }));
// app.use('/public', express.static('public'))

const origin = process.env.CORS_ORIGIN.split(',')

const cors = require('cors');
const corsOptions = {
    origin,
    credentials: true,
    optionsSuccessStatus: 200
}
app.use(cors({
    exposedHeaders: ["auth-token"],
}));

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());


const userRouter = require('./routes/user.routes');
app.use('/users', userRouter);
const termRouter = require('./routes/term.routes');
app.use('/terms', termRouter);
app.get('/', (req, res) => {
    res.send("Hello World");
})

const dbConnect = require("./utils/db.utils")

try {
    const fs = require('fs')
    let httpsOptions = {
        key: fs.readFileSync('./ssl_certificates/private.key'),
        cert: fs.readFileSync('./ssl_certificates/certificate.crt')
    };
    const sslPort = process.env.PORT || 8443;
    const httpsServer = require('https').createServer(httpsOptions, app)
    dbConnect().then(() => {
        httpsServer.listen(sslPort, () => {
            require("./socket")(httpsServer);
            console.log(`HTTPS Server is running on port ${sslPort}`);
        })
    });
    
} catch (error) {
    console.log("Couldnt find ssl information, running an http server instead.")
    const port = process.env.PORT || 5000;
    const server = require('http').createServer(app);
    dbConnect().then(() => {
        server.listen(port, () => {
            require("./socket")(server);
            console.log(`Server is running on port ${port}`);
        })
    }
    )
}






