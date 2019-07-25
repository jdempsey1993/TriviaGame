

/// Set countdown function

function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById("timer").innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
document.getElementById("timer").addEventListener("load", timer);

    /// Set the timer to 30 seconds
    
``
    /// Document innerHtml to #timer

    // Alert user time up when hits zero

        // When timer == submit answers

    //Event to show the user how many answers correct
    object.addEventListener("click", handleClick())
    function handleClick() {
        var amountCorrect = 0
        for(var i = 1; i <=6; i++) {
            var radios = document.getElementsByName("group"+i)
            for (var j = 0; j <radios.length; j++) {
                var radio = radios[j]
                if (radio.value == "correct" && radio.checked) {
                    amountCorrect++
                }
            }
        } alert("Correct Responses: " + amountCorrect)
    } 
    

        // Check if wrong or correct against value wrong or correct

    // Show user which answer is correct 

        // Document innerHTML correct or incorrect to divs

    // Show number of user correct incorrect or unanswer\

        // Counter function

        //Write to html using Javascript function