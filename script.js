document.getElementById('reserva-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    var nombre = document.getElementById('nombre').value;
    var fecha = document.getElementById('fecha').value;
  
    // Realiza los cálculos necesarios con la fecha
  
    var resultado = "Hola " + nombre + ". Tu reserva está confirmada para el " + fecha + ".";
  
    document.getElementById('reserva-resultado').innerHTML = resultado;
  });
  