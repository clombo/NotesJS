const fs = require('fs');


//functions used internally by model

//Random number generator low and high, adjust if you wish to change id's generated
var RandConf = {
  low : 1,
  high : 100
}



var FetchNotes = () => {

  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }catch(e){
    return [];
  };

};

var SaveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var RandomID = (low,high) => {
  return Math.floor(Math.random() * (high - low ) + low);
};

var DupCheck = (title,notes) =>{
  var dup = notes.filter((note) => note.title === title);
  if (dup.length === 0){
    return true;
  }else{
    return false;
  }
}

//functions used externally and exported for use


//Adding note
var addNote = (title,body,status) => {

    var notes = FetchNotes();

    //generate random id -> note that this will loop continuesly if you reach the max config value
    //defined in RandConf.
    var id = 1;
    var check = notes.filter((note) => note.id === id);

    while(check.length > 0){

        id = RandomID(RandConf.low,RandConf.high);
        var check = notes.filter((note) => note.id === id);
    };

    var newNote = {
      id,
      title,
      body,
      status
    };

    var checkDup = DupCheck(title,notes);

    if (checkDup){
      notes.push(newNote);
      SaveNotes(notes);
      return newNote;
    }else{
      return undefined;
    };
};

//Removing note
var removeNote = (id) => {

  var notes = FetchNotes();

  //Get note to be removed data for returning perposes;
  var RemNote = notes.filter((note) => note.id === id);

  if (RemNote.length > 0){
    var Removed = notes.filter((note) => note.id !== id);
    SaveNotes(Removed);
    return RemNote;
  }else{
    return undefined;
  };

};
//Update note
var updateNote = (id,data) => {

  var notes = FetchNotes();
  var note = notes.filter((note) => note.id === id);

  var UpdateNote = note[0];
  var checkDup = DupCheck(data.title,notes);

  if (UpdateNote && checkDup){

    var NewNotes = notes.filter((note) => note.id !== id);

    if (data.title){
      UpdateNote.title = data.title;
    };

    if (data.body){
      UpdateNote.body = data.body;
    };

    if (data.status){
      UpdateNote.status = data.status;
    };

      NewNotes.push(UpdateNote);
      SaveNotes(NewNotes);
      return UpdateNote;

  }else{
    return undefined;
  };
};

//View note or all notes
var viewNote = (id) => {

  notes = FetchNotes();

 if (id) {
   var viewNote = notes.filter((note) => note.id === id);
   return viewNote;
 }else{
   return notes;
 };

};

module.exports = {
    addNote,
    removeNote,
    updateNote,
    viewNote
};
