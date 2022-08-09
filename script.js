


function clean(){
    document.getElementById("main").value='';
}

function number(a) {
    document.getElementById('main').value = document.getElementById('main').value + a;
    
  } 


function operator(a)
{
    string = document.getElementById('main').value;
    lastc = string.slice(string.length - 1);
    console.log(lastc);

    if(a=='-'){
        if(lastc == 'x'||lastc == '/'){
            document.getElementById('main').value = document.getElementById('main').value + a;
            return;
        }
    }

    if( lastc != '+' && lastc != '-'&& lastc != '/' && lastc != 'x' ){
    document.getElementById('main').value = document.getElementById('main').value + a;}
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function errormessage(){

    a = document.getElementById("main").value;
    b = document.getElementById("main").style.fontSize;

    document.getElementById("main").value='Error: Enter a valid input';
    document.getElementById("main").style.fontSize='7vw';

    console.log(a);
    await delay(2000);
    console.log(a);
    
    document.getElementById("main").style.fontSize=b;
    document.getElementById("main").value = a;
    
    
}

function result(){
    
    try{
        a = document.getElementById('main').value;
        a= a.replaceAll("x", "*");
        b = Function("return " + a)();
        document.getElementById('main').value = '';
        b = Math.round((b + Number.EPSILON) * 100000) / 100000;
        
        document.getElementById('main').value = b;
    }
    catch{
        errormessage();
    }
}

function backspace(){
    
    document.getElementById("main").value = document.getElementById("main").value.slice(0, -1);
}

