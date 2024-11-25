const form = document.querySelector('form');

// Quand on submit
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();
    //console.log(nom.value)
    console.log(email.value)

    const balisename=document.getElementById("nom")
    const valuename=balisename.value;

    if(valuename=="")
    {
        console.log("le champ is empty")
    }
    else{
        console.log("done")
    }
});