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

const form = document.querySelector("form");
const input = document.getElementById("new_item");

form.addEventListener("submit", function (e) {
  // annullare comportamento di refresh del form
  e.preventDefault();

  const action = e.submitter.value; // valore del pulsante cliccato

  const item = input.value;

  if (action === "add") {
    shoppingList.push(item);
    listItems.innerHTML += "<li>" + item + "</li>";
  } else if (action === "remove") {
    // definisco una variabile per trovare l'index degli elementi nell'array
    const index = shoppingList.indexOf(item);

    if (index !== -1) { 
      shoppingList.splice(index, 1);
      listItems.children[index].remove();
    }
  }

  input.value = "";
});

console.log(shoppingList);
