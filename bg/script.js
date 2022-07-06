const x = document.getElementById("coloured");
const k = document.getElementById("coloure")
k.addEventListener("click",()=>{
    var y = ["white","black","yellow","red","blue","green"]
     const z =   Math.floor(Math.random() * 5) + 1

    document.body.style.backgroundColor =y[z]
})
x.addEventListener("click",()=>{
    document.body.style.backgroundColor = "white"
})