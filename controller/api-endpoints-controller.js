const endpoints = require("../endpoints.json");

exports.getAllEndpoints = async (req, res, next) => {
  try {
    res
      .status(200)
      .header("Content-Type", "application/json")
      .send({ endpoints });
  } catch (err) {
    next(err);
  }
};
