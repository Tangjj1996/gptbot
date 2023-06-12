import "dotenv/config";
import QRCode from "qrcode";
import { WechatyBuilder } from "wechaty";
import { ChatGPTBot } from "./bot";
import { logger } from "./utils";

const chatGpt = new ChatGPTBot();

const bot = WechatyBuilder.build({
  name: "gptbot",
  puppet: "wechaty-puppet-wechat",
  puppetOptions: {
    uos: true,
  },
});

async function main() {
  const initializedAt = Date.now();
  bot
    .on("scan", async (qrcode, status) => {
      const url = `https://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`;
      logger.info(`Scan QR Code to login: ${status}\n${url}`);
      logger.info(
        await QRCode.toString(qrcode, { type: "terminal", small: true })
      );
    })
    .on("login", (user) => {
      logger.info(`User ${user} logged in`);
    })
    .on("message", async (message) => {
      if (message.date().getTime() < initializedAt) {
        return;
      }
      if (message.text().startsWith("/ping")) {
        await message.say("pong");
        return;
      }
      await chatGpt.onMessage(message).catch(logger.error);
    });
  await bot.start().catch((error) => {
    logger.error(
      `Bot start failed, can you log in through wechat on the web?: ${error}`
    );
  });
}

await main().catch(logger.error);
