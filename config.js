const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_06_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDIsXG4gICAgICAgIDM1LFxuICAgICAgICA5LFxuICAgICAgICAzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDkyLFxuICAgICAgICA0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY2LFxuICAgICAgICAzMixcbiAgICAgICAgNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICA2MixcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDcwLFxuICAgICAgICA1OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgODcsXG4gICAgICAgIDM1LFxuICAgICAgICA4MixcbiAgICAgICAgMjIxLFxuICAgICAgICA5NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInVFSmtra2RNQ3dRTzBjTUIrWmN3ZVR6bE5IN09yeHZzNHdSTTgvUlNqVE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpkRnJEaG1FUVRtTnFOSk9jVmhIaUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTM3NzY2ZGEtODQ1Mi00N2VjLWEwMmMtY2Q5MzI5YjNhNWRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICA0LFxuICAgICAgMjIwLFxuICAgICAgMjI5LFxuICAgICAgODYsXG4gICAgICAyMDAsXG4gICAgICAzNixcbiAgICAgIDYxLFxuICAgICAgMixcbiAgICAgIDI1MixcbiAgICAgIDIzNyxcbiAgICAgIDEyNSxcbiAgICAgIDEzNixcbiAgICAgIDY1LFxuICAgICAgMSxcbiAgICAgIDE0NixcbiAgICAgIDI3LFxuICAgICAgOTksXG4gICAgICAxMjIsXG4gICAgICAxMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICA2MSxcbiAgICAgIDEwMSxcbiAgICAgIDI0MyxcbiAgICAgIDQ3LFxuICAgICAgNjgsXG4gICAgICAxMTAsXG4gICAgICAzMCxcbiAgICAgIDU4LFxuICAgICAgOSxcbiAgICAgIDI0NixcbiAgICAgIDIzLFxuICAgICAgMTQsXG4gICAgICAxNTksXG4gICAgICAxOTQsXG4gICAgICAxNzMsXG4gICAgICAyNDgsXG4gICAgICAzNSxcbiAgICAgIDEyMyxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxOFRLVFNQNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNTM0Nzc3Mjo5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjMzMTY2MDkyMzMwNTc6OTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkxCaDZRREVMMnluYmtHR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrV0oyNW4rSzhaN2doKzFZSml6U0Y5My8zdWJFUnpiZ0Vkb3ZDK2g3Q1NVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJremxkZlVOUS9SWHJUNG5DRDE0c2dkMThZbWtOLy9PUWt5akZQQ3JMWkRUZThHcEJ4WWF3REVvbTdkanlHUlgwU21xWFRLenR3YmZIN3pzcTFRb0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhEOEpXS3FmWDlWd1R5OUZvcy9vamg4dkdwV3RrQ2lZVGQ3THBrS2xrbVh2T1FhWlNkWWhRejZSZ09ZNTBxOGlhQ3dmT2FkNkRVbEIxVDVlLzF3MEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTUzNDc3NzI6OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDYzMjAwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVtaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRW1oLmpzb24iOiAie1wia2V5RGF0YVwiOlwiblZlYmdZdHlEK0xYa3l6cXloVmZPN2dYNjRhbWNjQ3NLbkxEK1BwVVNKdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4ODA5MjY5MjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
