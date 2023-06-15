const { Configuration, OpenAIApi } = require("openai");
const {searchPrompt} = require("../utils/PROMPTS");
const TermService = require("../services/term.service");
const {removeTrailingCommas} = require("../utils/common.utils");

const configuration = new Configuration({
  organization: "org-BA6i0nJxCMfQhLSdXyDzG6Qg",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

class AuthController {
  async createTerm(req, res) {
    const { searchTerm } = req.body;
    if (!searchTerm) {
      return res.status(400).json({ message: "Search term Empty Search Term" });
    }

    const searchTermLowerCase = searchTerm.toLowerCase();
    const data = await TermService.getTermByName(searchTerm);
    // const data = null;
    if (data) {
        return res.status(200).json({
            message: "DATA FETCHED SUCCESSFULLY",
            data
          });
        }

    const openai = new OpenAIApi(configuration);
    const definitionResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          content: searchPrompt,
          role: "system",
        },
        {
          content: searchTermLowerCase,
          role: "user",
        },
      ],
      max_tokens: 2048,
    });

    if (definitionResponse.data.choices[0].message.content.startsWith("FAIL")) {
      return res
        .status(400)
        .json({ message: "The search term entered is not a scientific term" });
    }
    try {
        console.log(definitionResponse.data.choices[0].message.content);
        let data = removeTrailingCommas(definitionResponse.data.choices[0].message.content)
        data = JSON.parse(data)
        data = await TermService.createTerm(searchTermLowerCase,data);
        return res.status(200).json({
          message: "DATA FETCHED SUCCESSFULLY",
          data
        });
    } catch (error) {

        console.log(error.message);
        return res
        .status(500)
        .json({ message: "Some error occured." });

    }
  }
}


module.exports = new AuthController();
