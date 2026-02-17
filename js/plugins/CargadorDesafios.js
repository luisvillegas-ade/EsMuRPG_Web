window.abrirDesafio = function (nombreCarpeta) {
    // 1. APAGAR LA MÚSICA DEL MAPA
    AudioManager.fadeOutBgm(1);

    var iframe = document.createElement('iframe');
    iframe.id = 'pantalla_minijuego';
    iframe.src = 'desafios/' + nombreCarpeta + '/index.html';

    // Estilo centrado
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

        if (event.data.tipo === "FIN_DESAFIO" || event.data.tipo === "CANCELAR_DESAFIO") {
            if (pantalla) document.body.removeChild(pantalla);
            window.removeEventListener('message', receptor);

            // 2. VOLVER A ENCENDER LA MÚSICA DEL MAPA
            $gameMap.autoplay();

            if (event.data.tipo === "FIN_DESAFIO") {
                // --- LÓGICA DE INTERRUPTORES ACTUALIZADA ---
                if (!event.data.id || event.data.id === "ritmo_01") {
                    $gameSwitches.setValue(1, true); // Interruptor 1: Negras
                } else if (event.data.id === "chacarera") {
                    $gameSwitches.setValue(2, true); // Interruptor 2: Chacarera
                } else if (event.data.id === "vals") {
                    $gameSwitches.setValue(3, true); // <--- NUEVO: Interruptor 3: Vals
                }

                $gameMessage.add("¡Desafío superado!");
            } else {
                $gameMessage.add("No te preocupes, podés volver cuando quieras.");
            }
        }
    });
};