let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let msgcontainer=document.querySelector(".msgconatiner");
let winner=document.querySelector(".winner");
let newgame=document.querySelector(".newgame");
let btn=document.querySelector(".btn");
let turn=true;
const winpatterns=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetgame=()=>{
  turn=true;
  enablebox();
  winner.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
      if(turn){
        box.innerText="x";
        turn=false;
      }
      else{
        box.innerText="y";
        turn=true;
      }
      box.disabled=true;
      checkwinner();
    })
})


const disablebox=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const enablebox=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const showwinner=(pos1)=>{
  winner.innerText=`winner is ${pos1}`;
  winner.classList.remove("hide");
  }
const checkwinner=()=>{
    for(let pattern of winpatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;
       if(pos1===pos2 && pos2===pos3 && pos1!="" && pos2!="" && pos3!=""){
          console.log("winner",pos1);
          disablebox();
          showwinner(pos1);
       }
    }
}
newgame.addEventListener("click",resetgame);
btn.addEventListener("click",resetgame);