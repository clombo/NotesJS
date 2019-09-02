# Notes App
***
Based on the tutorial from the udemy course ["The complete nodejs developer course V2"](https://www.udemy.com/the-complete-nodejs-developer-course-2/).

The project was adjusted a bit to do things differently and also added a few things.
For a very simple app this is overcomplicating it a lot, but was worth the practice:

* Changed to mimic "MVC like" feel.
* Added status as part of the notes being stored (default pending).
* Added function to update note.
* ID added as unique identifier so that title is updatable.
* Error handling added
* Added a few commands for running and debugging.

The app allows you to save, update, view, and delete notes stored in a JSON file. The
note object consists of a title, body and status.
***
#### Running App

NOTE: I assume you already have npm and nodejs installed and setup on your PC.

##### Clone repo and install dependencies

Clone the repo from GitHub site or use git bash utility.

```shell
```

Make sure to install the dependencies before running the app. You can do this by opening
cmd or bash in the folder where the code is located (specifically the package.json file) and
running the following command.

```shell
npm install
```

This will look at the package.json file and install the dependencies available in the file.

##### Commands

Some commands have optional and required options. There are 4 base commands:

* add
* remove
* update
* view

To find out how they work or how to use them use (replace <command> with one of the commands above):
```shell
node app.js <command> --help
```

###### add example:
```shell
node app.js add --title="Your status", --body="Note body", --status="pending"
```
###### remove example:
```shell
node app.js remove --id=1
```
###### update example
```shell
node app.js update --id=1 --title="new title" --body="new body" --status="complete"
```
###### view example
```shell
node app.js view
```
