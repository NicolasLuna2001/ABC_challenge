function cargarComponentes() {
    // Trae el navbar y lo mete en su contenedor
    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-container').innerHTML = html;
        });

    // Trae el footer y lo mete en su contenedor
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
        });
}

// Ejecutar la función cuando cargue la página
cargarComponentes();