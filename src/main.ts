import 'dotenv';
import { WechatyBuilder } from 'wechaty';

const bot = WechatyBuilder.build({
  name: 'gptbot',
  puppet: 'wechaty-puppet-wechat',
  puppetOptions: {
    uos: true 
  }
})