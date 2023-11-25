
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


setInterval(() => {
          let currenttime = new Date();
          // hrs.innerHTML = currenttime.getHours();
          // min.innerHTML = currenttime.getMinutes();
          // sec.innerHTML = currenttime.getSeconds();
          if(hrs.innerHTML = currenttime.getHours()<10){
                    hrs.innerHTML = 0+''+ currenttime.getHours();
          }else{
                    hrs.innerHTML = currenttime.getHours();
          }


          if(min.innerHTML = currenttime.getMinutes()<10){
                    min.innerHTML = 0+''+ currenttime.getMinutes();
          }else{
                    min.innerHTML = currenttime.getMinutes();
          }


          if(sec.innerHTML = currenttime.getSeconds()<10){
                    sec.innerHTML = 0+''+ currenttime.getSeconds();
          }else{
                    sec.innerHTML = currenttime.getSeconds();
          }
}, 1000);

