/**
 * B1: hiển thị danh sách bảng màu
 * B2: Tạo chức năng đổi màu khi click
 */


const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];


// met: first = (second) => {third}
let loadButton = () => {
    // colorList.map(function(color,index){})
    // anfn: (first) => { second }
    let buttonList ="";
    colorList.map((color,index) => { 
        if(index == 0){
            buttonList += `
            <button class="color-button ${color} active" 
            onclick="changeColor('${color}')"></button>
        `
        }else{
            buttonList += `
                <button class="color-button ${color}" 
                onclick="changeColor('${color}')"></button>
            `
        }
     });
     document.querySelector("#colorContainer").innerHTML = buttonList;
}

loadButton();


let changeColor = (color) => {
    document.querySelector("#house").className = `house ${color}`;
}



let colorPicker=document.getElementsByClassName("color-button");

for(let i=0;i<colorPicker.length;i++)colorPicker[i].addEventListener("click",function(){changeColor(colorList[i],i)});

changeColor=(i,e)=>{
    for(let i=0;i<colorPicker.length;i++)
        colorPicker[i].classList.remove("active");
        colorPicker[e].classList.add("active");
        document.querySelector("#house").className = `house ${i}`};
