//Comisiones según el medio de pago
export const comisionesMedioPago = {
  1: 0.008, //Dinero en cuenta
  2: 0.099, //Tarjeta de débito
  3: 0.049, //Tarjeta de crédito
}

//Comisiones a los usuarios por pago en cuotas
export const comisionesPorcuotas = {
  1: 0, //1 cuota
  2: 0.1444, //3 cuotas
  3: 0.2346, //6 cuotas
  4: 0.3237, //12 cuotas
  5: 0.3920, //18 cuotas
  6: 0.0603, //3 cuotas simple
  7: 0.1145, //6 cuotas simple
  8: 0.1645, //9 cuotas simpe
  9: 0.2107, //12 cuotas simple
};
//Comisiones según de plazo de acreditación
export const comisionesPorAcreditacion = {
  1: 0.049, //2 días para acreditar
  2: 0.0295 //10 días para acreditar
};
