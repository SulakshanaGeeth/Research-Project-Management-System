const router = require("express").Router();

const {
  register,
  getTopics,
  getTopic,
  updateTopic,
  deleteTopic,
  acceptOrReject,
  notifyStudentBySupervisor,
} = require("../../controllers/ResearchTopic");

router.route("/register").post(register);
router.route("/").get(getTopics);
router.route("/get/:id").get(getTopic);
router.route("/update/:id").put(updateTopic);
router.route("/delete/:id").delete(deleteTopic);
router.route("/acceptOrReject/:id").put(acceptOrReject);
router.route("/notifyStudentBySupervisor").post(notifyStudentBySupervisor);

module.exports = router;
