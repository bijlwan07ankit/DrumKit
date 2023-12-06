let n=document.querySelectorAll(".drum").length;
for(let i=0;i<n;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
//    changing color to white 
// this means  current button
    this.style.color="white";
    });
   

}

// var audio=new Audio("Sounds/tom-1.mp3");
// audio.play();

