const router = require("express").Router();

const {
  createStudentGroup,
  getStudentGroups,
  getStudentGroup,
  updateStudentGroup,
  deleteStudentGroup,
} = require("../../controllers/StudentGroups");

router.route("/createStudentGroup").post(createStudentGroup);
router.route("/getStudentGroups").get(getStudentGroups);
router.route("/getStudentGroup/:id").get(getStudentGroup);
router.route("/updateStudentGroup/:id").put(updateStudentGroup);
router.route("/deleteStudentGroup/:id").delete(deleteStudentGroup);

module.exports = router;
