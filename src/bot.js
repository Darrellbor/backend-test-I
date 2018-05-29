const Twit = require('twit');
const config = require('./config');
var prompt = require('prompt');
var spreadsheet = require('./spreadsheet');

var bot = new Twit(config);

module.exports = function() {
    var hastags = [];

    var properties = [
            {
                name: 'hashtags', 
                validator: /(#[\w\_\-\d]+){1}(,{1}#{1}[\w\_\-\d]+)*/,
                warning: 'hastags must begin with # and be seperated by commas,'
            }
        ];

    console.log('Enter each hastag beginning with # and seperated by commas: ');

    prompt.start();

    prompt.get(properties, function (err, result) {
        if(err) { 
            return onErr(err); 
        }
        console.log('Command-line input received:');
        console.log('  hashtags: ' + result.hashtags);

        hashtags = result.hashtags.split(",");
        var hashtagsLength = result.hashtags.length;
        console.log('filter stream based on the following hashtags: ', hashtags);

        var stream = bot.stream('statuses/filter', { track: hashtags, language: 'en' });
        stream.on('tweet', function (tweet) {
            console.log('---------------------------------------------------------------------');
            console.log('Profile Name: ', tweet.user.screen_name);
            console.log('Followers: ', tweet.user.followers_count);
            spreadsheet.newRow(tweet.user.screen_name, tweet.user.followers_count);
            console.log('---------------------------------------------------------------------');
        });
    });

    var onErr = function(err) {
        console.log(err);
        return 1;
    }
};