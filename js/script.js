
/* 
<div class="col">
    <div class="inffo">
        <img src="images/edit.png">
        <img src="images/trash.png">
    </div>
    <textarea class="form-control" rows="6"></textarea>
</div>*/




var button=document.getElementById("all-btn");
var myrow=document.querySelector("div.row");



button.addEventListener("click",function(){

    var mycol=document.createElement("div");
    mycol.style="margin-bottom: 24px;";
    mycol.setAttribute("class","col");

    var inffo=document.createElement("div");
    inffo.style="display: flex;background-color: #22c2bf;display: flex;justify-content: flex-end;padding-top: 2px;padding-bottom: 2px;";
    mycol.appendChild(inffo);

    var firstimg=document.createElement("img");
    firstimg.setAttribute("src","images/edit.png");
    firstimg.style="width: 21px;margin-right: 6px;height: 21px;cursor: pointer;";
    inffo.appendChild(firstimg);
    
    var secondtimg=document.createElement("img");
    secondtimg.setAttribute("src","images/trash.png");
    secondtimg.style="width: 21px;margin-right: 6px;height: 21px;cursor: pointer;";
    inffo.appendChild(secondtimg);

    var texta=document.createElement("textarea");
    texta.classList.add("control");
    texta.style="-webkit-writing-mode: horizontal-tb !important;text-rendering: auto;letter-spacing: normal;word-spacing: normal;text-transform: none;text-indent: 0px;text-shadow: none;text-align: start;appearance: textarea;-webkit-rtl-ordering: logical;flex-direction: column;cursor: text;white-space: pre-wrap;overflow-wrap: break-word;font: 400 13.3333px Arial;overflow: auto;resize: vertical;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;"
    //texta.setAttribute("class","form-control");
    //texta.style="border-radius: 0!important;border: 0!important;outline: none!important;height: auto!important;"
    texta.setAttribute("rows","8");
    mycol.appendChild(texta);

    myrow.appendChild(mycol);

    

    secondtimg.addEventListener("click",function(){
        mycol.remove();
        //mycol.style.display="none";
    })



    firstimg.addEventListener("click",function(){
        texta.setAttribute("disabled","")
        texta.classList.toggle("disabl");
    })


    

});



/*

var button=document.getElementById("all-btn");
var myrow=document.querySelector("div.row");



button.addEventListener("click",function(){

    var mycol=document.createElement("div");
    mycol.style="margin-bottom: 24px;";
    mycol.setAttribute("class","col");

    var inffo=document.createElement("div");
    inffo.style="display: flex;background-color: #22c2bf;padding-left: 304px;padding-top: 2px;padding-bottom: 2px;";
    mycol.appendChild(inffo);

    var firstimg=document.createElement("img");
    firstimg.setAttribute("src","images/edit.png");
    firstimg.style="width: 21px;margin-right: 6px;height: 21px;cursor: pointer;";
    inffo.appendChild(firstimg);
    
    var secondtimg=document.createElement("img");
    secondtimg.setAttribute("src","images/trash.png");
    secondtimg.style="width: 21px;margin-right: 6px;height: 21px;cursor: pointer;";
    inffo.appendChild(secondtimg);

    var texta=document.createElement("textarea");
    texta.classList.add("control");
    texta.style="-webkit-writing-mode: horizontal-tb !important;text-rendering: auto;letter-spacing: normal;word-spacing: normal;text-transform: none;text-indent: 0px;text-shadow: none;text-align: start;appearance: textarea;-webkit-rtl-ordering: logical;flex-direction: column;cursor: text;white-space: pre-wrap;overflow-wrap: break-word;font: 400 13.3333px Arial;overflow: auto;resize: vertical;margin: 0;font-family: inherit;font-size: inherit;line-height: inherit;"
    //texta.setAttribute("class","form-control");
    //texta.style="border-radius: 0!important;border: 0!important;outline: none!important;height: auto!important;"
    texta.setAttribute("rows","8");
    mycol.appendChild(texta);

    myrow.appendChild(mycol);

    

    secondtimg.addEventListener("click",function(){
        mycol.remove();
        //mycol.style.display="none";
    })



    firstimg.addEventListener("click",function(){
        texta.setAttribute("disabled","")
        texta.classList.toggle("disabl");
    })


    

});



*/