var Quotes = [
      "Hey, Brother.",
      "I've made a huge mistake.",
      "I'm afraid I just blue myself.",
      "There's always money in the banana stand.",
      "Who'd like a banger in the mouth? Oh, right, I forgot. Here in the states you call it a sausage in the mouth.",
      "Has anyone in this family ever even seen a chicken?",
      "Well, I don't want to blame it all on 9/11, but it certainly didn't help.",
      "Oh come on, don't leave your Uncle Tea Bag hangin'.",
      "Everyone's laughing and riding and cornholing except Buster.",
      "This will keep me safe from the hot mexican sun.",
      "I'm afraid I prematurely shot my wad on what was supposed to be a dry run, if you will. So now I'm afraid I have something of a mess on my hands.",
      "Do you guys know where I could get one of those gold necklaces with the 'T' on it?",
      "There are dozens of us. Dozens!.",
      "Annyong!",
      "No touching!",
      "If that's a veiled criticism about me, I won't hear it and I won't respond to it.",
      "Oh my god! We're having a fire... sale.",
      "I was gonna smoke the marijuana like a cigarette.",
      "And that's why you always leave a note.",
      "Do these effectively hide my thunder?",
      "Yeah, like anyone would want to 'R' her.",
      "It walked on my pillow!",
      "Douche, chill!",
      "She's not *that* Mexican, Mom, she's my Mexican. And she's Columbian or something...",
      "I don't understand the question, and I won't respond to it.",
      "Her?",
      "Beads!?",
      "These are my awards, Mother. From Army.",
      "Still...where'd the lighter fluid come from?",
      "You and G.O.B. were like those biblical brothers, Gallant and, um... Goofuth.",
      "Yeah the poor guy is probably out there without a flipper, swimming around in a circle, freaking out his whole family.",
      "You're forgetting, Lindsay, that as a psychiatrist, I was a professional twice over - an analyst and a therapist. The world's first 'analrapist'",
      "You don't need doubletalk - you need Bob Loblaw!",
      "Taste the happy, Michael!",
      "Take a look at banner, Michael!"
];
 
var Author = [
    "Buster Bluth",
    "All",
    "Tobias Fünke",
    "George Bluth Sr",
    "Tobias Fünke (as Mrs. Featherbottom)",
    "Michael Bluth",
    "Tobias Fünke",
    "Tobias Fünke",
    "Lucille Bluth",
    "Buster Bluth",
    "Tobias Fünke",
    "Maeby Fünke",
    "Tobias Fünke",
    "Annyong",
    "Prison Guard",
    "Lucille Bluth",
    "Tobias Fünke",
    "George Michael Bluth",
    "J. Walter Weatherman",
    "Tobias Fünke",
    "Buster Bluth",
    "Buster Bluth",
    "Tobias Fünke",
    "George Oscar Bluth (GOB)",
    "Lucille Bluth",
    "Michael Bluth",
    "George Oscar Bluth (GOB)",
    "Buster Bluth",
    "George Oscar Bluth (GOB)",
    "George Bluth Sr",
    "George Oscar Bluth (GOB)",
    "Tobias Fünke",
    "Bob Loblaw",
    "George Oscar Bluth (GOB)",
    "George Oscar Bluth (GOB)"
  ];
  
$(document).ready(function(){	
  var i=randomnumber();
    $(".quote").append(Quotes[i]);
    $(".author").append(Author[i]);
	
  $(".quotebutton").click(function(){
  var i=randomnumber();	
    $(".quote").empty();
    $(".author").empty();
    $(".quote").append(Quotes[i]);
    $(".author").append(Author[i]);
});
  
  function randomnumber(){
    return Math.round(Math.random()*4);
  };
  
  var isContains = $('.author').text().indexOf('Lucille Bluth') > -1;
  var isContains2 = $('.author').text().indexOf('Buster Bluth') > -1;
  var isContains3 = $('.author').text().indexOf('Michael Bluth') > -1;
  var isContains4 = $('.author').text().indexOf('Tobias Fünke') > -1;

  
  if (isContains == true) {
    $('.bg1').css('background-image','url(http://i.imgur.com/5x5xsuU.png)');
  } 
  if (isContains2 == true) {
    $('.bg1').css('background-image','url(http://i.imgur.com/1fOauS3.png)');
  }
  if (isContains3 == true) {
    $('.bg1').css('background-image','url(http://i.imgur.com/pnXK2xh.png)');
  }
  if (isContains4 == true) {
    $('.bg1').css('background-image','url(http://i.imgur.com/mOt03P8.png)');
  }
   
 });
