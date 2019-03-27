//Requried modules
const fs = require("fs") ;
const Discord = require("discord.js");

//Loading Config
var config = JSON.parse(fs.readFileSync("DiscordConfig.json","utf8")) ; 
const client = new Discord.Client();    
const Token = config["Connect"]["token"];
const Path = config["Image"]["Path"];
const Latest = config["Image"]["Latest"];

console.log(Token)
console.log(Path)
console.log(Latest)

client.on("ready", ()=> {
    console.log("ready...");
});

client.on("message",message => {
    if(message.author.bot){
        return;
    }else{
        let msgc = message.content;
        let channel = message.channel;
        let author = message.author.username;
		//msgを送信します
		
		if(msgc.toUpperCase() === 'Reload'.toUpperCase()){//keyword file reload
			message.reply("KeyWord File Reload")
				.then(message => console.log("KeyWord File Reload"))
				.catch(console.error);
			KeyWord = JSON.parse(fs.readFileSync("KeyWord.json","utf8")) ;
			return;			
		}else{
				.then(message => console.log(`Sent message: ${msgc}`))
				.catch(console.error);
			return;
		}
   }
}
);

client.login(Token);

