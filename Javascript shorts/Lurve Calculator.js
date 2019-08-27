/* 
    Lurve calculator!
    * Prompt for two names 
    * generate a random number between 1 and 100
    * display the love score as a percentage
*/


var firstPerson = prompt("Who is the first person?");
var secondPerson = prompt("And who is the second person?");
var loveScoreDescription;

var loveScore = Math.floor((Math.random() * 100)) + 1;

if (loveScore >= 80)
    {
        loveScoreDescription = "Ooohhh, when's the wedding!";
    }
else if (loveScore >= 60)
    {
        loveScoreDescription = "Not bad at all!";
    }
else if (loveScore >= 40)
    {
        loveScoreDescription = "Meh";
    }
else if (loveScore >= 20)
    {
        loveScoreDescription = "Oh dear...";
    }      
else
    {
        loveScoreDescription = "It'll never work!";
    }

// display the results
alert("The Lurve Score for " + firstPerson + " & " + secondPerson + " is \n\n" + loveScore + "%\n\n" + loveScoreDescription);



