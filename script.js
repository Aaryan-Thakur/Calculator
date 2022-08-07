var id;

function selector(a){
    id = a;
    console.log(id);
}

function clean(){
    a = document.getElementById("v1").value;
    b = document.getElementById("v2").value;
    if(a == '' && b=='')
    {
        document.getElementById("res").value = '';
    }
    document.getElementById("v1").value = '';
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
 document.getElementById('opr').value= a;
}

function result(){
    a = parseFloat(document.getElementById('v1').value);
    b = parseFloat(document.getElementById('v2').value);

    

    if(document.getElementById('opr').value == '+'){
        document.getElementById('res').value = a+b;}

    if(document.getElementById('opr').value == '-'){
        document.getElementById('res').value = a-b;}

    if(document.getElementById('opr').value == 'X'){
        document.getElementById('res').value = a*b;}

    if(document.getElementById('opr').value == '/'){
        document.getElementById('res').value = a/b;}


}