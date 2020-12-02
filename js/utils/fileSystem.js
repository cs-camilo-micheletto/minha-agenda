import instantiateTable from "../view/table.js";
class FileSystem {

  initialize() {
    this.attachListeners();
    this.hasEntries();
  }

  attachListeners() {
    downloadContacts.addEventListener('click', () => {
      this.checkTableData();
    });
  }

  hasEntries() {
    const downloadContact = document.querySelector(".download-content");
    if(tabelaContatos.children.length > 0) {
      downloadContact.classList.remove("d-none");
    } else {
      downloadContact.classList.add("d-none");
    }
  }

  private

  checkTableData() {
    let toSend;
    const entries = instantiateTable.listEntries();
    const type = Array.from(document.forms[1].elements)
    .find(el => el.checked).value.toLowerCase() || "json";

    if(type === 'json') {
      toSend = JSON.stringify(Object.fromEntries(entries));
    } else {
      toSend = `${[...entries].join('\n')}`;
    }
    
    this.downloadTabledata(toSend, type);
  }

  downloadTabledata(text, type) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', `contacts.${type}`);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
}

const fs = new FileSystem();

export default fs;