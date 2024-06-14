let add = document.querySelector("button");
let searchBar= document.querySelector("#searchBar");
let mainBox =document.querySelector("#mainBox");
let card= document.querySelector("#card");
currentHeight =10;
add.addEventListener("click",()=>{
    if(searchBar.value=="") alert("Enter Your Task");
    else{
       
    let list1= document.createElement("div");
    list1.setAttribute("id","list1");
    list1.setAttribute("class","list");
    let img= document.createElement("img");
    img.src ="images/unchecked.png";
    let p =document.createElement("div");
    
    
    list1.prepend(img);
   
    p.innerText= searchBar.value;
    list1.append(p);
    mainBox.after(list1);
    currentHeight++;
    card.style.height = `${currentHeight }rem`;
    currentHeight+=1;
    let icon = document.createElement("i");
    icon.classList.add("fa-regular", "fa-circle-xmark");
    searchBar.value= "";

    img.addEventListener("click", () => {
        if (img.src.includes("unchecked.png")) {
            img.src = "images/checked.png";
            p.style.textDecoration = "line-through";
           list1.append(icon);
           icon.style.marginLeft= "20rem";
           icon.style.position ="fixed";

        } else {
            img.src = "images/unchecked.png";
            p.style.textDecoration = "none";
        }
    });
    icon.addEventListener("click",()=>{
        list1.remove();
        currentHeight-=2;
        card.style.height = `${currentHeight }rem`;


    })
}

})
