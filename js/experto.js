const lista_palabras = [
    'vaca', 'edificio', 'correr', 'casa', 'arbol', 'planeta',
    'montaña', 'rio', 'oceano', 'sol', 'luna', 'estrella',
    'computadora', 'telefono', 'television', 'automovil', 'bicicleta',
    'helado', 'pizza', 'hamburguesa', 'ensalada', 'fruta',
    'libro', 'pintura', 'musica', 'pelicula', 'teatro',
    'familia', 'amigo', 'amor', 'odio', 'alegria',
    'tristeza', 'miedo', 'sorpresa', 'enfado', 'paz',
    'guerra', 'historia', 'ciencia', 'arte', 'matematicas',
    'universidad', 'trabajo', 'viaje', 'aventura', 'sueño',
    'fantasia', 'realidad', 'tiempo', 'espacio', 'vida',
    'muerte', 'naturaleza', 'ciudad', 'pais', 'mundo',
    'tecnologia', 'innovacion', 'creatividad', 'aprendizaje', 'desarrollo',
    'cultura', 'religion', 'filosofia', 'politica', 'economia',
    'medicina', 'deporte', 'juego', 'jugador', 'equipo',
    'celebridad', 'fama', 'historia', 'futuro', 'pasado',
    'presente', 'solucion', 'problema', 'exito', 'fracaso',
    'esperanza', 'deseo', 'objetivo', 'satisfaccion', 'desafio',
    'crecimiento', 'cambio', 'transformacion', 'magia', 'avance',
    'diferencia', 'similitud', 'complejidad', 'simplicidad', 'recompensa',
    'riesgo', 'ganancia', 'perdida', 'belleza', 'fealdad',
    'pintor', 'artista', 'cientifico', 'escritor', 'musico', 'actor',
    'director', 'empresa', 'cliente', 'empleado', 'jefe', 'colega',
    'profesor', 'estudiante', 'escuela', 'universidad', 'aula', 'examen',
    'investigacion', 'descubrimiento', 'invento', 'tecnologia', 'internet',
    'redes', 'social', 'comunicacion', 'viaje', 'aventura', 'exploracion',
    'naturaleza', 'animal', 'planta', 'ecosistema', 'clima', 'planeta',
    'sistema', 'estructura', 'organizacion', 'comunidad', 'sociedad',
    'cultura', 'tradicion', 'historia', 'origen', 'identidad', 'religion',
    'creencia', 'espiritualidad', 'filosofia', 'pensamiento', 'ideologia',
    'politica', 'gobierno', 'poder', 'derechos', 'responsabilidad',
    'economia', 'mercado', 'dinero', 'riqueza', 'pobreza', 'trabajo',
    'industria', 'innovacion', 'teoria', 'practica', 'aprendizaje',
    'educacion', 'salud', 'medicina', 'enfermedad', 'tratamiento',
    'deporte', 'juego', 'estrategia', 'jugador', 'equipo', 'competencia',
    'celebridad', 'fama', 'historia', 'futuro', 'pasado', 'presente',
    'solucion', 'problema', 'exito', 'fracaso', 'esperanza', 'deseo',
    'objetivo', 'satisfaccion', 'desafio', 'crecimiento', 'cambio',
    'transformacion', 'magia', 'avance', 'diferencia', 'similitud',
    'complejidad', 'simplicidad', 'recompensa', 'riesgo', 'ganancia',
    'perdida', 'belleza', 'fealdad', 'arte', 'creatividad', 'imaginacion',
    'emocion', 'sentimiento', 'amor', 'odio', 'alegria', 'tristeza',
    'miedo', 'sorpresa', 'enfado', 'paz', 'guerra', 'paradigma', 
    'efervescencia', 'anacronismo', 'efimero', 'conjetura', 'sinergia', 
    'esoterico', 'paradoja', 'efluvio', 'proclividad', 'perplejidad',
    'ambigüedad', 'uberrimo', 'innuendo', 'pletora', 'quimera', 'ludico',
    'retorica', 'cognoscible', 'epistemologia', 'sine qua non', 'intrinseco',
    'magnanimo', 'sui generis', 'visceral', 'perdurable', 'iridiscente',
    'aureo', 'apocrifo', 'exegesis', 'efervescente', 'crepusculo', 'effusus',
    'exquisito', 'idiosincrasia', 'insipido', 'sesquipedalio', 'efluvios',
    'nebuloso', 'anacronico', 'inefable', 'uberrima', 'prosopopeya',
    'reverberacion', 'obnubilar', 'serendipia', 'eflorescente', 'empireo',
    'inextricable', 'peregrinacion', 'vivaz', 'volatil', 'cataclismo',
    'cromatico', 'decadencia', 'sibilino', 'parabola', 'laud', 'sibilancia',
    'delectacion', 'placido', 'analogia', 'oscilacion', 'contumacia',
    'prerrogativa', 'amalgama', 'afable', 'eficacia', 'reliquia', 'enigma',
    'infimo', 'homunculo', 'faustico', 'sacrilego', 'iconico', 'bizarro',
    'incubo', 'ultrajante', 'profundo', 'candente', 'copioso', 'quid pro quo',
    'concatenacion', 'efluente', 'abstruso', 'linaje', 'perentorio', 'anatema',
    'exegeta', 'eclecticismo', 'arbitrario', 'neofito', 'onirico', 'serafico',
    'quijotesco', 'compendio', 'convalecencia', 'debilitamiento', 'efronteria',
    'propincuidad', 'consternacion', 'desasosiego', 'melancolia', 'efervescencia',
    'paroxismo', 'zafarrancho', 'perplejidad', 'insoslayable', 'iridiscente',
    'intransigente', 'paradigma', 'efimero', 'inmaculado', 'acucioso', 'peregrinaje',
    'uberrimo', 'quimerico', 'incolume', 'reminiscencia', 'sibarita', 'exacerbado',
    'elocuencia', 'sagacidad', 'procrastinacion', 'providencia', 'eclecticismo',
    'merma', 'idiosincrasia', 'esplendido', 'exhortacion', 'disentir', 'aspaviento',
    'placido', 'sosegado', 'eflorescencia', 'ambivalencia', 'serendipia',
    'resiliencia', 'vicisitud', 'desden', 'efusivo', 'egregio', 'quid pro quo',
    'intrincado', 'sesquipedalio', 'contumacia', 'quintaesencia', 'iniquidad',
    'inefable', 'concentrico', 'enervante', 'perentorio', 'quijotesco', 'acerrimo',
    'voragine', 'ambito', 'parabola', 'exegesis', 'delectacion', 'enigma',
    'nebuloso', 'anacronico', 'plenitud', 'sutil', 'acumen', 'nihilismo',
    'complacencia', 'inopia', 'superfluo', 'peregrinacion', 'profundo',
    'contemplativo', 'enervante', 'sublime', 'efluvio', 'vicario', 'sintetico',
    'imponderable', 'desvario', 'inmaculado', 'imbuir', 'magnanimo', 'plenipotenciario',
    'abjuracion', 'effusus', 'adefesio', 'paradoja', 'protervo', 'osadia', 'pudico',
    'albricias', 'lampiño', 'acaudalado', 'relumbre', 'opulencia', 'resarcimiento',
    'infausto', 'macabro', 'quijotesco', 'anatema', 'despota', 'insurgente', 'somero'
    ]


