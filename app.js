// building server ---------------------------------

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Node Js Server</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to my Node Js project</h2>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/home") {
    res.write("<html>");
    res.write("<head><title>Node Js Server</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to Home Page</h2>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>Node Js Server</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to About Us Page</h2>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else {
    res.write("<html>");
    res.write("<head><title>Node Js Server</title></head>");
    res.write("<body>");
    res.write("<h1>404</h2>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
});

server.listen(4000, console.log("running at localhost 4000"));
