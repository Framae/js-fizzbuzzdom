const containerElement = document.getElementById("container")

for (let i=1; i<=100; i++) {
    
    if (i%5==0 && i%3==0) {
        containerElement.innerHTML += "<div class='box-yellow'>FizzBuzz</div>"
        
    }

    else if (i%3==0){
        containerElement.innerHTML += "<div class='box-red'>Fizz</div>"
        
    }

    else if (i%5==0) {
         containerElement.innerHTML += "<div class='box-green'>Buzz</div>"
    }
    else {
        containerElement.innerHTML += "<div class='box'>" + i + "</div>"
    }
    
}

//multipli di 3: colore rosso

//multipli di 5: colore verde

//multipli di 3 e 5: colore giallo