const palabras = lista_palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1));


// Función para enviar las palabras memorizadas
function mostrarEnviarPalabras() {
    const palabrasContainer = document.getElementsByClassName('palabras-container')[0];
    palabrasContainer.style.display = 'flex';
}


// Función para mostrar palabras
let palabrasMostradas = [];
function mostrarPalabras() {
    const palabrasContainer = document.getElementById('palabras-random');

    let index = 0;

    // Función para mostrar la siguiente palabra
    function mostrarSiguientePalabra() {
        if (index < 4) {
            // Muestra una palabra aleatoria del array
            const palabraIndex = Math.floor(Math.random() * palabras.length);
            palabrasContainer.textContent = palabras[palabraIndex];
            palabrasMostradas.push(palabras[palabraIndex]);
            index++;
        } else {
            // Elimina el div que contiene las palabras
            palabrasContainer.parentNode.removeChild(palabrasContainer);
            // Detiene el intervalo de tiempo
            clearInterval(interval);
            mostrarEnviarPalabras();
        }
    }

    // Mostrar palabras cada 2 segundos
    const interval = setInterval(mostrarSiguientePalabra, 600);

}
mostrarPalabras();


// Función para manejar el envío del formulario
const palabrasIngresadas = [];


// Función para agregar una palabra al array
function agregarPalabra() {
    // Obtener el primer elemento con la clase 'txtFacil'
    let palabraInput = document.getElementsByClassName('txtFacil')[0];

    // Obtener el valor del input
    let palabra = palabraInput.value.trim(); // Eliminar espacios en blanco al inicio y al final

    // Verificar si la palabra no está vacía y si aún no se han ingresado 3 palabras
    if (palabra !== '' && palabrasIngresadas.length < 4) {
        // Agregar la palabra al array
        palabrasIngresadas.push(palabra);

        // Limpiar el input
        palabraInput.value = '';
        
        // Verificar si se han ingresado 3 palabras
        if (palabrasIngresadas.length === 4) {
            // Comprobar si los dos arrays son iguales
            if (arraysIguales(palabrasIngresadas, palabrasMostradas)) {
                window.location.href = 'ganador.html';
            } else {
                window.location.href = 'perdedor.html';
            }
        }
    } else {
        alert('Por favor, ingresa una palabra válida o ya se han ingresado las 3 palabras.');
    }
    const input = document.querySelector('.txtFacil');
    input.focus();
}


window.addEventListener("keydown",(e)=> {
    if (e.keyCode===13) {
        agregarPalabra();
        const input = document.querySelector('.txtFacil');
        input.focus();
    }
})


// Función para enviar las palabras ingresadas (simplemente las muestra en la consola en este ejemplo)
function enviarPalabras() {
    console.log('Palabras ingresadas:', palabrasIngresadas);
}


// Función para verificar si dos arrays son iguales
function arraysIguales(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


// Función para volver al Menu
function VolverMenu() {
    window.location.href = '/index.html';
}


// Función para volver a Jugar
function VolverJugar() {
    window.location.href = 'experto.html';
}