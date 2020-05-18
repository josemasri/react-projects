// obtiene la diferencia de años
export const obtenerDiferenciaYear = (year) => new Date().getFullYear() - year;

// calcula el total a pagar segun la marca
export const calcularMarca = (marca) => {
  switch (marca) {
    case "europeo":
      return 1.3;
    case "americano":
      return 1.15;
    case "asiatico":
      return 1.05;
    default:
      break;
  }
};

// Calcular tipo de seguro
export const obtenerPlan = (plan) => (plan === "basico" ? 1.2 : 1.5);
