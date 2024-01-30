function colors() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColors = `rgb(${r},${g},${b})`
    console.log(randomColors);
    return randomColors 
}
let inter;
let btn1 = document.querySelector(".one")
btn1.addEventListener("click",()=>{
 inter = setInterval(function() {
    document.body.style.backgroundColor = colors()
    
},1000)

})

document.querySelector(".tow").addEventListener("click",()=>{
clearInterval(inter)
})












