let boxes = document.querySelectorAll(".box");
let winner = document.querySelector("h1");
let reBtn = document.querySelector(".restart");
let playerO = document.querySelector(".PO");
let playerX = document.querySelector(".PX");
let clearBtn = document.querySelector(".clear")
let numO = 0,numX=0;

let opt = true;

let winPos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(opt){
        box.innerText = "O";
        opt = false;
    }
    else{
        box.innerText = "X";
        opt = true;
    }
    for(let position of winPos){
    let pos1val = boxes[position[0]].innerHTML;
    let pos2val = boxes[position[1]].innerHTML;
    let pos3val = boxes[position[2]].innerHTML;
    

      if(pos1val != "" && pos2val != "" && pos3val != "")
      {
        if(pos1val === pos2val && pos2val===pos3val)
        {
            if(pos1val === "O"){
            playerO.innerHTML =  `Player O :   ${++numO}` ; 
            }
            else if(pos1val === "X"){

                playerX.innerHTML =`Player X :  ${++numX}`; 
                }
            for(let box of boxes){
                box.disabled=true;
            }

            winner.innerText = `Winner is ${pos1val}`
            winner.style.display = "block";
            
        }
      }
    //   box.style.cursor = "no-drop";
    }
    box.disabled=true;
    box.style.cursor = "no-drop";
    box.style.background = "white";
})


})


reBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
            box.innerHTML = "";
            box.disabled = false;
            winner.style.display = "none"; 
            box.style.cursor = "pointer";
            box.style.background = "";

       
    })
    
})


clearBtn.addEventListener("click", () =>{
boxes.forEach((box)=>{
box.innerHTML = "";
box.disabled = false;
winner.style.display = "none";
box.style.cursor = "pointer";
box.style.background = "";
playerO.innerHTML =  `Player O :   ${' '}` ; 
playerX.innerHTML =`Player X :  ${' '}`; 

})
}) 






