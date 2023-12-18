var x = [
    "Don't blame the clown for acting like clown , blame yourself for visiting the circus -Harvey Specter-",
    "Once you see it in your mind , You're going to hold it in your hands  -The Secret-",
    "When the world turns its back on you , you turn your back to the world -Temon-",
    "Yasterday is history , Tommorrow is mystery but today is a gift ,Thats why it calls PRESENT  -kungfu panda",
    "Any one can do your job , but no one can't be you  -Harvey specter-",
    "Just because it's hard , dosent mean its imposible ",
    "Dont let anyone tell you you cant do something , If you want something go get it .  -will Smith- "
];
var y= -1

function generateQuote() {
    do{
    var randomQuote = Math.floor(Math.random() * x.length);
    }
    while (randomQuote==y);

    y=randomQuote;
  
  document.getElementById("tik").innerHTML=x[randomQuote];
}