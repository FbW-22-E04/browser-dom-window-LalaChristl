
//    let randomNum = Math.floor(Math.random() * 11);
//    console.log(randomNum);
   
// let randomNum = 1

// for (let i = 0; i < 3; i++) 



function guessNumber() {

    let randomNum = Math.floor(Math.random() * 11);
    console.log(randomNum);
    let userAnswer = window.prompt('Guess a number between 1-10:')

   let guessCount = 0

{
    for (let i = 0; i < 2; i++) 
    if (userAnswer == randomNum) 
    {guessCount++
        alert(`Success! the number is ${randomNum}! Attempts: ${guessCount}`)
        break
     }
        else {
            guessCount++
            console.log('counter', guessCount);
            const answer2 = prompt(`Wrong! Loser! Attempts: ${guessCount}`)
            console.log('answer 2', answer2);
            if (answer2 == randomNum) {
                guessCount++
                alert(`Success! the number is ${randomNum}! Attempts: ${guessCount}`)
        break
        
            }
            else if (guessCount == 2){
                alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNum}`)
            }
          
        }
        


   }

}
guessNumber();