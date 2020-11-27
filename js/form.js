import contact from './contacts.js';

class Form {
  constructor(form) {
    this.form = form;
  }

  atachListeners() {
    this.form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const elements = ev.target.elements;
      const newContact = Array.from(elements)
        .filter(el => el.nodeName === "INPUT")
        .map(el => el.value.trim());
      contact.save(newContact);
    });
  }
}

const instantiateForm = new Form(form);

export default instantiateForm;


