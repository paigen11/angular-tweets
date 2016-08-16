function Tweet(title, twitterHandle, userPicture, tweet, time){
	this.title = title;
	this.twitterHandle = twitterHandle;
	this.userPicture = userPicture;
	this.tweet = tweet;
	this.time = time;
}

Tweet.prototype.getTimeSince = function(theDate){
	// console.log(theDate);
	// put in a bunch of logic to figure out the largest denomination of time
	// var timeSince = (theDate - this.time) / 1000;
	// if(timeSince > secondsInAYear){
	// 	var textToPost = Math.floor(timeSince /secondsInAYear);
	// }
	return (theDate - this.time) / 1000;
};

Tweet.prototype.company = "Twitter";

var tweetArr = [];

var newTweet1 = new Tweet("Title", "@pniedri", "https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500", "this is a test", 1471351423825);
tweetArr.push(newTweet1);
var newTweet2 = new Tweet("Title2", "@pniedri", "https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500", "this is a test", 1471351423826);
tweetArr.push(newTweet2);
var newTweet3 = new Tweet("Title3", "@pniedri", "https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500", "this is a test", 1471351423827);
tweetArr.push(newTweet3);
var newTweet4 = new Tweet("Title4", "@pniedri", "https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500", "this is a test", 1471351423828);
tweetArr.push(newTweet4);
var newTweet5 = new Tweet("Title5", "@pniedri", "https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500", "this is a test", 1471351423829);
tweetArr.push(newTweet5);

// console.log(newTweet1.getTimeSince(Date.now()));
// console.log(newTweet2.getTimeSince(Date.now()));

console.log(tweetArr);
