for(let idx of document.querySelectorAll("img")){
    idx.addEventListener("click",()=>{
        window.open(idx.src,"_blank")
    })
}
