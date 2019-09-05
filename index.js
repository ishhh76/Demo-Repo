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
    var z= document.getElementById("col1");
    var x= document.getElementById("detail1");
    var y= document.getElementById("price1");
    if(x.style.display==="block"){
        x.style.display="none";
        if (y.style.display==="block"){
            z.style.height="470px";
        }else{
            z.style.height="570px";
        }
}
    else{
        x.style.display="block"
        if (y.style.display==="block"){
            z.style.height="570px";
        }else{
            z.style.height="370px";
        }
    }

}
function ButtonC2(){
    var z= document.getElementById("col2");
    var x= document.getElementById("detail2");
    var y= document.getElementById("price2");
    if(x.style.display==="block"){
        x.style.display="none";
        if (y.style.display==="block"){
            z.style.height="370px";
        }else{
            z.style.height="300px";
        }
}
    else{
        x.style.display="block"
        if (y.style.display==="block"){
            z.style.height="470px";
        }else{
            z.style.height="370px";
        }
    }
}
function priceBtn1(){
  //  var z= document.getElementById("col1")
    var x= document.getElementById("price1");
    x.style.display="block";
    document.getElementById("Rem1").style.display="block";
  /*  if(x.style.display==="block"){
        x.style.display="none";
        if (y.style.display==="block"){
            z.style.height="370px";
        }else{
            z.style.height="300px";
        }
}
    else{
        x.style.display="block"
        if (y.style.display==="block"){
            z.style.height="470px";
        }else{
            z.style.height="370px";
        }
    }
    */
}
function priceBtn2(){
    //  var z= document.getElementById("col1")
        document.getElementById("price2").style.display="block";
        document.getElementById("Rem2").style.display="block";
}

function priceBtn3(){
    //  var z= document.getElementById("col1")
        document.getElementById("price3").style.display="block";
        document.getElementById("Rem3").style.display="block";
}
function priceBtn4(){
    //  var z= document.getElementById("col1")
        document.getElementById("price4").style.display="block";
        document.getElementById("Rem4").style.display="block";
}
function priceBtn1R(){
    document.getElementById("price1").style.display="none"
    document.getElementById("Rem1").style.display="none";

}
function priceBtn2R(){
    document.getElementById("price2").style.display="none"
    document.getElementById("Rem2").style.display="none";

}
function priceBtn3R(){
    document.getElementById("price3").style.display="none"
    document.getElementById("Rem3").style.display="none";

}
function priceBtn4R(){
    document.getElementById("price4").style.display="none"
    document.getElementById("Rem4").style.display="none";

}
/*
function priceBtn2(){
    var z= document.getElementById("col2")
    var y= document.getElementById("detail2");
    var x= document.getElementById("price2");
    if(x.style.display==="block"){
        x.style.display="none";
        if (y.style.display==="block"){
            z.style.height="370px";
        }else{
            z.style.height="300px";
        }
}
    else{
        x.style.display="block"
        if (y.style.display==="block"){
            z.style.height="470px";
        }else{
            z.style.height="370px";
        }
    }
}
*/
function ButtonC3(){
    var z= document.getElementById("col3");
    var x= document.getElementById("detail3");
    var y= document.getElementById("price3");
    if(x.style.display==="block"){
        x.style.display="none";
        if (y.style.display==="block"){
            z.style.height="370px";
        }else{
            z.style.height="300px";
        }
}
    else{
        x.style.display="block"
        if (y.style.display==="block"){
            z.style.height="470px";
        }else{
            z.style.height="370px";
        }
    }
}
/*
function priceBtn3(){
    var z= document.getElementById("col3")
    var y= document.getElementById("detail3");
    var x= document.getElementById("price3");
    if(x.style.display==="block"){
        x.style.display="none";
        if (y.style.display==="block"){
            z.style.height="370px";
        }else{
            z.style.height="300px";
        }
}
    else{
        x.style.display="block"
        if (y.style.display==="block"){
            z.style.height="470px";
        }else{
            z.style.height="370px";
        }
    }
}
*/
function ButtonC4(){
    var z= document.getElementById("col4");
    var x= document.getElementById("detail4");
    var y= document.getElementById("price4");
    if(x.style.display==="block"){
        x.style.display="none";
        if (y.style.display==="block"){
            z.style.height="370px";
        }else{
            z.style.height="300px";
        }
}
    else{
        x.style.display="block"
        if (y.style.display==="block"){
            z.style.height="470px";
        }else{
            z.style.height="370px";
        }
    }
}
/*
function priceBtn4(){
    var z= document.getElementById("col4")
    var y= document.getElementById("detail4");
    var x= document.getElementById("price4");
    if(x.style.display==="block"){
        x.style.display="none";
        if (y.style.display==="block"){
            z.style.height="370px";
        }else{
            z.style.height="300px";
        }
}
    else{
        x.style.display="block"
        if (y.style.display==="block"){
            z.style.height="470px";
        }else{
            z.style.height="370px";
        }
    }
}
*/
