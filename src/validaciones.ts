import { listadoBancos } from "./datos-bancos";

export interface ResultadoIBAN {
  valido: boolean;
  nombreBanco?: string;
  oficina?: string;
  control?: string;
  cuenta?: string;
}

export const ibanCorrecto = (value:string): ResultadoIBAN => {  
  const patronIBAN = /^(ES)\d{2}([ -]?)(?<banco>\d{4})\2(?<oficina>\d{4})\2(?<control>\d{2})\2(?<cuenta>\d{10})$/;
  
  const datos = patronIBAN.exec(value);
  
  if (!datos) {
    console.log("FALLO");
    return { valido: false }
  }

  const { banco, oficina, control, cuenta } = datos.groups as Record<string, string>;

  let nombreBanco;
  
  if (listadoBancos[banco] !== undefined && listadoBancos[banco] !== null) {
    nombreBanco = listadoBancos[banco];
  } else {
    nombreBanco = "Banco no encontrado";
  } return {
     valido: true,
     nombreBanco,
     oficina,
     control,
     cuenta
  };
};