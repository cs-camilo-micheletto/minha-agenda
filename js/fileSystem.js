class FileSystem {

  initialize() {
    this.attachListeners();
    this.hasEntries();
  }

  attachListeners() {
    downloadContacts.addEventListener('click', () => {
      this.getTabledata();
    });
  }

  hasEntries() {
    const downloadContact = document.querySelector(".download-content");
    if(tabelaContatos.children.length > 0) {
      console.dir(tabelaContatos);
      downloadContact.classList.remove("d-none");
    } else {
      console.dir(tabelaContatos);
      downloadContact.classList.add("d-none");
    }
  }

  private

  getTabledata() {
    const elements = tabelaContatos.querySelectorAll("td:not([class])");
    const mapped = Array.from(elements).map(el => el.innerText);
    const type = Array.from(document.forms[1].elements)
      .find(el => el.checked).value.toLowerCase() || "json";
    const group = [];
    mapped.forEach((item, ind, arr) => {
      if (ind % 2 == 0 || ind === 0) {
        group.push([arr[ind], arr[ind + 1]]);
      }
    })
    let toSend
    if(type === 'json') {
      toSend = JSON.stringify(Object.fromEntries(group));
    } else {
      toSend = `${[...group].join('\n')}`;
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