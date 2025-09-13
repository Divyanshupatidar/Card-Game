  
  
  



let loading = document.getElementById("loading-bar");
let Bar = 0;

function updateloading(){
    Bar += 1;
    loading.style.width = Bar + '%';

    if (Bar >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          window.location.href = '../Bid/Bid.html'; 
        }, 1000);
    }
}

let interval = setInterval(updateloading, 100);