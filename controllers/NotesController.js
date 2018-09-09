//how to include NotesModel.js??
const notes = require('../models/NotesModel.js');

//predefined statuses
var AcceptedStat = ['pending','complete','busy'];

//Add controller
var addController = (title,body,status,next) => {

  status = AcceptedStat.includes(status) !== true ? 'pending' : status;
  addNote = notes.addNote(title,body,status);

  if(addNote) {
    next(null,addNote);
  }else{
    next(new Error("Duplcate found!"));
  }

};
//Remove controller
var removeController = (id,next) => {

  remNote = notes.removeNote(id);

  if (remNote){
    next(null,remNote[0]);
  }else{
    next(new Error("Note not found!"));
  };

};
//View controller
var viewController = (id) => {

  viewNote = notes.viewNote(id);
  return viewNote;

};
//Update controller
var updateController = (id,data,next) => {

  if (data){

    upNote = notes.updateNote(id,data);
    if(upNote){
      next(null,upNote);
    }else{
      next(new Error('Note not found!'));
    };
  }else{
    next(new Error('No data give!'));
  };
};

module.exports = {
    add    : addController,
    remove : removeController,
    update : updateController,
    view   : viewController
};
