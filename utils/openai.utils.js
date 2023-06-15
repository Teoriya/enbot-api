const { Configuration, OpenAIApi } = require("openai");
const {searchPrompt} = require("../utils/PROMPTS");

const configuration = new Configuration({
    organization: "org-BA6i0nJxCMfQhLSdXyDzG6Qg",
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

class OpenAIUtils {
  async definitionResponseGenerator(searchTerm) {
    const definitionResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          content: searchPrompt,
          role: "system",
        },
        {
          content: searchTerm,
          role: "user",
        },
      ],
      max_tokens: 2048,
    });
    if(definitionResponse?.data?.choices[0]?.message?.content.startsWith("FAIL")){
        throw new Error("Non scientific search term")
    }
    return definitionResponse.data.choices[0].message.content;
  }
}


module.exports = new OpenAIUtils();
