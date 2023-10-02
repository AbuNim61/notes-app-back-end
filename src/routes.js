/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/* eslint-disable key-spacing */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler, } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler : addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },

];

module.exports = routes;
