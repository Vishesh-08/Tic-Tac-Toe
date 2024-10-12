let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector(".reset-btn");
let msg=document.querySelector("#msg")
let msg_container=document.querySelector(".msg-container");
let newgame_btn=document.querySelector(".newgame-btn");
let turn0=true;

const win_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const resetgame=()=>{
    turn0=true;
    msg_container.classList.add('hide');
    enableboxes();
}
var count=0;

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.style.color="green";
            box.innerText="X";
            turn0=false;
        }
        else{
            box.style.color="red";
            box.innerText="O";
            turn0=true;
        }
        box.disabled=true;
        count++;
        draw(count);
        checkWinner();
    })
})

function checkWinner(){
    for(pattern of win_pattern){
        let box_val0=boxes[pattern[0]].innerText;
        let box_val1=boxes[pattern[1]].innerText;
        let box_val2=boxes[pattern[2]].innerText;
        if(box_val0!="" && box_val1!="" && box_val2!=""){
            if(box_val0==box_val1 && box_val1==box_val2){
                console.log("Winner", box_val0);
                winner(box_val0);
                count=0;
            }
        }
    }
}

function winner(win){
    msg.innerText=`${win} is the winner`;
    msg_container.classList.remove("hide");
    disableboxes();
}

const draw=(coun)=>{
    if(coun>=9){
        count=0;
        msg.innerText='DRAW';
        msg_container.classList.remove("hide");
        disableboxes();
    } 
    
}

reset_btn.addEventListener("click",resetgame);
newgame_btn.addEventListener("click",resetgame);


