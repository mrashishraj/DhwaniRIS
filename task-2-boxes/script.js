

function changeIndex(id){
    var box = document.getElementById(id.id)
    if(box.style.zIndex==1){
        box.style.zIndex=0
    }
    else{        
        box.style.zIndex=1       
    } 
    
}
