
let CurrentBid = document.getElementById("CurrentBid");
let bidvalue=150
 document.getElementById("incbid").addEventListener("click", function(){
    bidvalue+= 5;
   CurrentBid.textContent=bidvalue;
 });


