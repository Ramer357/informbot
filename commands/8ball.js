const { DiscordAPIError, MessageEmbed } = require("discord.js");

module.exports = {
    name: '8ball',
    description: 'questidk',
    execute(message, args){
        if(!args[2]) return message.reply("Please ask a full question!")
        let replies = ["Yes.", "NO.", "Idk", "Give me a cookie", "Intreaba mai tz"];

        let result = Math.floor((Math.random() * replies.length))
        let question = args.slice(0).join(" ");

        const embedBall = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setColor(0x007AFF)
        .addField('Intrebarea ta: ', question)
        .addField('Raspuns: ', replies[result]);

        message.channel.send(embedBall);

    }
}