function obtenerColorAleatorio() {
    const colores = [`green`, `blue` , `red`];
    const indice = Math.floor(Math.random()* colores.length);
    return colores[indice];
}

const encabrzados = document.querySelectorAll(`h5`);

encabrzados.forEach(h5 => {
    h5.addEventListener(`click`, function() {
        this.style.color = obtenerColorAleatorio();
    })

})
