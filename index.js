if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({token: process.env.token});

var Cleverbot = require('cleverbot-node');

// var wwc_office_channel = 'C3QSEE9RR'; // bot_testing

var wwc_office_channel = 'GAMN14X2P'; // teachout
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

    cleverbot = new Cleverbot();
    cleverbot.configure({botapi: "CC7hyVYymxe5PWCKijllWE2tdkg"});
    cleverbot.write(message.text, function (response) {
       bot.reply(message, response.message);
    });

    // var cleverbot = new Cleverbot();
    // cleverbot.params.asbotname = 'Clippy';
    // Cleverbot.prepare(function(){
    //   cleverbot.write(message.text, function (response) {
    //     bot.reply(message, response.message);
    //   });
    // });
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

//rebroadcast things that are DM'd to clippy
controller.on('direct_message', function (bot, message) {
  bot.say({
    channel: wwc_office_channel,
    text: message.text
  });
});

// positive clippy
controller.hears(['New Patreon Pledge'], ['ambient'], function (bot, message) {
  var responses = [];

  responses.push('That’s Incredible');
  responses.push('How Extraordinary!');
  responses.push('Far Out!');
  responses.push('Great!');
  responses.push('Outstanding');
  responses.push('Performance');
  responses.push('Marvelous');
  responses.push('I Can’t Get Over It!');
  responses.push('Wonderful!');
  responses.push('Amazing Effort!');
  responses.push('Unbelievable Work');
  responses.push('You Should Be');
  responses.push('Proud');
  responses.push('Phenomenal!');
  responses.push('You’ve Got It');
  responses.push('Superb!');
  responses.push('You’re Special');
  responses.push('Excellent!');
  responses.push('Cool!');
  responses.push('Your Project Is First');
  responses.push('Rate!');
  responses.push('Way to Go!');
  responses.push('You’ve Outdone');
  responses.push('Yourself');
  responses.push('Thumbs Up');
  responses.push('What A Great');
  responses.push('Listener');
  responses.push('Your Help Counts!');
  responses.push('You Came Through!');
  responses.push('Terrific');
  responses.push('You Tried Hard');
  responses.push('You’re OK');
  responses.push('Fabulous');
  responses.push('You Made It');
  responses.push('Happen');
  responses.push('You’re a Real');
  responses.push('Trooper');
  responses.push('It Couldn’t Be');
  responses.push('Better');
  responses.push('The Time You Put in');
  responses.push('Shows');
  responses.push('Bravo!');
  responses.push('You’re Unique');
  responses.push('Exceptional');
  responses.push('Fantastic Work');
  responses.push('Breathtaking!');
  responses.push('You’re a Great');
  responses.push('Example For Others');
  responses.push('Keep Up the Good');
  responses.push('Work');
  responses.push('Awesome!');
  responses.push('I Knew You Had It In');
  responses.push('You');
  responses.push('You’ve Made');
  responses.push('Progress');
  responses.push('Your Work Is Out of');
  responses.push('Sight');
  responses.push('What an');
  responses.push('Imagination!');
  responses.push('It’s Everything I');
  responses.push('Hoped For');
  responses.push('Stupendous');
  responses.push('You’re Sensational');
  responses.push('Very Good!');
  responses.push('Thanks for Caring');
  responses.push('What a Genius!');
  responses.push('You Made The');
  responses.push('Difference');
  responses.push('Good For You');
  responses.push('A+ Work');
  responses.push('Take a Bow');
  responses.push('Super Job');
  responses.push('How Thoughtful of');
  responses.push('You');
  responses.push('Nice Going');
  responses.push('Class Act');
  responses.push('Well Done');
  responses.push('You’re Inspiring');
  responses.push('How Artistic');
  responses.push('You Go the Extra');
  responses.push('Mile');
  responses.push('Hooray for You');
  responses.push('You’re a Joy');
  responses.push('You’re a Shining');
  responses.push('Star');
  responses.push('You’re Amazing');
  responses.push('What a Great Idea');
  responses.push('Great Answer');
  responses.push('Extra-Special Work');
  responses.push('You Deserve a Hug');
  responses.push('You’re Getting');
  responses.push('Better');
  responses.push('You’re Tops');
  responses.push('You’re Catching On');
  responses.push('You’ve Got What It');
  responses.push('Takes');
  responses.push('You’re Neat');
  responses.push('Spectacular Work');
  responses.push('You’re #1');
  responses.push('Remarkable');
  responses.push('You’re a Winner');
  responses.push('Beautiful');
  responses.push('Clever');
  responses.push('You’re So Kind');
  responses.push('Wow!');
  responses.push('Magnificent!');
  responses.push('You’re Sharp');
  responses.push('Great Discovery');
  responses.push('You’re Very');
  responses.push('Responsible');
  responses.push('Brilliant');
  responses.push('Thanks for Helping');
  responses.push('You’ve Earned My');
  responses.push('Respect');
  responses.push('You’re a Pleasure to');
  responses.push('Know');
  responses.push('You’re Very');
  responses.push('Talented');
  responses.push('How Original');
  responses.push('Very Brave');
  responses.push('Congratulations!');
  responses.push('You’re a Champ');
  responses.push('You’re Super');
  responses.push('You Figured It Out');
  responses.push('Right On!');
  responses.push('You Make Me Smile');
  responses.push('You’re the');
  responses.push('Greatest!');

  bot.reply(message, responses[Math.floor(Math.random() * responses.length)]);

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
