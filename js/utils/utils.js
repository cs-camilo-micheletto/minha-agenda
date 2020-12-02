import triggerAlert from './alert.js';


class Util {
  static toLowerCaseAll(words) {
    return words.map(word => word.toLowerCase());
  }
}

class localStorageHelper {
  static remove(itemName) {
    localStorage.removeItem(itemName);
  }

  static load() {
    return Object.entries(localStorage);
  }

  static refresh() {
    tabelaContatos.innerHTML = null;
  }

  static clear() {
    localStorage.clear();
  }

  static set([name, tel]) {
    const stored = Util.toLowerCaseAll(Object.keys(localStorage));

    if (!stored.includes(name.toLowerCase())) {
        localStorage.setItem(name, String(tel));
        triggerAlert(`Número de ${name} salvo!`, "success");
        this.refresh();
        this.load();
      } else {
      triggerAlert(`Contato ${name} já existe !`, "warning");
      this.refresh();
      this.load();
    }

  }
}

export default localStorageHelper;