

let slidebtns = document.querySelector("body > section > div.doctors-card > div > div.card-hospital > div.click-area");

slidebtns.addEventListener('click',(x)=>{
    if(x.target.classList=='others'){
        let item = x.target;
        let items = item.parentElement.children;

        for(let i = 0 ; i < items.length;i++){
            items[i].className = "others";
        }
        item.className = "active";
    }
})


