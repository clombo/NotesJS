const controller = require('../controllers/NotesController.js');
const chalk = require('chalk');

var log = (altMessage,note) => {

  console.log(chalk.yellow(altMessage));
  template = `----\nID: ${note.id}\nTitle: ${note.title}\nBody: ${note.body}\nStatus: ${note.status}`;
  console.log(chalk.blue(template));

};

var logError = (altMessage,err) => {

  template = `${altMessage}: ${err}`;
  console.log(chalk.red(template));

};


module.exports.MainView = (command,id,data) => {

  //Add
  if (command === 'add'){

      controller.add(data.title,data.body,data.status,function(err,result){
          if (err){
            logError('ADD ERROR',err);
          }else{
            log('Note Added!',result);
          };
      });

  }
  //Remove
  else if (command === 'remove'){

      controller.remove(id,function(err,result){
          if (err){
            logError('REMOVE ERROR:',err);
          }else{
            log('Note Removed!',result);
          };
      });

  }
  //Update
  else if (command === 'update'){
      controller.update(id,data,function(err,result){
          if (err){
            logError('UPDATE ERROR',err);
          }else{
            log('Note Updated!',result);
          };
      });
  }
  //View
  else if (command === 'view'){

    notes = controller.view(id);
    notes.forEach((note) => log('Note:',note));

  }
  //Command not found
  else {
    logError('COMMAND ERROR','command not found!')
  };

};
