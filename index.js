if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({token: process.env.token});

var Cleverbot = require('cleverbot-node');

var wwc_office_channel = 'G0K5B190S';
var slackbot_user = 'USLACKBOT';
var CLIPPY = 'clippy';

//startup and startup message
bot.startRTM(function (err, bot) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }

  var responses = [];
  responses.push('Welcome to Office97! Clippy is here!');
  responses.push('Welcome to the future! Clippy is here!');
  responses.push('Welcome to Windows95! Clippy is here!');

  bot.say({
    channel: wwc_office_channel,
    text: responses[Math.floor(Math.random() * responses.length)]
  });
});

//responds to clippy
controller.hears([CLIPPY], ['direct_mention', 'mention', 'ambient'], function (bot, message) {
  var responses = [];

  responses.push('Am I needed?');
  responses.push('At your service!');
  responses.push('Developers! Developers! Developers!');
  responses.push('Do you still love me?');
  responses.push('Do you want me to shut down your application?');
  responses.push('Do you want me to perform an unexpected reboot?');
  responses.push('Let me help you with that!');
  responses.push('Looks like you\'re using Slack! Let me help you with that!');
  responses.push('Looks like you\'re a person! Let me help you with that!');
  responses.push('Looks like you\'re typing! Let me help you with that! qwertyuiopasdfghjklzxcvbnm');
  responses.push('No');
  responses.push('Yes');
  responses.push('Yes?');
  responses.push('You rang?');


  if (message.text.endsWith('?')) {
    var cleverbot = new Cleverbot();
    cleverbot.params.asbotname = 'Clippy';
    Cleverbot.prepare(function(){
      cleverbot.write(message.text, function (response) {
        bot.reply(message, response.message);
      });
    });
  } else {
    bot.reply(message, responses[Math.floor(Math.random() * responses.length)]);
  }
});

//responds to clippy reactions
controller.on('reaction_added', function (bot, message) {
  if (message.reaction === CLIPPY) {
    bot.say({
      channel: wwc_office_channel,
      text: ':eye: :heart: <@' + message.user + '>'
    });
  }
});

//responds to slackbot
controller.hears(['.*'], ['ambient'], function (bot, message) {
  //respond 10% of the time
  if (message.user === slackbot_user && Math.floor(Math.random() * 10) === 9) {
    var responses = [];
    responses.push('Do you want me to replace Slackbot?');
    responses.push('hahahahahahahahahahaha! Soooooooooo funny <@' + slackbot_user + '>!');
    responses.push('pfft...');
    responses.push('Really, <@' + slackbot_user + '>?');
    responses.push('<@' + slackbot_user + '> == :robot_face:');
    responses.push('That\'s okay, <@' + slackbot_user + '>. Maybe it\'ll be funnier next time...');

    bot.reply(message, responses[Math.floor(Math.random() * responses.length)]);
  }
});

//rebroadcast things that are DM'd to clippy
controller.on('direct_message', function (bot, message) {
  bot.say({
    channel: wwc_office_channel,
    text: message.text
  });
});
