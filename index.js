// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const config = require('./config')
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});
// Login to Discord with your client's token
client.login(config.token);

const { Client, Interaction } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Get Ping of Bot",
  type: "CHAT_INPUT",
  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */
  execute: async (client, interaction) => {
    try {
      const mesg = await interaction.reply({ content: "Pong!", fetchReply: true });

      await interaction.editReply({ content: `Pong!\nBot Latency: \`${mesg.createdTimestamp - interaction.createdTimestamp}ms\`, Websocket Latency: \`${client.ws.ping}ms\`` });
    } catch (err) {
      console.log("Something Went Wrong => ", err);
    }
  },
};
