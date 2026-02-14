window.abrirDesafio = function (nombreCarpeta) {
    var iframe = document.createElement('iframe');
    iframe.id = 'pantalla_minijuego';
    iframe.src = 'desafios/' + nombreCarpeta + '/index.html';

    // ESTILO CENTRADO
    iframe.style.position = 'fixed';
    iframe.style.top = '50%';
    iframe.style.left = '50%';
    iframe.style.width = '90%';
    iframe.style.height = '90%';
    iframe.style.transform = 'translate(-50%, -50%)';
    iframe.style.border = '4px solid #d4af37';
    iframe.style.zIndex = '10000';
    iframe.style.backgroundColor = '#0d1117';

    document.body.appendChild(iframe);

    window.addEventListener('message', function receptor(event) {
        var pantalla = document.getElementById('pantalla_minijuego');

        // --- CASO: GANASTE ---
        if (event.data.tipo === "FIN_DESAFIO") {
            if (pantalla) document.body.removeChild(pantalla);
            window.removeEventListener('message', receptor);

            // Lógica de Interruptores según el juego
            // Si el juego no manda ID, asumimos que es el primero (ritmo_01)
            if (!event.data.id || event.data.id === "ritmo_01") {
                $gameSwitches.setValue(1, true); // Interruptor 1: Negra
            }
            else if (event.data.id === "chacarera") {
                $gameSwitches.setValue(2, true); // Interruptor 2: Chacarera
            }
            // --- AGREGAR ESTO ---
            else if (event.data.id === "vals") {
                $gameSwitches.setValue(3, true); // Vals (Interruptor 3)
            }

            $gameMessage.add("¡Desafío superado! Puntaje: " + event.data.puntaje);
        }

        // --- CASO: CANCELASTE ---
        if (event.data.tipo === "CANCELAR_DESAFIO") {
            if (pantalla) document.body.removeChild(pantalla);
            window.removeEventListener('message', receptor);
            $gameMessage.add("No te preocupes, podés volver a intentarlo cuando quieras.");
        }
    });
};