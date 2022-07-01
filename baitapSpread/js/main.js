

const heading=document.querySelector(".heading");

let jumpText = (str=>{
    let text =[...str];
    return text.map(t=>`<span>${t}</span>`).join("");
})

heading.innerHTML=jumpText(heading.innerText);

