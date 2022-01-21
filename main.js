const containerElement = document.getElementById("container")

for (let i=1; i<=100; i++) {
    
    console.log(`ciclo: ${i}`);

    containerElement.innerHTML += "<div class='box'>" + i + "</div>"

}