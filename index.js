import net from "node:net";

const OPTIONS = {
  port: 7200,
  host: "127.0.0.1",
};

const clientTcp = net.createConnection(OPTIONS);

const sendMessage = (request) => {
  if (request.length === 0) {
    clientTcp.write(JSON.stringify(request));
  } else if (
    request[0] === "--get" &&
    request[1] === "id" &&
    request[2] !== undefined
  ) {
    clientTcp.write(JSON.stringify(request));
  } else if (
    request[0] === "--get" &&
    request[1] === "title" &&
    request[2] !== undefined
  ) {
    clientTcp.write(JSON.stringify(request));
  } else if (
    request[0] === "--get" &&
    request[1] === "author" &&
    request[2] !== undefined
  ) {
    clientTcp.write(JSON.stringify(request));
  } else if (
    request[0] === "--get" &&
    request[1] === "tag" &&
    request[2] !== undefined
  ) {
    clientTcp.write(JSON.stringify(request));
  } else if (
    request[0] === "--add" &&
    request[1] === "title" &&
    request[2] !== "author" &&
    request[3] === "author" &&
    request[4] !== "tags" &&
    request[5] === "tags" &&
    request[6] !== undefined
  ) {
    clientTcp.write(JSON.stringify(request));
  } else if (
    request[0] === "--delete" &&
    request[1] === "book" &&
    request[2] === "id" &&
    request[3] !== undefined
  ) {
    clientTcp.write(JSON.stringify(request));
  } else if (
    request[0] === "--add" &&
    request[1] === "user" &&
    request[2] !== undefined &&
    request[3] !== undefined
  ) {
    if (request[3].length >= 8) {
      clientTcp.write(JSON.stringify(request));
    } else {
      console.log("WARNING!_PASSWORD_MUST_BE_8_CHARACTERS!");
      clientTcp.end();
    }
  } else if (
    request[0] === "--delete" &&
    request[1] === "user" &&
    request[2] !== undefined
  ) {
    clientTcp.write(JSON.stringify(request));
  } else {
    console.log("CORRECTLY_ENTER_THE_DATA");
    clientTcp.end();
  }
};

clientTcp.on("connect", () => {
  const params = process.argv.slice(2);
  sendMessage(params);
});

clientTcp.on("data", (serverData) => {
  const serverMsg = serverData.toString();
  const objData = JSON.parse(serverMsg);
  console.log(objData);
  clientTcp.end();
});

clientTcp.on("error", () => {});
