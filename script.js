// Variables let
let edad = 18;
let nombre = "Andres";
let precio = 100;
let dia = "Martes";
let descuento = 10;

// Variables const
const ciudad = "Medellín";
const pais = "Colombia";
const iva = 19;
const ciudadDeEnvio = "Bogotá";
const moneda = "$";

// Cero parametros
const mostrarMensaje = () => console.log(`Nombre: ${nombre} Edad: ${edad}. Bienvenido a ${ciudad}, ${pais}`);

// Un parametro
const aplicarDescuento = valor => valor - descuento; 

// Dos parametros
const calcularPrecioFinal = (valor, iva) => valor + (valor * (iva / 100)); 

// Cero parametros con validacion
const mostrarSaludoConValidacion = () => {
    let hora = new Date().getHours();
    if (hora < 12) {
        console.log(`Dia: ${dia} Buenos días, ${nombre}. El precio del producto es ${precio}.`);
    } else if (hora < 18) {
        console.log(`Dia: ${dia} Buenas tardes, ${nombre}. El precio del producto es ${precio}.`);
    } else {
        console.log(`Dia: ${dia} Buenas noches, ${nombre}. El precio del producto es ${precio}.`);
    }
};

// Un parametro con validacion
const tipoDeDia = dia => {
    switch (dia) {
        case 'Lunes':
        case 'Martes':
        case 'Miercoles':
        case 'Jueves':
        case 'Viernes':
            return `Hoy es un dia laborable: ${dia}`;
        case 'Sábado':
        case 'Domingo':
            return `Hoy es fin de semana: ${dia}`;
        default:
            return "Dia no valido";
    }
};

// Dos parametros con validacion
const sumarPreciosConValidacion = (p1, p2) => {
    if (typeof p1 !== 'number' || typeof p2 !== 'number') {
        return "Ambos parametros deben ser numeros";
    }

    let suma = 0;
    let precios = [p1, p2];
    for (let i = 0; i < precios.length; i++) {
        suma += precios[i];
    }
    return suma - descuento;
};

// Llamado de funciones
console.log(mostrarMensaje());
console.log(aplicarDescuento(precio)); 
console.log(calcularPrecioFinal(precio, iva)); 

mostrarSaludoConValidacion();
console.log(tipoDeDia(dia));
console.log(tipoDeDia("Domingo"));

console.log(sumarPreciosConValidacion(100, 200));
console.log(sumarPreciosConValidacion(100, "cien"));
