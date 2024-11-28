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

// textArea.addEventListener("keydown",(e)=>{
//     let count = parseInt(countBtn.textContent);
//     if(e.key==" ")
//     {
//         countBtn.textContent= count+1;
//     }
// })


//Backspace counter
textArea.addEventListener("keydown",(e)=>{
    
    let countBack = parseInt(BackspaceCounter.textContent);
    
    if(e.key=="Backspace")
        {
            if(textArea.value!="")
        countBack++;
            if(countBack<0) countBack=0;
            
            BackspaceCounter.textContent=countBack;
    }
})




// timer
var timer = document.querySelector("#timer");
var startTime = 0;
timer.addEventListener("click",()=>{
    countBtn.textContent=0;
        charCounts.textContent=0;
        textArea.value="";
    startTime=1;
    let sec= document.querySelector("#sec");
    let secCnt =parseInt(sec.textContent);
    let min=document.querySelector("#min")
    let minCnt =parseInt(min.textContent);
    setInterval(()=>{
        secCnt+=1;
        if(secCnt==60)
            {
                secCnt=0;
                minCnt+=1;
            }
            sec.textContent=secCnt;
            min.textContent= minCnt;
    },1000)
})



//word and char counter
setInterval(()=>{
    let para = textArea.value;
    let wordCnt = 0;
    for(let i=0;i<para.length;i++)
    {
        if(para[i]==" ") wordCnt++;
    }
    if(para=="")
    {
        countBtn.textContent=0;
        charCounts.textContent=0;
    }
    else 
    {
        charCounts.textContent = para.length;
        countBtn.textContent = wordCnt+1;
    }
},1)
