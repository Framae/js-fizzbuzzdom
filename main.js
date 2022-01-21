const containerElement = document.getElementById("container")

for (let i=1; i<=100; i++) {
    
    console.log(`ciclo: ${i}`);

    containerElement.innerHTML += "<div class='box'>" + i + "</div>"

    if (i%3==0) {
          console.log(i+" è multiplo di 3")
    }
}

//multipli di 3: colore rosso

//multipli di 5: colore verde

//multipli di 3 e 5: colore giallo