const EvaluationHistory = require("../../models/EvaluationHistory");

exports.createHistory = async (req, res) => {
  const { status, evaluatedBy, submittedBy, docName, date, comment, rate } =
    req.body;

  const newEvaluationHistory = new EvaluationHistory({
    status,
    evaluatedBy,
    submittedBy,
    date,
    docName,
    comment,
    rate,
  });

  await newEvaluationHistory
    .save()
    .then(() => res.status(200).json({ success: true, message: "Created" }))
    .catch((err) => res.status(500).json({ success: false, message: err }));
};

exports.getHistory = async (req, res) => {
  await EvaluationHistory.find()
    .then((history) => res.status(200).json(history))
    .catch((err) => res.status(500).json({ success: false, message: err }));
};
