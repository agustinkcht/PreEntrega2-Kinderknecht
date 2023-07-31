// Este es el primer planteo de una plataforma para sacar tickets para eventos.


// armamos class constructora para la base de datos de eventos.

class Evento {
    constructor(id, tipo, nombre, artista, fecha, venue, precio, disponibilidad) {
        this.id = id
        this.tipo = tipo
        this.nombre = nombre
        this.artista = artista
        this.fecha = fecha
        this.venue = venue
        this.precio = parseFloat(precio)
        this.disponibilidad = disponibilidad
    }
    obtenerServiceCharge() { // calculo de service charge
        const precioFinal = this.precio * 0.15
        return parseInt(precioFinal)
    }
    presentacionEvento() { // funcion que presenta el evento elegido
        alert(this.nombre + " es presentado por " + this.artista + " el " +  this.fecha.toLocaleDateString() + " en " + this.venue + " a las " + this.fecha.getHours() + ":00hs." + " El precio de la entrada general es de " + "$" + this.precio + " + " + "$" + this.obtenerServiceCharge() + " de service charge." + " Si desea seguir adelante con la compra, por favor complete los siguientes campos.")
    }
}



const eventos = [] // array para pushearle cada instancia de eventos



// Instanciamos y pusheamos
eventos.push(
    new Evento(
        "AA",
        "Concierto",
        "Tripolar 360",
        "Usted Señalemelo",
        new Date (2023, 9, 25, 21),
        "El Luna Park",
        14000,
    ),
    new Evento(
        "AB",
        "Concierto",
        "Las Luces que Estaban Ocultas",
        "Juana Aguirre",
        new Date (2023, 10, 16, 0),
        "Niceto Club",
        2000,
    ),
    new Evento(
        "AC",
        "Concierto",
        "This Is Not a Drill",
        "Roger Waters",
        new Date (2023, 10, 21, 21),
        "River Plate",
        23500,
    )
)

eventos.push(
    new Evento(
        "BA",
        "Jazz Club",
        "Forever Ella",
        "Barbie Martinez Sexteto",
        new Date (2023, 7, 22, 20),
        "Bebop Club",
        2600,
    ),
    new Evento(
        "BB",
        "Jazz Club",
        "Donde El Mundo Ocurre",
        "Ernesto Jodos Quinteto",
        new Date (2023, 7, 26, 22),
        "Virasoro Bar",
        2000,
    ),
    new Evento(
        "BC",
        "Jazz Club",
        "La Emperatriz",
        "Pía Hernandez Cuarteto",
        new Date (2023, 9, 14, 20),
        "Prezz Jazz",
        2500,
    )
)




// FILTRAMOS TIPO DE EVENTO: JAZZ CLUB


const filtroJazz = eventos.filter((algun) => algun.tipo.includes("Jazz Club"))
const filtroJazzNombres = filtroJazz.map((evento) => evento.nombre)
let nombresJazz = filtroJazzNombres.join(", ")


//FILTRAMOS TIPO DE EVENTO: CONCIERTO

const filtroConcierto = eventos.filter((algun) => algun.tipo.includes("Concierto"))
const filtroConciertoNombres = filtroConcierto.map((evento) => evento.nombre)
let nombresConciertos = filtroConciertoNombres.join(", ")





// INTERACCIÓN


alert("Bienvenido a TicketFlush. Para Presione OK para acceder a la cartelera.")


// seleccion de tipo de show y evento puntual

let categoriaEvento = prompt("¿En qué tipo de evento está interesado? (A o B): A. Concierto / B. Jazz Club")

let eleccionEvento 

while (categoriaEvento !== "A" && categoriaEvento !== "B") {
    alert("Debe ingresar una respuesta válida. Elija entre A y B.")
    categoriaEvento = prompt("¿En qué tipo de evento está interesado? (A o B):  A. Concierto / B. Jazz Club")
}

if (categoriaEvento === "A") {
    eleccionEvento = prompt("¿Sobre qué show desea obtener mas información? (A, B, C): " + nombresConciertos)
    while (eleccionEvento !== "A" && eleccionEvento !== "B" && eleccionEvento !== "C") {
        alert("Debe ingresar una respuesta válida. Elija entre A, B y C.")
        eleccionEvento = prompt("¿Sobre qué show desea obtener mas información? (A, B, C): " + nombresConciertos)
    }

} else if (categoriaEvento === "B") {
    eleccionEvento = prompt("¿Sobre qué show desea obtener más información? (A, B, C): " + nombresJazz)
    while (eleccionEvento !== "A" && eleccionEvento !== "B" && eleccionEvento !== "C") {
        alert("Debe ingresar una respuesta válida. Elija entre A, B y C.")
        eleccionEvento = prompt("¿Sobre qué show desea obtener más información? (A, B, C): " + nombresJazz)
    }
} 


let evento = categoriaEvento + eleccionEvento
console.log(evento)

// concatenamos el valor de la categoria evento y el evento puntual, para poder realizar el switch







function infoDeEvento(evento) { // switch para los posibles casos de eleccion
    switch(evento) {
        case "AA":
            eventos[0].presentacionEvento()
            break;
        case "AB":
            eventos[1].presentacionEvento()
            break;
        case "AC":
            eventos[2].presentacionEvento()
            break;
        case "BA":
            eventos[3].presentacionEvento()
            break;
        case "BB":
            eventos[4].presentacionEvento()
            break;
        case "BC":
            eventos[5].presentacionEvento()
            break;
    }
}

infoDeEvento(evento)






// PEDIMOS LOS DATOS DEL COMPRADOR

let nombreCliente = prompt("Ingrese su nombre")
while (nombreCliente === "" || nombreCliente === " ") {
    alert("Debes completar el campo solicitado para poder continuar.")
    nombreCliente = prompt("Ingrese su nombre")
}


let apellidoCliente = prompt ("Ingrese su apellido")
while (nombreCliente === "" || nombreCliente === " ") {
    alert("Debes completar el campo solicitado para poder continuar.")
    nombreCliente = prompt("Ingrese su apellido")
}

const nombreCompletoCliente = nombreCliente + (" ") + apellidoCliente
// concatenamos nombre y apellido

let dniCliente = prompt ("Ingrese su DNI") 
while (isNaN(dniCliente)) {
    alert("Debes ingresar un número válido.")
    dniCliente = prompt ("Ingrese su DNI") 
}

let mailCliente = prompt ("Ingrese su Email")
while (nombreCliente === "" || nombreCliente === " ") {
    alert("Debes completar el campo solicitado para poder continuar.")
    nombreCliente = prompt("Ingrese su Email")
}

let confirmar = prompt(nombreCompletoCliente + ", escriba OK para confirmar la compra de su entrada. De lo contrario, presione cancelar si desea cancelar la operación.")
while (confirmar != "OK" &&  confirmar!= null) {
    alert("Debes introducir una respuesta válida, o presionar cancelar")
    confirmar = prompt("Escriba OK para confirmar. Presione cancelar si quiere cancelar la operacion.")
}
switch(confirmar) {
    case "OK":
        alert("La operación se ha realizado con éxito. Los detalles de la entrada le llegarán por Email. Muchas gracias." )
        break;
    case null:
        alert("Has cancelado la operación")
        break;
}