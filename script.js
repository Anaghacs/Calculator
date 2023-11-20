function clicking(val){
    document.getElementById("screen").value+=val;
}
function clearScreen(){
    document.getElementById("screen").value="";
}
function equalClick(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result;
}
function oneClearClick(){

    display=document.getElementById("screen").value.slice(0,-1);
    document.getElementById("screen").value=display;
}





