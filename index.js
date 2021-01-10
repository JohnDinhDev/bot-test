const discord = require("discord.js");

const client = new discord.Client();

client.on("ready", () => {
  console.log("Logged in");
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

client.login("token");
