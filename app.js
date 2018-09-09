//Main app code will be here
const yargs = require('yargs');
const noteView = require('./views/NotesView.js');

//Yargs configuration

const argv = yargs
  .command('add','Adding a new note',{
    title: {
      describe: 'Title of your note.',
      demand: true,
      alias: 't'
    },
    body: {
      describe: 'Body of your note',
      demand: true,
      alias: 'b'
    },
    status: {
      describe: 'Status of note, choose from pending(default),complete, and busy',
      demand : false,
      alias : 's'
    }
  })
  .command('view', 'View all or specific note',{
    id: {
      describe: 'ID of sepcific note you wish to view',
      demand : false
    }
  })
  .command('remove','Remove a note',{
    id : {
      describe: 'ID of note',
      demand: true
    }
  })
  .command('update','Update title,body, or status of note',{
    id:{
      describe: 'ID of note',
      demand: true
    },
    body:{
      describe: 'Body of your note',
      demand: false,
      alias: 'b'
    },
    title:{
      describe: 'Title of your note.',
      demand: false,
      alias: 't'
    },
    status:{
      describe: 'Status of note, choose from pending(default),complete, and busy',
      demand : false,
      alias : 's'
    }
  })
  .help()
  .argv;
  
var command = argv._[0];


data = {
  title : argv.title,
  body : argv.body,
  status : argv.status
}

noteView.MainView(command,argv.id,data);
