window.onload = function () {
    let slide = document.getElementById("range");
    slide.style.background = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb 50%, #eaeefb 50%, #eaeefb 100%)';      

    slide.oninput = function() {
      var value = (this.value-this.min) / (this.max-this.min) * 100;
      this.style.background = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + value + '%, #eaeefb ' + value + '%, #eaeefb 100%)';                
      var style = document.querySelector('[data="changebg"]');
      style.innerHTML = "#range::-webkit-slider-thumb { background-color: #0fc3b1 !important; }";
      setValue(value);
    };  

    slide.onmouseup = function() {        
      var style = document.querySelector('[data="changebg"]');
      style.innerHTML = "#range::-webkit-slider-thumb { background-color: #10d5c2 !important; }";
    };
  };    

  function setValue(value) {
    let descontoCheck = false;
    let valor = 0;
    let desconto = 0.25;
    let pageviews = 0;
    descontoCheck = document.getElementById("discount").checked;           

    if(value == 0 || value == 20) {
      valor = 8;
      pageviews = '10K';
    }
    
    else if(value == 25 || value == 40) {
      valor = 12;
      pageviews = '50K';
    }
    
    else if(value == 50 || value == 60) {
      valor = 16;
      pageviews = '100K';
    }

    else if(value == 75 || value == 80) {
      valor = 24;
      pageviews = '500K';
    }

    else if(value == 100) {
      valor = 36;
      pageviews = '1M';
    }

    if(descontoCheck)
      valor = valor - (valor * desconto); 

    document.getElementById("views-value").innerHTML = pageviews; 
    document.getElementById("price-value").innerHTML = "$" + valor + '.00'; 
  }

  function atualizaDesconto() {
    let slide = document.getElementById("range");      
    setValue(slide.value);
  }