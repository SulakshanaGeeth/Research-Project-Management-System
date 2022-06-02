const router = require("express").Router();

const { createHistory, getHistory } = require("../../controllers/EvaluationHistory");

router.route("/create").post(createHistory);
router.route("/getHistory").get(getHistory);

module.exports = router;
