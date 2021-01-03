let containerHeight = document.getElementById("container").offsetHeight; // container height
let blueBox = document.getElementById("box"); // blue box content
let animation  = 0; // Set Animation initial Value 0 for farther operation


// Create Function for Work on Animation

const AnimationFunction = () =>{
    let blueBoxLeftPosition = blueBox.offsetLeft // Blue Box left position
    let blueBoxTopPosition = blueBox.offsetTop // Blue Box top position
    if((blueBoxLeftPosition + 100) >= screen.width || (blueBoxTopPosition + 100 ) >= containerHeight)
    {
        animation = 1;
    }
    else if(blueBox.offsetLeft <  0)
    {
        animation = 0;
    }
     // working on edge cases

    if(animation === 0)
    {
        blueBoxLeftPosition+=10; //incrase box left position 10px 
        blueBoxTopPosition+=10; //incrase box top position 10px 
    }

    else
    {
        blueBoxLeftPosition -=10; // decrase box left position 10px;
        blueBoxTopPosition -=10; // decrase box top position 10px;
    }

    blueBox.style.left = blueBoxLeftPosition + "px"; // set css property
    blueBox.style.top = blueBoxTopPosition + "px"; // set css property  

    setTimeout(()=>AnimationFunction(),1000); // after one second the function call again
}

setTimeout(()=>AnimationFunction()
    
,1000);

console.log(screen.width);
