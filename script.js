var id;

function selector(a){
    document.getElementById('main').style.borderWidth = "0px";
    document.getElementById('v2').style.borderWidth = "0px";

    id = a;
    console.log(id);
    document.getElementById(a).style.borderWidth = '2px';

}

function clean(){
    a = document.getElementById("main").value;
    b = document.getElementById("v2").value;
    document.getElementById("opr").value='';
    if(a == '' && b=='')
    {
        document.getElementById("res").value = '';
        document.getElementById(id).style.borderWidth = "0px";
        id = '';
        document.getElementById('history').value = '';
    }
    document.getElementById("main").value = '';
    document.getElementById("v2").value = '';
    document.getElementById("opr").value='';
    
   


    console.log('work');
}

function number(a) {
    console.log(id);
    document.getElementById(id).value = document.getElementById(id).value + a;
    
  } 

function operator(a)
{
    x = document.getElementById('main').value;
    y = document.getElementById('v2').value;
    z = document.getElementById('res').value;

    if(z=='')
    document.getElementById('opr').value= a;
}

function result(){
    a = parseFloat(document.getElementById('main').value);
    b = parseFloat(document.getElementById('v2').value);
    c= parseFloat(document.getElementById('res').value);
    x = document.getElementById('main').value;
    y = document.getElementById('v2').value;
    z = document.getElementById('res').value;
    
    o = document.getElementById('opr').value;

    if(x!=''&& y!='' && z!='')
    {
        h = document.getElementById('history').value;
        document.getElementById('main').value=c;
        document.getElementById('v2').value='';
        document.getElementById('res').value='';
        if(h==''){
        h = h + x + o +  y;}
        else
        {
        h = '(' + h + ')' + o  + y ;
        }
        document.getElementById('history').value = h;
        console.log('yo');
        return;
    }
  

    if(document.getElementById('opr').value == '+'){
        document.getElementById('res').value = parseFloat(a+b).toFixed(6);}

    if(document.getElementById('opr').value == '-'){
        document.getElementById('res').value = parseFloat(a-b).toFixed(6)}

    if(document.getElementById('opr').value == 'x'){
        document.getElementById('res').value = parseFloat(a*b).toFixed(6);}

    if(document.getElementById('opr').value == '/'){
        document.getElementById('res').value = parseFloat(a/b).toFixed(6);}

    
}