

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

function result(){
    a = document.getElementById('main').value;
    a= a.replaceAll("x", "*");
    b = Function("return " + a)();
    document.getElementById('main').value = '';
    b = Math.round((b + Number.EPSILON) * 100000) / 100000;

    document.getElementById('main').value = b;

    // a = parseFloat(document.getElementById('main').value);
    // b = parseFloat(document.getElementById('v2').value);
    // c= parseFloat(document.getElementById('res').value);
    // x = document.getElementById('main').value;
    // y = document.getElementById('v2').value;
    // z = document.getElementById('res').value;
    
    // o = document.getElementById('opr').value;

    // if(x!=''&& y!='' && z!='')
    // {
    //     h = document.getElementById('history').value;
    //     document.getElementById('main').value=c;
    //     document.getElementById('v2').value='';
    //     document.getElementById('res').value='';
    //     if(h==''){
    //     h = h + x + o +  y;}
    //     else
    //     {
    //     h = '(' + h + ')' + o  + y ;
    //     }
    //     document.getElementById('history').value = h;
    //     console.log('yo');
    //     return;
    // }
  

    // if(document.getElementById('opr').value == '+'){
    //     document.getElementById('res').value = parseFloat(a+b).toFixed(6);}

    // if(document.getElementById('opr').value == '-'){
    //     document.getElementById('res').value = parseFloat(a-b).toFixed(6)}

    // if(document.getElementById('opr').value == 'x'){
    //     document.getElementById('res').value = parseFloat(a*b).toFixed(6);}

    // if(document.getElementById('opr').value == '/'){
    //     document.getElementById('res').value = parseFloat(a/b).toFixed(6);}

    
}