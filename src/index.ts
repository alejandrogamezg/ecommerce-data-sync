// Tipos de datos diferentes
let nombre: string = "Alex";
let edad: number = 100;
let activo: boolean = true;
let habilidades: string[] = ["programación", "análisis", "solución"];

// Enumeración para representar diferentes valores
enum Direccion {
  Norte = "N",
  Sur = "S",
  Este = "E",
  Oeste = "O"
}

let direccionActual: Direccion = Direccion.Norte;

// Tipos any y unknown en diferentes situaciones
let variableAny: any = "Hola, soy de tipo any";
let variableUnknown: unknown;

variableUnknown = 10; // error en tiempo de compilación si se intenta asignar directamente como con any
let cadenaUnknown: string = variableUnknown as string; // se requiere casting para utilizarla

// Tipos de unión e intersección en diferentes situaciones
type NumeroOTexto = number | string;
type Empleado = { nombre: string; salario: number };
type Gerente = { nombre: string; departamento: string };

function imprimirDetalles(trabajador: Empleado | Gerente) {
  console.log(trabajador.nombre);
  if ("salario" in trabajador) {
    console.log("Salario: " + trabajador.salario);
  } else {
    console.log("Departamento: " + trabajador.departamento);
  }
}

let empleado: Empleado = { nombre: "Juan", salario: 3000 };
let gerente: Gerente = { nombre: "Ana", departamento: "Ventas" };

imprimirDetalles(empleado);
imprimirDetalles(gerente);

// Tipos de colección en diferentes situaciones
type Empleados = { [codigo: string]: Empleado };
let empleados: Empleados = {
  "001": { nombre: "Carlos", salario: 2500 },
  "002": { nombre: "María", salario: 2800 }
};

// Implementación de una interfaz con colección
interface Equipo {
  nombre: string;
  integrantes: Empleados;
}

let equipoVentas: Equipo = {
  nombre: "Equipo de Ventas",
  integrantes: empleados
};

console.log(equipoVentas);