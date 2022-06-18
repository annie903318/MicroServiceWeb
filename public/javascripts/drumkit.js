var keyArr=["A","S","D","F","G","H","J","K","L"];
var soundArr=["CLAP","HIHAT","KICK","OPENHAT","BOOM","RIDE","SNARE","TOM","TINK"];

function add(){    
    keyArr.forEach((item,index,array)=> {
        var node=document.createElement("div");
        node.setAttribute("class","item");
        node.setAttribute("id",item);
        document.getElementById("drum").appendChild(node);

        var sound=soundArr[keyArr.indexOf(item)];
        document.getElementById(item).innerHTML=`<p class="letters">${item}</p>
        <p class="sound">${sound}</p>`;
    });
}
window.addEventListener("keydown",function(e){
    var key=document.getElementById(e.key.toUpperCase());
    key.setAttribute("style", "border-color:#ffffff");

    var sound=soundArr[keyArr.indexOf(e.key.toUpperCase())].toLowerCase();
    var x=document.getElementById("audio");
    x.src=`./assets/sounds/${sound}.wav`;
    x.load();
    x.play(); 
})
window.addEventListener("keyup",function(e){
    var key=document.getElementById(e.key.toUpperCase());
    key.setAttribute("style", "border-color: #ff7795");
})


add();