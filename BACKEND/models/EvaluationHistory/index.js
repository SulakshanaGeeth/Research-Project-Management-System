const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EvaluationHistory = new Schema({
  status: String,
  evaluatedBy: String,
  submittedBy: String,
  docName: String,
  date: Date,
});

const newEvaluationHistory = mongoose.model(
  "evaluation-history",
  EvaluationHistory
);
module.exports = newEvaluationHistory;
