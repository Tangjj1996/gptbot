import { OpenAIApi, Configuration } from "openai";
import type { MessageInterface } from "wechaty/impls";
import config from "./config.js";
import { logger } from "./utils.js";

const configuration = new Configuration({
  apiKey: config.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export class ChatGPTBot {
  /**
   * message count
   * don't be rereference
   */
  private count = 0;

  async onMessage(message: MessageInterface) {
    if (message.self() && this.count === 0) {
      this.count++;
      await message.say(`debug mode:\n`);
    }
  }
}
