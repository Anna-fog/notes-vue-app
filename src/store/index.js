import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({

  state: {
    notesList: [],
    deletedNotes: [],
    currentNote: {
      body: '',
      id: '',
      noteIsChanged: false,
      clickOnNote: false
    },
    isDarkTheme: false,
    fontSize: 18
  },

  plugins: [createPersistedState()],

  getters: {
    notesList(state) {
      return state.notesList;
    },
    currentNote(state) {
      return state.currentNote;
    },
    clickOnNote(state) {
      return state.currentNote.clickOnNote;
    },
    deletedNotes(state) {
      return state.deletedNotes;
    },
    isDarkTheme(state) {
      return state.isDarkTheme;
    },
    fontSize(state) {
      return state.fontSize;
    }

  },

  mutations: {
    addNewNote(state) {
      if (state.currentNote.body) {
        const newNote = {
          ...state.currentNote,
          id: Date.now(),
        }
        state.notesList.unshift(newNote);
        this.commit('clearCurrentNote');
      }
    },

    showNote(state, note) {
      state.currentNote = {body: note.body, id: note.id, noteIsChanged: false, clickOnNote: true}
    },

    checkChanges(state) {
      const isChanged = state.notesList.find(note => note.id === state.currentNote.id);
      if (isChanged) {
        state.currentNote.noteIsChanged = true;
      }
    },

    saveChanges(state) {
      if (state.currentNote.noteIsChanged && ![...state.notesList].includes(state.currentNote.id) && state.currentNote.body) {
        state.notesList.find(note => {
          if (note.id === state.currentNote.id) {
            note.body = state.currentNote.body;
          }
        });
        this.commit('clearCurrentNote');
      }
    },

    clearField(state) {
      state.currentNote.body = '';
      state.currentNote.noteIsChanged = true;
    },

    deleteNote(state) {
      const deletedTemp = state.currentNote;
      state.deletedNotes.unshift(deletedTemp);
      state.notesList = state.notesList.filter(note => note.id !== state.currentNote.id);
      this.commit('clearCurrentNote');
    },

    clearCurrentNote(state) {
      state.currentNote = {id: '', body: '', noteIsChanged: false, clickOnNote: false};
    },

    deleteNoteFromArchive(state, noteToDelete) {
      state.deletedNotes = state.deletedNotes.filter(note => note.id !== noteToDelete.id);
    },

    openDeletedNote(state, note) {
      if (note.body.length > 20) {
        note.clickOnNote = !note.clickOnNote;
      }
    },

    toggleColors(state) {
      state.isDarkTheme = !state.isDarkTheme;
    },

    enlargeFontSize(state) {
      if (state.fontSize < 20 ) {
        state.fontSize +=  1
      }
    },

    decreaseFontSize(state) {
      if (state.fontSize > 14 ) {
        state.fontSize -=  1
      }
    }
  },

  actions: {
    restoreNote({ commit, state }, noteToDelete) {
      state.notesList.unshift(noteToDelete);
      commit('deleteNoteFromArchive', noteToDelete);
    }
  }
})
