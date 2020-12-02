import localStorageHelper from '../utils/utils.js';
import triggerAlert from '../utils/alert.js';
import fs from '../utils/fileSystem.js';
import Contact from '../model/Contact.js';
import instantiateTable from '../view/table.js';




class ContactList {
  constructor(table) {
    this.table = table;
  }

  /**
   * 
   * @param {Array} contact
   */
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

  new(contact) {
    instantiateTable.insertEntries(contact);
  }

  index() {
    localStorageHelper.refresh();
    const locals = localStorageHelper.load();
    console.log(locals)
    locals.forEach(contact => {
      const newContact =  new Contact(contact);
      this.new(newContact);
      console.log(`Loaded ${newContact.name}`);
    });
  }
}

const contact = new ContactList(tabelaContatos);

export default contact;

