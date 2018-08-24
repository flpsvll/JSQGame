var questions = [
    {
    prompt:"What's the height of the tallest building in the world?\n(a) Burj Khalifa\n\
        (b) Shangai Tower\n(c) One World Trade Center",
    Answer: "a"    
}
{
    prompt:"What's the faster car in the world?\n(a) Bugatti Chiron\n\
    (b) Koenigsegg Agera RS\n(c) Hennessey Venom F5",
    Answer: "c"    
}
{
    prompt:"Most Populated City in the US?\n(a) Los Angeles, CA\n\
    (b) Dallas, TX\n(c) New York City, NY",
    Answer: "a"    
}
{
    prompt:"Which is the best FF restaurant ever?\n(a) Chik fil-e\n\
    (b) Chik fil-e\n(c) Chik fil-e",
    Answer: "a, b, c"    
}

var score = 0;

for(var i=0; i < questions.lenght; i++){
    var responce = window.prompt (questions [i].prompt)
    if(responce == questions[i].answer) {
        score++;
        alert("You Got It!");
    } else {
        alert("Incorrect");
    }
}
alert("you got " + scrore + "/" + questions.lenght);
