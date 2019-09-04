function ButtonClick(){
    // source https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick click button
    //document.getElementById("Show").innerHTML="Hello World !";
   // document.getElementById("Show").style.backgroundcolor="white";
    document.getElementById("show").style.display="block";

    //sourse https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp change color id
   // document.getElementById("Show").style.backgroundColor="white";

    document.getElementById("hidden").style.display="block";
    document.getElementById("detail1").style.display="block";
    document.getElementById("detail2").style.display="block";
}

function Remove(){
    document.getElementById("hidden").style.display="none";
    document.getElementById("show").style.display="none";   

}
function ButtonC1(){
    var x= document.getElementById("detail1")
    if(x.style.display==="block"){
        x.style.display="none";
    }
    else{
        x.style.display="block";
    }
}
function ButtonC2(){
    var x= document.getElementById("detail2")
    if(x.style.display==="block"){
        x.style.display="none";
    }
    else{
        x.style.display="block";
    }
}
function priceBtn1(){
    var x= document.getElementById("price1")
    if(x.style.display==="block"){
        x.style.display="none";
    }
    else{
        x.style.display="block";
    }
}
function priceBtn2(){
    var x= document.getElementById("price2")
    if(x.style.display==="block"){
        x.style.display="none";
    }
    else{
        x.style.display="block";
    }
}
