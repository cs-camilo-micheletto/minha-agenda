import contact from './controller/contactController.js';
import instatiateForm from './view/form.js';
import instatiateTable from './view/table.js';
import fs from './utils/fileSystem.js';

(function() {
  contact.index();
  instatiateForm.atachListeners();
  instatiateTable.attachListeners();
  fs.initialize();
})();




