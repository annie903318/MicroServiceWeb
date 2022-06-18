var listArr=["可以記錄任何待辦的事項","嗨嗨","今天也很努力了哦","辛苦了呢",
"事情會一件一件完成的","完成之後記得點選方框將事件劃線哦",
"也可以按住shift一次劃掉多件事項","Good Luck!"];

function show(){
    var result="";
    listArr.forEach((item,index,array) => {
        result+=`<div class="list">
                        <input type="checkbox" id=${index}/>
                        <p  class="item" id=p${index}>${item}</p>
                    </div>`;
    });
    document.getElementById("inbox").innerHTML=result; 
}

function check(){
    var checkboxes = document.querySelectorAll('.list input[type="checkbox"]');
    let lastchecked;

    function handleCheck(e){
        var index=e.target.id;
        index=index.replace("/","");
        if(document.getElementById(index+"/").checked){
            document.getElementById(`p${index}`).innerHTML=`<s>${listArr[index]}</s>`;
        }else{
            document.getElementById(`p${index}`).innerHTML=`${listArr[index]}`;
        }        
        let inBetween = false;
        if (e.shiftKey && this.checked){
            checkboxes.forEach(checkbox => {
                if( checkbox === this || checkbox === lastchecked ){
                    inBetween  = !inBetween;
                }
                if(inBetween){
                    checkbox.checked = true;
                    var tmp=checkbox.id.replace("/","");
                    document.getElementById(`p${tmp}`).innerHTML=`<s>${listArr[tmp]}</s>`;                
                }
            });
        }
        lastchecked = this;
    }
    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
}
function add(){
    var inp=document.getElementById("insert").value;
    if(inp==""){
        alert("Cannot be empty");
    }else{
        listArr.push(inp);
        document.getElementById("insert").value="";
        show();
        check();
    }
}

show();
check();