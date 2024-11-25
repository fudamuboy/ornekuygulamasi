
let nom=document.getElementById("name");
console.log(nom.value);

let conditions=document.getElementById("conditions");
console.log(conditions.checked);


let listeBtnRadio=document.querySelectorAll("input[type=radio]");

for(let i=0;i<listeBtnRadio.length;i++)
{
    if(listeBtnRadio[i].checked){
        console.log(listeBtnRadio[i].value)
    }
}

nom.addEventListener("change",()=>{
    console.log(nom.value)
})


