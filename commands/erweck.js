module.exports = {
    name: 'erweck',
    description: 'erweck sucks',
    execute(message, args){
        const embedErweck = new Discord.MessageEmbed()
        .setTitle('Erweck sucks lol salamtroll haha')
        .setColor(0xFC00FF)
        .addField('El a scris comanda', message.author.username + ' e vina lui nu a mea')
        .addField('Adevar', 'Erweck e prost hahaha lol')
        .addField('Plus dovadaaa', 'nu e dovada ca e prea prost hahaha')
        .addField('Esti naber', 'Ai bulan si esti si nici cu ala nu poti sa faci peste 3 killuri')
        .setThumbnail(message.author.avatarURL);
        message.channel.send(embedErweck);
        message.channel.send('joke nu te supara lol');
    }
}