import contact from './contacts.js';

class Table {
  constructor(table) {
    this.table = table;
  }

  attachListeners() {
    this.table.addEventListener("click", (ev) => {
      const target = ev.target.parentElement;
      if (target.className === "delete") {
        let element = target.parentNode.firstElementChild;
        contact.delete(element.innerText);
        contact.index();
      }

      if (target.className === "edit") {
        const name = ev.target.parentElement.parentNode.firstElementChild.innerText;
        contact.delete(name);
        inputNome.value = name;
        inputNome.readOnly = true;
        inputTelefone.focus()
      }
    });
  }
}

const instantiateTable = new Table(tabelaContatos);

export default instantiateTable;