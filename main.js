function getColor()  {
    var colorcode= document.getElementById("colorcode").value;
    var view =document.getElementById("color_view");
    if(colorcode==""){
            view.style.backgroundColor="#fff";
    }
    else{
            view.style.backgroundColor=colorcode;
    }
}
