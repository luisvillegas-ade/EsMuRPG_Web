const datosCurso = {
    "id_curso": "CUR_001",
    "titulo": "Ecos de la Pacha: Introducción a la Lectura",
    "avance_total": 45,
    "modulos": [
        {
            "id": "M01",
            "numero": "01",
            "titulo": "Fundamentos del Ritmo",
            "estado": "abierto",
            "recursos": [
                {
                    "tipo": "pdf",
                    "titulo": "Guía de Lectura Musical (Cajita de Música)",
                    "detalle": "Lectura • PDF • 15 min",
                    "url": "material/pdfs/Andean_Rhythmic_Pulse.pdf",
                    "completado": true
                },
                {
                    "tipo": "video",
                    "titulo": "Introducción al Pulso",
                    "detalle": "Video • 5 min",
                    "url": "reproductor.html?v=pj79XlyncZ8&t=Introducción al Pulso",
                    "completado": true
                },
                {
                    "tipo": "app",
                    "titulo": "Laboratorio Interactivo: Sintiendo el Pulso",
                    "detalle": "App Web • Práctica visual y sonora",
                    "url": "apps/laboratorio_pulso.html",
                    "completado": false
                },
                {
                    "tipo": "rpg",
                    "titulo": "Práctica Inmersiva: El Patio de Tierra",
                    "detalle": "RPG Interactivo • XP: +50",
                    "url": "../sistema_rpg/game.html",
                    "completado": false
                },
                {
                    "tipo": "test",
                    "titulo": "Test de Ritmo Básico",
                    "detalle": "Evaluación • 20 min",
                    "url": "#",
                    "completado": false
                }
            ]
        },
        { "id": "M02", "numero": "02", "titulo": "La Chacarera", "estado": "bloqueado", "recursos": [] },
        { "id": "M03", "numero": "03", "titulo": "El Vals Criollo", "estado": "bloqueado", "recursos": [] }
    ]
};