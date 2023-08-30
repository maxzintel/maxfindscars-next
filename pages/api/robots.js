// pages/api/robots.js

export default (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write("User-agent: *\n");
  res.write("Disallow: /secret\n");
  res.write("Allow: /");
  res.end();
};
