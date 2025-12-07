import { listadoBancos } from "./datos-bancos";
import { crearContenedor } from "./ui";

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

export const pulsarParaComprobar = () => {
  const input = document.querySelector("#input-busqueda");
  const boton = document.querySelector("#boton-IBAN");

  if (!input || !(input instanceof HTMLInputElement)) throw new Error("No se encontró el input");
  if (!boton || !(boton instanceof HTMLButtonElement)) throw new Error("No se encontró el botón");

  const ejecutarBusqueda = () => {
    //Limpiar contenido anterior
    document.querySelectorAll(".contenedor-datos, .mensaje").forEach(el => el.remove());

    const resultado = ibanCorrecto(input.value);

    if (!resultado.valido) {
      const mensaje = document.createElement("p");
      mensaje.textContent = "El IBAN no está bien formado"
      mensaje.classList.add("mensaje")
      document.body.appendChild(mensaje);
      return;
    }

    const contenedor = crearContenedor(resultado);
    document.body.appendChild(contenedor);
  };

  boton.addEventListener("click", ejecutarBusqueda);

  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      ejecutarBusqueda();
    }
  });
};
