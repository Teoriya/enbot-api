const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DefinitionSchema = new Schema({
  easy: String,
  medium: String,
  hard: String,
});

const ResearcherSchema = new Schema({
  researcher_1: String,
  researcher_2: String,
  researcher_3: String,
});

const TermSchema = new Schema(
  {
    name: { type:String, required: true, unique: true },
    title: String,
    definitions: {
      type: DefinitionSchema,
      default: {},
    },
    researchers: {
      type: ResearcherSchema,
      default: {},
    },
    fun_facts: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Term", TermSchema, "terms");
