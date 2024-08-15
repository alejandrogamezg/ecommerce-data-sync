// Tipos de datos diferentes
var nombre = "Alex";
var edad = 100;
var activo = true;
var habilidades = ["programación", "análisis", "solución"];
// Enumeración para representar diferentes valores
var Direccion;
(function (Direccion) {
    Direccion["Norte"] = "N";
    Direccion["Sur"] = "S";
    Direccion["Este"] = "E";
    Direccion["Oeste"] = "O";
})(Direccion || (Direccion = {}));
var direccionActual = Direccion.Norte;
// Tipos any y unknown en diferentes situaciones
var variableAny = "Hola, soy de tipo any";
var variableUnknown;
variableUnknown = 10; // error en tiempo de compilación si se intenta asignar directamente como con any
var cadenaUnknown = variableUnknown; // se requiere casting para utilizarla
function imprimirDetalles(trabajador) {
    console.log(trabajador.nombre);
    if ("salario" in trabajador) {
        console.log("Salario: " + trabajador.salario);
    }
    else {
        console.log("Departamento: " + trabajador.departamento);
    }
}
var empleado = { nombre: "Juan", salario: 3000 };
var gerente = { nombre: "Ana", departamento: "Ventas" };
imprimirDetalles(empleado);
imprimirDetalles(gerente);
var empleados = {
    "001": { nombre: "Carlos", salario: 2500 },
    "002": { nombre: "María", salario: 2800 }
};
var equipoVentas = {
    nombre: "Equipo de Ventas",
    integrantes: empleados
};
console.log(equipoVentas);
