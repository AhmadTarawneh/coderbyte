function move() {
    var elem1 = document.getElementById("myBar1");   
    var elem2 = document.getElementById("myBar2");   
    var elem3 = document.getElementById("myBar3");   
    var elem4 = document.getElementById("myBar4");   
    var elem5 = document.getElementById("myBar5");   
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem1.style.width = width + '%'; 
        elem1.innerHTML = width * 1  + '%';
        elem2.style.width = width + '%'; 
        elem2.innerHTML = width * 1  + '%';
        elem3.style.width = width + '%'; 
        elem3.innerHTML = width * 1  + '%';
        elem4.style.width = width + '%'; 
        elem4.innerHTML = width * 1  + '%';
        elem5.style.width = width + '%'; 
        elem5.innerHTML = width * 1  + '%';
      }
    }
    document.getElementById("finish").classList.add("disable");
  }