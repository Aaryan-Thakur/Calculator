
for(let i=0; i < 13; i++)
document.getElementsByClassName('number')[i].addEventListener('click',()=>{
    a = document.getElementsByClassName('number')[i].innerHTML;
    number(a);

})

document.getElementById('clean').addEventListener('click',()=>{
    clean();
})

for(let i=0; i < 4; i++)
document.getElementsByClassName('operator')[i].addEventListener('click',()=>{
    a= document.getElementsByClassName('operator')[i].innerHTML;
    operator(a);
})



function clean(){
    document.getElementById("main").value='';
    document.getElementById("history").value='';     
}

function number(a) {
    document.getElementById('main').value = document.getElementById('main').value + a;
    
}

function operator(a)
{
    string = document.getElementById('main').value;
    lastc = string.slice(string.length - 1);

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

    document.getElementById("main").value='Error: Enter a valid input';

    await delay(2000);
    
    document.getElementById("main").value = a;
    
    
}

function result(){
    
    try{
        a = document.getElementById('main').value;
        c = a;
        a= a.replaceAll("x", "*");
        b = Function("return " + a)();
        document.getElementById('history').value = c;
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

