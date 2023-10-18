let min = 1,
    max = 10,
    winningNum = Math.floor(((Math.random() * 10) + 1)),
    guessesLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput= document.querySelector('#guess-input'),
      message = document.querySelector('#message');
    
    minNum.textContent = min;
    maxNum.textContent = max;

const newBtn = document.createElement("button");
newBtn.id = "btn";
newBtn.type = "button";
newBtn.appendChild(document.createTextNode("Replay"));


console.log(winningNum);
    guessBtn.addEventListener('click', function(){
        let guess = parseInt(guessInput.value);
         
        if(isNaN(guess) || guess < min || guess > max){
            setMessage(`Please enter a number between ${min} and ${max}`, "red");
        }else if(guess === winningNum){
            gameOver(true,`${winningNum} is correct,YOU WIN!`);
            

        } else{
            guessesLeft -= 1;
            if(guessesLeft === 0){
                gameOver(false, `Game Over, You lost. The correct number was ${winningNum}`)
            
                // newBtn.addEventListener("click", function(){
                    // location.reload();
                // })
            } else{
                guessInput.style.borderColor = "red"
                guessInput.value = ""
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
               }
            }
         });

function gameOver(won, msg){
    let color;
    if(won === true){
        color = "green"
    } else{
        color = "red"
    }

    
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);
    game.replaceChild(newBtn, guessBtn)
    newBtn.addEventListener("click", function(){
        location.reload();
    })
}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}