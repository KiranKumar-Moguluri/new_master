const boxes = Array.from(document.getElementsByClassName("box"));

const playerText=document.getElementById('playerText');
const restartbtn =document.getElementById('restart-btn');

const space=[];
const player1="X";
const player2="0";

let currentPlayer;


const drawboard = () => {
    boxes.forEach((box, index) => {

        box.addEventListener('click',boxClicked);

    });

}

const boxClicked = (e) =>{
   // console.log('box is clicked');

    const id=e.target.id;

    // console.log(id);

    if(!space[id]){
        space[id]=currentPlayer;
        e.target.innerText=currentPlayer;

        if(playerWon()){
            //playerText.innerText=`${currentPlayer} has won !`;
            restart();
            return;
        }

        currentPlayer=currentPlayer==player1?player2:player1;
    }
};

const playerWon=()=>{
    //if(currentPlayer==0){
    if(space[0]==0 ){ 
        if(space[1]==0 && space[2]==0 || space[3]==0 && space[6]==0 || space[4]==0 && space[8]==0)
        {
        alert(`Congratulations! player2 wins`);
        return true;
         }
                
    }
    else  if(space[8]==0)
    { 
        if(space[2]==0 && space[5]==0 || space[7]==0 && space[6]==0 )
       {
        alert(`Congratulations! player2 wins`);
        return true;       }
         
     }
     else  if(space[4]==0)
     { 
         if(space[2]==0 && space[6]==0 || space[3]==0 && space[5]==0 || space[1]==0 && space[7]==0)
        {
            alert(`Congratulations! player2 wins`);
            return true;
        }
                       
   // }
}
   // if(currentPlayer==x){
    if(space[0]==x ){ 
        if(space[1]==x && space[2]==x || space[3]==x && space[6]==x || space[4]==x && space[8]==x)
        {
        alert(`Congratulations! player1 wins`);
        return true;
         }
                
    }
    else  if(space[8]==x)
    { 
        if(space[2]==x && space[5]==x || space[7]==x && space[6]==x )
       {
        alert(`Congratulations! player1 wins`);
        return true;       }
         
     }
     else  if(space[4]==x)
     { 
         if(space[2]==x && space[6]==x || space[3]==x && space[5]==x || space[1]==x && space[7]==x)
        {
            alert(`Congratulations! player1 wins`);
            return true;
        }
                       
   // }
}
    
};


const restart = () =>{
    space.forEach((x, index) =>{
        space[index] = null;
    });

    boxes.forEach(box =>{
        box.innerText='';
    });
    playerText.innerText=`let's Play`;
    currentPlayer=player1;

};
restartbtn.addEventListener('click',restart);
restart();
drawboard();

