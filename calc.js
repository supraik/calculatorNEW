let display="=";
let inp=document.querySelector("input");
let equal=0;

function pause(){
    return new Promise(resolve=>{
        setTimeout(resolve,200);
    })
}

function back(){
    console.log(display);

    if(!(display.length==1))
    display =display.slice(0,display.length-1);
    inp.value=display;
}
function additiveInverse(){
  display=display+"*(-1)";
  display=display.slice(1);
  console.log(`display is ${display}`);
  let x=math.evaluate(display);
  console.log(`type of x is ${typeof(x)}`);
  inp.value="="+x;
  display="="+x;
  
}
function appendNumber(e)
{
    if(equal==1)
    {
        if(e=="/" || e=="*" || e=="-" || e=="+")
            {
                display="="+display + e;
            }
            else{
                display="="+e;
            }
            equal=0;
    }
    else{
        display=display+e;
    }
    inp.value=display;
}


function clearDisplay()
{
    display="=";
    inp.value=display;
}


let a=document.querySelectorAll("button");
Array.from(a).forEach(el=>{
el.addEventListener("mouseover",function(){
el.style.backgroundColor= "rgb(173, 221, 221)";
});
el.addEventListener("mouseleave",function(){
    el.style.backgroundColor="rgb(114, 118, 118)";
})
el.addEventListener("click",async function(){
     el.style.backgroundColor="#a9a9a9";
     await pause();
     el.style.backgroundColor="rgb(114, 118, 118)";
});

el.addEventListener("keydown",async function(){
    el.style.backgroundColor="#a9a9a9";
    await pause();
    el.style.backgroundColor="rgb(114, 118, 118)";
});


});

function calculate(){
    console.log(display);
    equal=1;
    try{
        display=display.slice(1);
        console.log(`display is ${display}`);
        let x=math.evaluate(display);
        console.log(`type of x is ${typeof(x)}`);
        inp.value="="+x;
        display=x;
    }
    catch(e)
    {
        console.log("error is",e);
        inp.value="syntax error";
    }
   
}
document.addEventListener("keydown",function(event)
{
    console.log("keyCode is",event.key);
    if(event.key=="1")
    {
       
      document.getElementById("1").click();
    }else if(event.key=="2")
    {
          document.getElementById("2").click();
    }
    else if(event.key=="3")
    {   
    document.getElementById("3").click();
    }
    else if(event.key=="4")
    {   
    document.getElementById("4").click();
    }
    else if(event.key=="5")
    {   
    document.getElementById("5").click();
    }
    else if(event.key=="6")
    {   
    document.getElementById("6").click();
    }
    else if(event.key=="7")
    {   
        document.getElementById("7").click();
    }
    else if(event.key=="8")
    {   
        document.getElementById("8").click();
    }
    else if(event.key=="9")
    {   
        document.getElementById("9").click();
    }
    else if(event.key=="0")
    {   
        document.getElementById("0").click();
    }
    else if(event.key=="Backspace")
    {   
        document.getElementById("backk").click();
    }
    else if(event.key=="(")
    {   
        document.getElementById("openB").click();
    }
    else if(event.key==")")
    {   
        document.getElementById("closeB").click();
    }
    else if(event.key=="F9")
    {   
        document.getElementById("+-").click();
    }
    else if(event.key=="+")
    {   
        document.getElementById("+").click();
    }
    else if(event.key=="-")
    {   
        document.getElementById("-").click();
    }
    else if(event.key=="*")
    {   
        document.getElementById("*").click();
    }
    else if(event.key=="/")
    {   
        document.getElementById("/").click();
    }
    else if(event.key=="Enter")
    {   
        document.getElementById("=").click();
    }
});