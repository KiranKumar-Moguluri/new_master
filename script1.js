const boxes = Array.from(document.getElementsByClassName("box"));

const playerText=document.getElementById('playerText');
const restartbtn =document.getElementById('restart-btn');

const space=[];
const playerX="X";
const player0="0";

let currentPlayer;


const drawboard = () => {
    boxes.forEach((box, index) => {

        // let styleString = '';
        // if (index < 3) {
        //     styleString += `border-bottom: 3px solid var(--purple);`;
        // }
        // if (index % 3 === 0) {
        //     styleString += `border-right: 3px solid var(--purple);`;
        // }
        // if (index % 3 === 2) {
        //     styleString += `border-left: 3px solid var(--purple);`;
        // }
        // if (index > 5) {
        //     styleString += `border-top: 3px solid var(--purple);`;
        // }

        // box.style = styleString;
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
            playerText.innerText=`${currentPlayer} has won !`;
            restart();
            return;
        }

        currentPlayer=currentPlayer==player0?playerX:player0;
    }
};

const playerWon=()=>{
    if(space[0]===currentPlayer){ 
        if(space[1]===currentPlayer && space[2]==currentPlayer)
        {
        alert(`${currentPlayer} made win with top row matching. `);
        return true;
         }
       if(space[3]===currentPlayer && space[6]==currentPlayer)
        {
        alert(`${currentPlayer} made win with left column matching. `);
        return true;
        }
       if(space[4]===currentPlayer && space[8]==currentPlayer)
       {
        alert(`${currentPlayer} made win with left diagonal matching. `);
        return true;
       }
    }
    else  if(space[8]===currentPlayer){ 
        if(space[2]===currentPlayer && space[5]==currentPlayer)
       {
        alert(`${currentPlayer} made win with right column matching. `);
        return true;
       }
       if(space[7]===currentPlayer && space[6]==currentPlayer)
       {
        alert(`${currentPlayer} made win with bottom row matching. `);
        return true;
       }
      
     }
     else  if(space[4]===currentPlayer){ 
         if(space[2]===currentPlayer && space[6]==currentPlayer)
        {
            alert(`${currentPlayer} made win with right diagonal matching. `);
         return true;
        }
     if(space[3]===currentPlayer && space[5]===currentPlayer)
     {
        alert(`${currentPlayer} made win with middle row matching. `);
         return true;
     }
     if(space[1]===currentPlayer && space[7]===currentPlayer)
     {
         alert(`${currentPlayer} made win with middle column matching. `);
         return true;
     }
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
    currentPlayer=player0;

};
restartbtn.addEventListener('click',restart);
restart();
drawboard();

