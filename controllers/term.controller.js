const { searchPrompt } = require("../utils/PROMPTS");
const TermService = require("../services/term.service");
const { removeTrailingCommas } = require("../utils/common.utils");
const OpenAIUtils = require("../utils/openai.utils");

class TermController {
  async createTerm(req, res) {
    const { searchTerm } = req.body;
    if (!searchTerm)
      return res.status(400).json({ message: "Search term Empty Search Term" });

    const searchTermLowerCase = searchTerm.toLowerCase();
    const data = await TermService.getTermByName(searchTerm);
    if (data) {
      return res.status(200).json({
        message: "DATA FETCHED SUCCESSFULLY",
        data,
      });
    }

    try {
      const definition = await OpenAIUtils.definitionResponseGenerator(searchTermLowerCase);
      let data = removeTrailingCommas(definition);
      data = JSON.parse(data);
      data = await TermService.createTerm(searchTermLowerCase, data);
      return res.status(200).json({
        message: "DATA FETCHED SUCCESSFULLY",
        data,
      });
    } catch (error) {
      if (error.message === "Non scientific search term") {
        return res.status(400).json({ message: error.message });
      }
      return res
        .status(500)
        .json({ message: error.message, error: error.stack });
    }
  }
}

module.exports = new TermController();
