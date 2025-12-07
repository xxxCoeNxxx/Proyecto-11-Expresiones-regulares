import { ResultadoIBAN} from "./validaciones";

const crearParrafo = (texto: string): HTMLParagraphElement => {
    const p = document.createElement("p");
    p.innerText = texto;

    return p;
};

export const crearContenedor = (datosIBAN: ResultadoIBAN): HTMLDivElement => {
    const contenedor = document.createElement("div");
    contenedor.classList.add("contenedor-datos")

    const comprobacion = crearParrafo(
        datosIBAN.valido ? "IBAN válido" : "IBAN no válido"
    );

    const banco = crearParrafo(`Banco: ${datosIBAN.nombreBanco}`);
    const oficina = crearParrafo(`Oficina: ${datosIBAN.oficina}`);
    const control = crearParrafo(`Control: ${datosIBAN.control}`);
    const cuenta = crearParrafo(`Cuenta: ${datosIBAN.cuenta}`);

    contenedor.append(comprobacion, banco, oficina, control, cuenta)
    return contenedor;
}
