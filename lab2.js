var x, y;
var method;


//What type of equation are we doing?
method = window.prompt("What kind of equation are we doing today?");

x = window.prompt("What is the first number?");
y= window.prompt("What is the second number?");

equationType(method, x, y);

//add the numbers
function add(x, y){
    var z = x+y;
    return z;
}

//subtract the numbers
function subtract(x, y){
    var z = x-y;
    return z;
}

//multiply the numbers
function multiply(x, y){
    var z = x*y;
    return z;
}

//divide the numbers
function divide(x, y){
    
    if(y!==0){
        
        var z = x/y;
        return z;
        
    }
    else {
        window.alert("I can't let you do that, Dave.");
    }
}

function equationType(method, x, y){

    
    if(method.toUpperCase === "ADD"){
        add(x, y);
        window.alert(x+" + "+y+" = "+z);
    }
    else if(method.toUpperCase === "SUBTRACT"){
        subtract(x, y);
        window.alert(x+" - "+y+" = "+z);
    }
    else if(method.toUpperCase === "MULTIPLY"){
        multiply(x, y);
        window.alert(x+" * "+y+" = "+z);
    }
    else if(method.toUpperCase === "DIVIDE"){
        divide(x, y);
        window.alert(x+" / "+y+" = "+z);
    }
    else{
        window.alert("That is not a valid option.");
    }
}