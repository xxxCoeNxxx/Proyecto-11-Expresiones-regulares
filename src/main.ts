import "./style.css";
import { crearContenedor } from "./ui";
import { ibanCorrecto} from "./validaciones";

const inputIBAN = "ES21-1465-0100-72-2030876293"; // EJEMPLO

const resultadoIBAN = ibanCorrecto(inputIBAN);

const contenedor = crearContenedor(resultadoIBAN);

document.body.appendChild(contenedor);