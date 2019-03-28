//Requried modules
const fs = require("fs") ;
const Discord = require("discord.js");

//Loading Config
var config = JSON.parse(fs.readFileSync("DiscordConfig.json","utf8")) ; 
const client = new Discord.Client();    
const Token = config["Connect"]["token"];
const Path = config["Image"]["Path"];
const Debuger = config["Connect"]["Debug"];
var latest = config["Image"]["Latest"];

console.log(Token)
console.log(Path)
console.log(latest)

//Get Image list
image = fs.readdirSync(Path)
//image_l = image.length
console.log(image)

client.on("ready", ()=> {
    console.log("ready...");
});

client.on("message",message => {
   let msgc = message.content;
    let channel = message.channel;
    let author = message.author.username;
	//msgを送信します
	if(msgc === 'ようこそ' && (message.author.bot || message.author.username === Debuger)){//keyword file reload
		var s_image = image[Math.floor(Math.random() * (image.length))]
		message.reply("ようこそ",{files:['Image/'+ s_image]})
		.then(message => console.log("youkoso"))
		.catch(console.error);
		lnnnatest = s_image 
		return;			
	}else if(msgc === '!画像追加'){
		image = fs.readdirSync(Path)	
		message.reply("画像一覧を再読込しました。\n" + "現在の画像数:"+image.length+"枚")	
			.then(message => console.log(`Sent message: ${msgc}`))
			.catch(console.error);
		return;
	}
});
client.login(Token);