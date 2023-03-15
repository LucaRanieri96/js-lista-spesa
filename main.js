/*
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
*/

// array lista della spesa

const shoppingList = [
  "pane",
  "acqua",
  "frutta",
  "verdura",
  "latte",
  "salse",
  "pasta",
  "vino",
  "birra",
  "patatine",
];

// ciclo while
const listItems = document.getElementById("shopping_list");
// variabile del ciclo
let i = 0;
// condizione
while (i < shoppingList.length) {
  // scrivo i list item dentro l'"ul"
  listItems.innerHTML += "<li>" + shoppingList[i] + "</li>";
  // incremento del ciclo
  i++;
}
