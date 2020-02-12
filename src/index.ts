import data from "./data.json";
import "./components/delegate-editor";

const de = document.createElement("delegate-editor");
de.setAttribute("data", JSON.stringify(data));
document.body.appendChild(de);
