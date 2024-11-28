var charCounts = document.querySelector("#Charcounter");
var countBtn = document.querySelector("#counter");
var textArea = document.querySelector("#text");
var BackspaceCounter = document.querySelector("#Backspacecounter");
var eraseBtn = document.querySelector("#eraseAll");

eraseBtn.addEventListener("click",()=>{
    var text = textArea.value;
    textArea.value="";
    let count = parseInt(countBtn.textContent);
    countBtn.textContent=0;
    charCounts.textContent=0;
    BackspaceCounter.textContent=0;
})

textArea.addEventListener("keydown",(e)=>{
    let count = parseInt(countBtn.textContent);
    if(e.key=="Space")
    {
        countBtn.textContent= count+1;
    }
})

textArea.addEventListener("keydown",()=>{
    let count = parseInt(charCounts.textContent);
    count++;
    charCounts.textContent=count;
})






textArea.addEventListener("keydown",(e)=>{
    let count = parseInt(BackspaceCounter.textContent);
    if(e.key=="Backspace")
    {
        count++;
         
        countBtn.textContent= count;
    }
})