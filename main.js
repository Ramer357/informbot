const Discord = require('discord.js');

const client = new Discord.Client();

const ms = require('ms');

const version = '1.0.8';

const owner = '</ramer>';

client.on('ready', () => {
  console.log('Inform is online!');
  client.user.setActivity('^help');
});

client.on('message', async message => {


  //embed
  if (message.content === '^info') {
    const embed = new Discord.MessageEmbed()
      .setTitle('Basic Information')
      .addField('Your Name', message.author.username)
      .addField('Owner of the BOT', owner)
      .addField('Version of the BOT', version)
      .addField('Current Server', message.guild.name)
      .setColor(0x00A1FF)
      .setThumbnail(message.author.avatarURL);
      message.channel.send(embed);
  }

  if (message.content === '^salut') {
    message.reply(' Salut bro');
  }


  if (message.content === '^flawless') {
    message.channel.send('Flawless e baiat frumos si co ownerul meu ^^');
  }
  if (message.content === '^avatar') {
    message.channel.send(message.author.displayAvatarURL());
  }
  if (message.content === '^erweck') {
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

  if (message.content === '^ramer')
    message.channel.send(`Da bro ramer este creatorul meu, el m-a creat de la 0!`);
  if (message.content === '^zrelax') {
    const embedRelax = new Discord.MessageEmbed()
      .setTitle('zRelax e sclavul lui ' + message.author.username)
      .setColor(0xFC00FF)
      .addField('Erweck e suparat', 'dovezile sunt ca relax l-a batut si nu voia asta');
    message.channel.send(embedRelax);
  }

  if (message.content === '^tali'){
    const embedTali = new Discord.MessageEmbed()
    .setTitle ('Tali$ - Diss Tali')
    .setColor ('0xFF0000')
    .addField ('Tali, ye ye ye', 'Esti prost, tali, sau prost')
    .addField (' ','prost!');

    message.channel.send (embedTali);
    message.channel.send ('Ti-am dat-o rau de tot tali lasa-te de viata si du-te sa plangi intr-un colt te rog ahaha');

  }



  if (message.content === '^help') {
    const embedHelp = new Discord.MessageEmbed()
      .setTitle('Help Commands')
      .setColor(0x00A1FF)
      .addField('Prefix', 'Prefixul este ^')
      .addField('Comenzi Amuzante', 'erweck, ' + 'ramer, ' + 'zrelax, ' + 'tali, ' + 'zenith ' + 'flawless, ' + 'hks ' )
      .addField('Comenzi Diverse', 'avatar')
      .addField('Comenzi de Moderare', 'ban, ' + 'kick, ');
    message.channel.send(embedHelp);
  }

  if (message.content === 'prefix') {
    const embedPrefix = new Discord.MessageEmbed()
      .setTitle('Prefixul meu este ^')
      .setColor(0x00A1FF);
    message.channel.send(embedPrefix);
  }
  if (message.content === '^satana'){
    const embedSatana = new Discord.MessageEmbed()
    .setTitle ('Da satana mai trage bine nu' + message.author.username)
    .setColor(0xFFFE00)
    .addField('Eu, '+ message.author.username, 'trag ca drq (ca erweck ahaha)');

    message.channel.send(embedHKS);
  }

  //Moderation coms:

  if (message.content.startsWith('^kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {

        member
          .kick('E prost')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Am dat kick cu succes lui ${user.tag}`);
          })
          .catch(err => {
            message.reply(`Nu am putut da kick lui ${user.tag}`);
            console.error(err);
          });
      } else {
        message.reply("Acel utilizator nu este in acest server!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("Nu ai mentionat cui sa-i dau kick!");
    }
  }

  if (message.content.startsWith === '^ban') {
    if (!message.member.roles.cache.find(r => r.name === "Baieti Amuzanti")) return message.channel.send('Nu ai permisiuni de a da ban!')
    if (!args[1]) message.channel.send('Trebuie sa ii dai tag celui caruia vrei sa-i dai ban!')

    const userb = message.mentions.users.first();

    if (userb) {
      const member = message.guild.member(userb);

      if (member) {
        member.ban({
            reason: 'soarta lol!',
          })
          .then(() => {
            message.reply(`L-am banat cu succes pe ${userb.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply('Acea persoana nu este in acest server!');

      }
    } else {
      message.reply('Acel utilizator nu este in acest server!')
    }
    2

    if (message.content === '^owner') {
      const embedOwner = new Discord.MessageEmbed()
        .setTitle(`Ownerul meu este </ramer>#9999`);

      message.channel.send(embedOwner);

    }
  }


})

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === '👋welcome-quit👋');
  if (!channel) return;
  channel.send(`Bine ai venit pe server, ${member}!`);
});




client.login(process.env.token);