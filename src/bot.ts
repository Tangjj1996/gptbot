import { OpenAIApi, Configuration } from "openai";
import type { MessageInterface } from "wechaty/impls";
import config from "./config";

const configuration = new Configuration({
  apiKey: config.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export class ChatGPTBot {
  async onMessage(message: MessageInterface) {
    await 1;
  }
}
