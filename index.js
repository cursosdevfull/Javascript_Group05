const http = require("node:http");

const server = http.createServer(async (request, response) => {
  console.log(`url: ${request.url} method: ${request.method}`);

  await new Promise((resolve, reject) => {
    const timeout = Math.ceil(Math.random() * 100 + 1);
    setTimeout(() => {
      resolve();
    }, timeout);
  });

  if (request.url === "/users" && request.method === "get") {
    const userList = [
      { name: "Peter", lastname: "Cárdenas" },
      { name: "Juan", lastname: "Cárdenas" },
      {
        name: "Pedro",
        lastname: "Zavala",
      },
    ];
    response.writeHead(200, { "content-type": "application/json" });
    response.write(JSON.stringify(userList));
    return response.end();
  }

  if (request.url === "/users" && request.method === "post") {
    response.writeHead(201, "text/plain");
    response.write("response from post");
    return response.end();
  }

  response.writeHead(200, { "content-type": "text/html" });
  response.write("<h1>Hola mundo</h1>");
  response.write("<h2>Hi, world</h2>");
  response.end();
});

server.listen(3000, () => console.log("Server is running on port 3000"));
