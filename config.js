const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "24165506084";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_21_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDcwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDk2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMixcbiAgICAgICAgODEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDU4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICAyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI5LFxuICAgICAgICA3LFxuICAgICAgICA0NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICA2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgxLFxuICAgICAgICA2MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDksXG4gICAgICAgIDIzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIyLFxuICAgICAgICA2MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDkzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoc1I1SEwzYVZzaURsRXhCdTQ2QTdHNTZVbFIxNHlyRWQ5WmRrRmRwcjdZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI0MTA1ODU4OTcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRkY0MUMyMTM4MEYwOTk1NzhDNjk5QkJDNjZFRTdCOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0MjQ4NzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNDEwNTg1ODk3MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDU2OTFFMDNERTYxN0Y4MUNBOEYyREJGOTQ1MDYxM0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNDI0ODc3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNPOXpCaXY4VEt1MG9zUnhFbkw2OXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWJhOWUzZDEtY2IzYi00OTYxLWI2MDctNzg1YWI3MTkwNzg5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICA4NSxcbiAgICAgIDI0MSxcbiAgICAgIDI5LFxuICAgICAgMTQyLFxuICAgICAgMjA1LFxuICAgICAgMTIxLFxuICAgICAgMTQ4LFxuICAgICAgNDcsXG4gICAgICAxMDksXG4gICAgICAzOSxcbiAgICAgIDM3LFxuICAgICAgMTQ2LFxuICAgICAgMjQsXG4gICAgICAxNzUsXG4gICAgICAyMDEsXG4gICAgICAyMTMsXG4gICAgICAxOTQsXG4gICAgICAyMzQsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMTUwLFxuICAgICAgNDIsXG4gICAgICAyMDYsXG4gICAgICAyNTEsXG4gICAgICA4NCxcbiAgICAgIDc2LFxuICAgICAgMjE5LFxuICAgICAgMjIsXG4gICAgICAzMCxcbiAgICAgIDcyLFxuICAgICAgMjE0LFxuICAgICAgMTcxLFxuICAgICAgNDYsXG4gICAgICAxNyxcbiAgICAgIDI0MixcbiAgICAgIDIzNixcbiAgICAgIDEzNCxcbiAgICAgIDEzMyxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYNzdEQ0VFMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQxMDU4NTg5NzI6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuG1iOG1icui4bWXyrPhtZjhtpzhtZfhtZLKs/CdkLfwnZuv8J2RhvCdkYfwnZGF8J2RiPCdkLbwnZGH8J2bqfCdkYVcIixcbiAgICBcImxpZFwiOiBcIjI0NTE1NzIxOTg1NjU5NTo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09PUnQvMEJFS084cUxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicGhiSzJzeXorSjRmUUpEQ0JZRXVDUXgrOEhOS1FaSjk1ckk4RkRMQm5CVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxL3luNnFpWVZTdUtmSitJVTc3aytoNGRGdmRpT1Q3b0RwQmhFUWVTNmtGZTlhMnhQbDJpMTcvR3JWYVZPVW9tNFB5bVd1RXZJN3hmME0wSEZjMjFBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJITnRvbkxRQ2tpaWZDTTh5TmtFeDE3cjViQ3RuMS9IdlJsZnR5MW9XTzVFNVVFeFVYdWF1OWVPMUYvdURDZnp5UUNnS3dlWlErc3ZmWStSbkZCMjlDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNDEwNTg1ODk3Mjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDI0ODcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2huXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDaG4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZd1I4RXdwVEgyOTFhZWVhemp0MEpFRkJTZkRhdE1LN2dabDRZVHNqMWdNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUzMTQ4Mjg1MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNDI0ODc0MTk2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "█▓▒­░⡷⠂𝛨𝑈𝛭𝛥𝛮ᵉʳʳᵒʳ⠐⢾░▒▓█",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
