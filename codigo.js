var dia = (prompt ('ingrese dia de la semana'));
var diasHabiles = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
var finDeSemana = ['sabado', 'domingo'];
for (var i = 0; i < diasHabiles.length; i++) {
  if (diasHabiles[i] === dia) {
      alert('Hoy es un dia habil');
      break;
}
} ;
   
for (var i = 0; i < finDeSemana.length; i++) {
  if (finDeSemana[i] === dia) {
      alert('Hoy es fin de semana');
      break;
    };
};