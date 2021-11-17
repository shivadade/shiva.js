console.log("New JS file")

var countDownElement=document.getElementById("countDown")
var initialCountDown=countDownElement.innerHTML
setInterval (function(){ 
             initialCountDown = initialCountDown  > 0 ? initialCountDown - 1 : 0
             countDownElement.innerHTML=initialCountDown
             var bgcolor = initialCountDown % 2 === 0 ? 'red' : 'purple'
             //Code.body.style.backgroundcolor = bgcolor
            countDownElement.style.color=bgcolor
},1000)