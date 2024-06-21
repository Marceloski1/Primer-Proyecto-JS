class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
//Profe no pude hacerlo por modulos me daba bateo a la hora de usa el import 
class Reserva extends Persona {
    constructor(nombre, apellido, numeroHabitacion, fechaEntrada, fechaSalida) {
        super(nombre, apellido);
        this.numeroHabitacion = numeroHabitacion;
        this.fechaEntrada = fechaEntrada;
        this.fechaSalida = fechaSalida;
    }
}

let reservas = [];

function mostrarFormularioReserva() {
    document.getElementById('formularioReserva').style.display = 'block';
    document.getElementById('listaReservas').style.display = 'none';
    document.getElementById('cancelarReserva').style.display = 'none';
}

function mostrarReservas() {
    const reservasList = document.getElementById('reservas');
    reservasList.innerHTML = '';
    reservas.forEach((reserva, index) => {
        const li = document.createElement('li');
        li.textContent = `Habitación: ${reserva.numeroHabitacion}, Nombre: ${reserva.nombre} ${reserva.apellido}, Entrada: ${reserva.fechaEntrada}, Salida: ${reserva.fechaSalida}`;
        reservasList.appendChild(li);
    });
    document.getElementById('listaReservas').style.display = 'block';
    document.getElementById('formularioReserva').style.display = 'none';
    document.getElementById('cancelarReserva').style.display = 'none';
}

function cancelarReserva() {
    document.getElementById('cancelarReserva').style.display = 'block';
    document.getElementById('formularioReserva').style.display = 'none';
    document.getElementById('listaReservas').style.display = 'none';
}

function realizarReserva() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const numeroHabitacion = document.getElementById('numeroHabitacion').value;
    const fechaEntrada = document.getElementById('fechaEntrada').value;
    const fechaSalida = document.getElementById('fechaSalida').value;

    const nuevaReserva = new Reserva(nombre, apellido, numeroHabitacion, fechaEntrada, fechaSalida);
    reservas.push(nuevaReserva);
    alert('Reserva realizada con éxito');
    document.getElementById('reservaForm').reset();
}

function cancelar() {
    const numeroHabitacion = document.getElementById('numeroCancelar').value;
    reservas = reservas.filter(reserva => reserva.numeroHabitacion !== numeroHabitacion);
    alert('Reserva cancelada con éxito');
    document.getElementById('cancelarForm').reset();
}
