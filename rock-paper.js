let userScore =0;
let compScore =0;

const choices =document.querySelectorAll(".choice")
const msg=document.querySelector(".msg");
const userScorePara =document.querySelector("#userScore")
const compScorePara =document.querySelector("#compScore")

choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener("click",()=>{
        // console.log(choice)
        const userChoice = choice.getAttribute("id");
       
        playing(userChoice);
    })
})

const playing =(userChoice)=>{
    //  USERCHOIES
    console.log("user choice =",userChoice)

    //COMPUTERCHOICE
    const comChoice= gencomputerchoice();
    console.log("computer choice =",comChoice)

    if(userChoice===comChoice){
        //draw game
        drawgame();
    }
    else {
       let userWin =true;
       if(userChoice==="rock"){
        //scissors, paper
        userWin = comChoice === "paper" ? false : true ;
       }
       else if(userChoice==="paper"){
        //rock , scissors
        userWin = comChoice === "scissors" ? false : true ;
       }else{
        //rock, paper
        userWin = comChoice === "rock" ? false : true ;
       }
       showWinner(userWin,userChoice,comChoice);
    }
}


const gencomputerchoice =()=>{
    const option =["rock", "paper", "scissors"]
    const computer= Math.floor(Math.random()*3);
    return option[computer]
   // rock , papaer , scissors
}

const drawgame=()=>{
    console.log("draw a game")
    msg.innerText="Game Was Draw"
    msg.style.backgroundColor="black"
    msg.style.border=" 3px solid rgb(233, 33, 236)"
   
}

const showWinner =(userWin,userChoice,comChoice)=>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore
       console.log("you win");
       msg.innerText=`User Winner ${userChoice} beats ${comChoice }`
       msg.style.backgroundColor="green"
       msg.style.border=" 3px solid orangered"
       
    }else{
        compScore++
        compScorePara.innerText=compScore;
        console.log("you loss")
        msg.innerText=`Computer Winner ${comChoice} beats ${userChoice }`
        msg.style.backgroundColor="red"
        msg.style.border=" 3px solid greenyellow"
    }
}





// let  userChoice = 0;
// let  compChoice = 0;


// const choices=document.querySelectorAll(".choice")
// const  msg =document.querySelector(".msg")

// const drawGame =()=>{
//     console.log("game was a draw")
//     msg.innerText ="Draw a Game"
//     msg.style.backgroundColor="pink"
// }

//  const genComputerChoice = () => {
//     // rock paper scissor
//     const option =["rock", "paper","scissors"]
//     const computer =Math.floor(Math.random() * 3)
//     return option[computer]
// }

// const playerChoice =(userChoice)=>{
//     //userChoice game
//     console.log("click a box",userChoice);

//     //ComputerChoice game
//      const compChoice = genComputerChoice();
//      console.log("click a box",compChoice);
     

//      if(userChoice===compChoice){
//         //draw game 

//         drawGame();

//         if()
//      }
// }

// choices.forEach((choice)=>{  
//    choice.addEventListener("click",()=>{
//     console.log(choice)
//     const userChoice =choice.getAttribute("id")
    
//     playerChoice(userChoice)
//    })
// })