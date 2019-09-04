function ButtonClick(){
    // source https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick click button
    //document.getElementById("Show").innerHTML="Hello World !";
   // document.getElementById("Show").style.backgroundcolor="white";
    document.getElementById("show").style.display="block";

    //sourse https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp change color id
   // document.getElementById("Show").style.backgroundColor="white";

    document.getElementById("hidden").style.display="block";
}

function Remove(){
    document.getElementById("hidden").style.display="none";
    document.getElementById("show").style.display="none";   
}


