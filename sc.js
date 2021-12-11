let tick = true;
let t;
function ticker(){
  if (tick==true){
    document.write("Tik");
    tick = false;
  }
  else {
    document.write("Tak");
    tick = true;
  }


}
t = setInterval(ticker, 1000);
setTimeout(() => {
clearInterval(t);
alert("stop");
}, prompt("введите время таймера(секунды)")*1000)