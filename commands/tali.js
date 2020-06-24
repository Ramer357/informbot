module.exports = {
    name: 'tali',
    description: 'talis',
    execute(message, args){
        const embedTali = new Discord.MessageEmbed()
    .setTitle ('Tali$ - Diss Tali')
    .setColor ('0xFF0000')
    .addField ('Tali, ye ye ye', 'Esti prost, tali, sau prost')
    .addField('prost!', 'o ye');

    message.channel.send (embedTali);
    message.channel.send ('Ti-am dat-o rau de tot tali lasa-te de viata si du-te sa plangi intr-un colt si da-ti alt+f4 la viata ba hahaha');

  }
    }
