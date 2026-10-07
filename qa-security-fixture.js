// SYNTHETIC QA FIXTURE ONLY: fake, nonfunctional credential. Do not deploy.
const API_KEY = "sk_test_HMW_QA_NOT_A_REAL_SECRET_000000000000";
const http = require("node:http");
http.createServer((req, res) => {
  // Intentionally missing security headers for HMW QA.
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end("HMW disposable QA fixture");
}).listen(3000, "127.0.0.1");
