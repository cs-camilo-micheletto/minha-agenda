import contact from '../controller/contactController.js';

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

  insertEntries({name, tel}) {
    const tableEntry = `<tr>
      <td>${name}</td>
      <td>${tel}</td>
      <td class="edit"><i class="fas fa-edit"></i></td>
      <td class="delete"><i class="fas fa-trash"></i></td>
    </tr>`;
    
    this.table.innerHTML += tableEntry;
  }

  listEntries() {
    const elements = tabelaContatos.querySelectorAll("td:not([class])");
    const mapped = Array.from(elements).map(el => el.innerText);

    const group = [];

    mapped.forEach((item, ind, arr) => {
      if (ind % 2 == 0 || ind === 0) {
        group.push([arr[ind], arr[ind + 1]]);
      }
    });

    return group;
  }
}

const instantiateTable = new Table(tabelaContatos);

export default instantiateTable;