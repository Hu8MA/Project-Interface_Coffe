
 let time = new Date();

  let second1 = time.getSeconds();
  let hour=time.getHours();
  let min=time.getMinutes();

   let p = document.getElementById("time");
 


    p.textContent=`the time booked${" "+hour} ${" : " + " "} ${min} ${" : "+" "} ${second1}`;

