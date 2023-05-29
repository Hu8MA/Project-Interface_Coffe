
 function setimage(){
  let t = new Array(15);
  t[0]="pictures-app/Black-coffee.jpg";
  t[1]="pictures-app/turkish-coffee.jpg";
  t[2]="pictures-app/cold-brew-coffee.jpg";
  t[3]="pictures-app/iced_coffee.jpg";
  t[4]="pictures-app/Doppio.jpg";
  t[5]="pictures-app/Americano.jpg";
  t[6]="pictures-app/Lungo.jpg"
  t[7]="pictures-app/Cream Caffe.jpg"
  t[8]="pictures-app/Cafe Cubano.jpg";
  t[9]="pictures-app/Cappuccino.jpg";
  t[10]="pictures-app/Piccolo Latte.jpg";
  t[11]="pictures-app/Macchiato.jpg";
  t[12]="pictures-app/Café Bombon.jpg" ;
  t[13]="pictures-app/Cafe Con Leche.jpg";
  t[14]="pictures-app/Espresso Romano.jpg" ;
  let s=document.getElementsByTagName("img");

  for(i=0 ; i<15;i++){
   s[i].src=t[i];

  }
 }
   
  

  
 function changeid(id){

   document.getElementById(id).id="D";
 }

 function change_backid(id1,id2){

   document.getElementById(id1).id=id2;
 }


 function goto_about_page1(){
  window.open("file:///D:/projectweb/cofeshope/about-page.html", "_self");
 }



 function goto_buy_page1(){
  window.open("file:///D:/projectweb/cofeshope/buy-coffee.html", "_self");

 }


function to_top(){
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}