import localStorageHelper from './utils/utils.js';
import triggerAlert from './alert.js';
import fs from './fileSystem.js';


class Contact {
  constructor(table) {
    this.table = table;
  }

  save(contact) { 
    const telephone = contact[1].length > 0;
    const name = contact[0].length > 0;
    
    
    if (!telephone && !name) {
      triggerAlert("Campos Nome e Telefone preenchidos incorretamente", "danger");
    } else if (!name) {
      triggerAlert("Nome do contato é obrigatório", "danger");
      inputNome.focus();
    } else if (!telephone) {
      triggerAlert("Telefone é obrigatório", "danger");
      inputTelefone.focus();
    } else {
      if (inputNome.hasAttribute("readonly"))
      inputNome.removeAttribute("readonly");

      localStorageHelper.set(contact);
      fs.hasEntries();
      form.reset();
      inputNome.focus();
      this.index();
    }
  }

  delete(el) {
    localStorageHelper.remove(el);
    fs.hasEntries();
  }

  new([name, tel]) {
    const tableEntry = `<tr>
      <td>${name}</td>
      <td>${tel}</td>
      <td class="edit"><i class="fas fa-edit"></i></td>
      <td class="delete"><i class="fas fa-trash"></i></td>
    </tr>`;
    
    this.table.innerHTML += tableEntry;
  }

  index() {
    localStorageHelper.refresh();
    localStorageHelper.load()
      .forEach(contact => {
        this.new(contact)
        console.log(`Loaded ${contact}`);
      });
  }
}

const contact = new Contact(tabelaContatos);

export default contact;

