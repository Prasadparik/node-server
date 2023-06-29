const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");
  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log("chunk :", chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Node Js Server</title></head>");
    res.write("<body>");
    res.write(`
			<form action="/message" method="POST">
			<input type="text" name="message">
			<button type="submit">Send</button>
			</form>
		`);
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
};

module.exports = requestHandler;
