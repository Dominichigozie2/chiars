const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () => {
        item.classList.toggle("open");
        let description = item.querySelector("#description");
        console.log(description);
        
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight }px`;
            item.querySelector("i").classList.replace("fa-angle-right", "fa-angle-up");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-angle-up", "fa-angle-right");
        }
        removeOpen(index);
    });
});


function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");
            let des = item2.querySelector("description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-angle-up", "fa-angle-right");
        }
    });
}





const btn = document.querySelector("#setting");
const set = document.querySelector(".aside-bar");

btn.addEventListener('click', () =>{
    set.classList.toggle("show");
    console.log(set);
});


const accord = document.querySelector(".acord");
accord.addEventListener('click', () =>{
    const men = document.querySelector(".menuu");
    men.classList.toggle("ope");
    console.log(men);
    if(men.classList.contains("ope")){
        men.style.height = `${men.scrollHeight }px`;
    }else{
        men.style.height = "0px";
    }
});

const bar = document.querySelector(".bar");
bar.addEventListener('click', () =>{
    const top = document.querySelector(".top-menu");
    top.classList.toggle("open");
    console.log(top);
    if(top.classList.contains("open")){
        top.style.height = `${top.scrollHeight }px`;
    }else{
        top.style.height = "0px";
    }
});