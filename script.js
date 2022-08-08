var id;

function selector(a){
    document.getElementById('v1').style.borderWidth = "0px";
    document.getElementById('v2').style.borderWidth = "0px";

    id = a;
    console.log(id);
    document.getElementById(a).style.borderWidth = '5px';

}

function clean(){
    a = document.getElementById("v1").value;
    b = document.getElementById("v2").value;
    if(a == '' && b=='')
    {
        document.getElementById("res").value = '';
        document.getElementById(id).style.borderWidth = "0px";
        id = '';
    }
    document.getElementById("v1").value = '';
    document.getElementById("v2").value = '';
    document.getElementById("opr").value='';
    
    document.getElementById('history').value = '';


    console.log('work');
}

function number(a) {
    console.log(id);
    document.getElementById(id).value = document.getElementById(id).value + a;
    
  } 

function operator(a)
{
 document.getElementById('opr').value= a;
}

function result(){
    a = parseFloat(document.getElementById('v1').value);
    b = parseFloat(document.getElementById('v2').value);
    c= parseFloat(document.getElementById('res').value);
    x = document.getElementById('v1').value;
    y = document.getElementById('v2').value;
    z = document.getElementById('res').value;

    if(x!=''&& y!='' && z!='')
    {
        h = document.getElementById('history').value;
        document.getElementById('v1').value=c;
        document.getElementById('v2').value='';
        document.getElementById('res').value='';
        if(h==''){
        h = h + x + document.getElementById('opr').value + y;}
        else
        {
        h = h + document.getElementById('opr').value + y;
        }
        document.getElementById('history').value = h;
        console.log('yo');
        return;
    }
  

    if(document.getElementById('opr').value == '+'){
        document.getElementById('res').value = a+b;}

    if(document.getElementById('opr').value == '-'){
        document.getElementById('res').value = a-b;}

    if(document.getElementById('opr').value == 'X'){
        document.getElementById('res').value = a*b;}

    if(document.getElementById('opr').value == '/'){
        document.getElementById('res').value = a/b;}

    
}