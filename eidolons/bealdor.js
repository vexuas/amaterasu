const embed = {
  "title": "Bealdor",
  "description": "Bealdor is the God of Light, illuminating all the world. Coddled and sheltered by his mother since he was young, he neglected worldly affairs. This offended Hel, who began to resent him. \n\nBealdor's mother once asked all the world's creatures to swear an oath not to harm him. They agreed, and he became impervious to danger. Now he can stand at the front line of any battle without fear. His powers of destruction are not to be underestimated. When he brandishes his longsword, Skee - made from the first rays of the dawn - he can perform quick and furious attacks. As an Eidolon, he is considered proficient in both attack and defense.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Bealdor-gracevalhalla.png)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511487226899726357/bealdor-discord.png"
  }
};

module.exports = {
  name: 'bealdor',
  description: 'bealdor prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};