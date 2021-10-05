const express = require("express");
const router = express.Router();
const {getCommitDetailsByCommitSHA} = require("../Controller/commit-controller")

router.get("/repositories/:owner/:repo/commits/:oid",getCommitDetailsByCommitSHA)

module.exports = router;