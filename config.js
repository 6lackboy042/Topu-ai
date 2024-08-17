//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "2348067747322";
global.sudo = process.env.SUDO || "2348067747322";
global.owner = process.env.OWNER_NUMBER || "2348067747322";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUJtOEFxV2F5MVROeVpOUGh6VmFrM1V3L0FKVXRpOFBmbWl0V3VrWEpFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHRBNmJzTHk5WTJMaHVBQUc4c1BqMXRFbSswb3ROMW9hTTZIL05MY0ZVcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTVpVN1VQSWZHTGptUXFGNU1ndVllUW1PbDhab0hhbHNvWFp2a3Znbm53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSSHBROXpVZGc2YVVIYUY4ZUVPaDhmVE9TSnYrZHB4TVpxMElCemhGbEMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOWnJJYWNLZ3NQOFdoeHdlTkd4QTBaWXJ6S2hwc1dBeFltRUJhbDR0WHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndTS3pkeFZlQjczK05IelNHZm5kanlNYVo2cktyb2lhTHRVbDV2blc4bGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVURaWGVhemU3MzV5cDBubDNjTXF1b1QxbWxqdW4xbDh6WCtickhwbGduND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGtaQUFkVXdYTUYxK1FINnpTUENGSWRkWXluRlZBMU4zYjFFaWtNQ2xsZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxhdmlyZ2U4Mmx6VExnM3BEWHNwbGJKMUo5MlhsbHR0UFl6ZWlMRitlSmUzODdkcUFjWGZRWVRxRlZvS1dqdzVKczFQNHZicVpZK2xRd3N3U3BoZ0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoidzNaWi8waTVTS2lINUhaRTBpMWdlWTdmdHRVRzFEL21VK0R5WkJVaXBNQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MDY3NzQ3MzIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY4MUI3ODE1NjI1NzU2MTNGQjM3M0REOTBBQUFCMjQwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM5MjI2NTJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNjc3NDczMjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTdDRjRGQjlDMjQ5NTdGODRCODBGMkQ4RUMwQzg5NDIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzkyMjY1M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA2Nzc0NzMyMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3QjVCQzgzMzNBRkM2MTUzNDgzQjFEMEQzRjY2MzU5NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzOTIyNjU0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MDY3NzQ3MzIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZBMjMzNUZFMTMzODZGREY4M0MwQzhGNzc4RDUyMUVCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM5MjI2NTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNma2k5clpCUVgtaTJaNTRWdEwxc1EiLCJwaG9uZUlkIjoiYjFmNmIyOWItY2JiOS00YTJmLWFiYWYtYzNmMmMxN2E2ZDMxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhoZE1wSDN3d0d1RStQRHNsM21OaWRuZUhJTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwa0ZIa0FZb2pqUzV4UlI5SFFYb2hGaGdMRWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSlJFQ05FOVgiLCJtZSI6eyJpZCI6IjIzNDgwNjc3NDczMjI6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBYm9kZSBNYW5hZ2VtZW50In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZnJ4ZVFGRU0zeGc3WUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVNnluMW9lQUJNSVNFaE5OaFpkbUhiOW1wYUwzV3dRakF5TitUUGRBY0JzPSIsImFjY291bnRTaWduYXR1cmUiOiJVejBWeTdzUm91c3hLZjRUcUlYdDg0Y3c1WmV5YytIdy9jTDZaUUlJY3NhSDgxUHpWMko0VUdUWTdTUTQ0WEczTUdXR3drV3Nqc1ljZDJMOGJLRDNCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicXVpNlQ1ZVh3UGJDNGpXazViWXRoQmt5b1kvaklNZmJwQSt3RHdwSkxlbjN6bDROaXdSSlI1L2tITnBkMTdQRHNhbEpTNlN3KzNITTM3QUVJZFZoQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDY3NzQ3MzIyOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVk9zcDlhSGdBVENFaElUVFlXWFpoMi9acVdpOTFzRUl3TWpma3ozUUhBYiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzkyMjY1MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMY1QifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
