import "dotenv";
import { WechatyBuilder } from "wechaty";
import { log } from "@/util";

const bot = WechatyBuilder.build({
  name: "gptbot",
  puppet: "wechaty-puppet-wechat",
  puppetOptions: {
    uos: true,
  },
});

async function main() {
  bot.on("scan", async () => {}).on("login", async () => {});
  await bot.start();
}

await main().catch(log.error);
