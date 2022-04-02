let nombreAlumno = prompt("Cual es tu nombre?");

alert("Inserta las siguientes calificaciones:");
let notaInformatica, notaRedes, notaMatematicas;

notaInformatica = parseFloat(prompt("Redes:"));
notaRedes = parseFloat(prompt("Informatica:"));
notaMatematicas = parseFloat(prompt("Matematicas:"));

let pro;
pro = (notaInformatica + notaRedes + notaMatematicas) / 3;

promedioFinalM = pro.toFixed(2);

if (promedioFinalM >= 7) {
  document.write(
    "<h2> Hola " +
      nombreAlumno +
      "</h2> " +
      "<h3>Tu promedio es de: " +
      promedioFinalM +
      " Aprobaste la escuela </h3"
  );
} else {
  if (promedioFinalM >= 4) {
    document.write(
      "<h2> Hola " +
        nombreAlumno +
        "</h2> " +
        "<h3>Tu promedio es de: " +
        promedioFinalM +
        " Necesitas hacer un extraordinario"
    );
  } else {
    document.write(
      "<h2> Hola " +
        nombreAlumno +
        "</h2> " +
        "<h3>Tu promedio es de: " +
        promedioFinalM +
        " Reprobaste este ciclo"
    );
  }
}
