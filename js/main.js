import contact from './contacts.js';
import instatiateForm from './form.js';
import instatiateTable from './table.js';
import fs from './fileSystem.js';

(function() {
  contact.index();
  instatiateForm.atachListeners();
  instatiateTable.attachListeners();
  fs.initialize();
})();




