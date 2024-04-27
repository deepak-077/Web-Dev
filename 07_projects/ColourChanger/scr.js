console.log("colour changer");
const buttons=document.querySelectorAll('.but');
const body=document.querySelector('body');
console.log(body);
buttons.forEach(function (button){
    console.log(button);
    button.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==="one"){
            body.style.backgroundColor="#5A9207";
        }
        if(e.target.id==="two"){
            body.style.backgroundColor="black";
        }
        if(e.target.id==="three"){
            body.style.backgroundColor="purple";
        }
        if(e.target.id==="four"){
            body.style.backgroundColor="red";
        }
    })
})