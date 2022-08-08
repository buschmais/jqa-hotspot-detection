export function createlist() {

let testoflist = "Hay ich bin aus der Liste"
let listofmetrics =[["Anzahl Autoren pro Komponente", "*keine*", "Komponente"], ["LoC pro Autor", "*keine*", "Autor"],
                    ["Cyclomatic Complexity pro Klasse", "Komponente", "Klasse"], ["Cycl. Compl. pro Methode",
                     "Klasse", "Methode"]];

document.write(listofmetrics);
}
