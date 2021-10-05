var axios = require("axios");

const getCommitDetailsByCommitSHA = (req, res) => {

  var config = {
    method: "get",
    url: `https://api.github.com/repos/${req.params.owner}/${req.params.repo}/commits/${req.params.oid}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return res.status(200).json(response.data)
    })
    .catch(function (error) {
      console.log(error);
      return res.status(400).json(error)
    });
};

module.exports = { getCommitDetailsByCommitSHA };
