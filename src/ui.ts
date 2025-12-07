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
        datosIBAN.valido ? "El IBAN es válido" : "El IBAN no es válido"
    );

    const banco = crearParrafo(`Banco: ${datosIBAN.nombreBanco}`);
    const oficina = crearParrafo(`Código sucursal: ${datosIBAN.oficina}`);
    const control = crearParrafo(`Dígito de control: ${datosIBAN.control}`);
    const cuenta = crearParrafo(`Número de cuenta: ${datosIBAN.cuenta}`);

    contenedor.append(comprobacion, banco, oficina, control, cuenta)
    return contenedor;
}
