let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const  msg=document.querySelector("#msg")
const  rmsg=document.querySelector("#round")
const userScorep=document.querySelector("#user-score");
const compScorep=document.querySelector("#comp-score");
const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    //to generate computer choice
    //we use Math,random()..but it generates from 0 to 1
    //but we need as 0 or 1 or 2 becoz the array length is 3 
    //so multiply floor(Math.random()*3) to get values as 0 or 1 or 2
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}


const drawGame=()=>{
    console.log("Game is drawn!");
    msg.innerText="Game is drawn!"
    msg.style.backgroundColor="gray";
}
 const reset=()=>{
    setTimeout(()=>{
    userScore=0;
    compScore=0;
    userScorep.innerText=userScore;
    compScorep.innerHTML=compScore;
    msg.innerText="Play your move";
    rmsg.innerText="Next Round"
    },3000)
 }

const showWinner=(userWin,userChoice,compChoice)=>{
   
    if(userWin){
    userScore++;
    userScorep.innerText=userScore;
    msg.innerText=`You have won!. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    if(userScore===3) 
    {
        rmsg.innerText=`Congratulations! You have won the round`;
        reset();
    }
    
}
    else{ 
    compScore++;
    compScorep.innerText=compScore;
    msg.innerText=`You have lost!.  ${compChoice} beats  your ${userChoice}`;
    msg.style.backgroundColor="red";
    if(compScore===3) 
    {
        rmsg.innerText=`Better luck to the next round`;
        reset();
    }
    
}


};


const playGame=(userChoice)=>{
    console.log("user choice is:",userChoice)
    const compChoice=getCompChoice();
    console.log("comp choice is:",compChoice)
    
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==='rock'){
            userWin=compChoice==='paper'?false:true;  
   
        }else if(userChoice==='paper'){
            userWin=compChoice==='scissors'?false:true;
        }else{
            userWin=compChoice==='rock'?false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }


}


choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice is clicked",userChoice);
        playGame(userChoice);
    })
});
