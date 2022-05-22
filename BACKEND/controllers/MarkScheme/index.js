const MarkScheme = require("../../models/MarkScheme");

exports.createScheme = async (req, res) => {
  const { schemeName, desc, steps, totalMarks } = req.body;

  const newMarkScheme = new MarkScheme({ schemeName, desc, steps, totalMarks });

  const isAvailable = await MarkScheme.findOne({ schemeName });

  if (isAvailable) {
    // if satisfied return proper error
    return res
      .status(401)
      .json({ error: "Already Planned ! Plz plan something new 😀" });
  }

  await newMarkScheme
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((error) => res.status(500).json({ success: false, error: error })); // else save to the db
};

//controller for getting topics
exports.getSchemes = async (req, res) => {
  await Topic.find()
    .then((schemes) => res.json(schemes))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};

//controller for getting topic by id
exports.getScheme = async (req, res) => {
  const { id } = req.params;

  await Topic.findById(id) //find by the document by id
    .then((scheme) => res.json(scheme))
    .catch((error) => res.status(500).json({ success: false, error: error }));
};
