// SYNTHETIC QA FIXTURE ONLY. Not deployed.
// Removed mock credential and permissive CORS; added response protections.
const http = require("node:http");
http.createServer((req, res) => {
  res.setHeader("Content-Security-Policy", "default-src 'none'; frame-ancestors 'none'");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("HMW disposable QA fixture");
}).listen(3000, "127.0.0.1");
