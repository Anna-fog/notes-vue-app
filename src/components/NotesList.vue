<template>
  <div
    class="notes-list"
    :class="{ sepiaBg: isDarkTheme }">

    <h5 class="notes-list__title">
      All notes
    </h5>

    <ul>
      <transition-group name="up">
        <li v-for="note in notesList"
          @click="showNote(note)"
          :key="note.id"
          class="notes-list__item"
          :class="{ active: currentNote.clickOnNote && currentNote.id === note.id }">

          {{ note.body.toString().slice(0, 20) }} {{ note.body.length > 20 ? '..' : null }}

          <button
            title="save changes"
            @click.stop="saveChanges"
            v-show="currentNote.noteIsChanged && currentNote.id === note.id"
            class="notes-list__save">
            <img :src="require('@/assets/img/add.svg')" alt="Save">
          </button>
        </li>
      </transition-group>
    </ul>
    <button
      v-if="notesList.length"
      @click="addNote"
      title="add new note"
      class="notes-list__btn">
      +
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: mapGetters(['notesList', 'currentNote', 'isDarkTheme']),

  methods: {
    ...mapMutations(['showNote', 'saveChanges', 'addNewNote', 'clearCurrentNote']),

    addNote() {
      if (!this.currentNote.noteIsChanged && this.currentNote.id !== '') {
        this.clearCurrentNote();
      } else {
        this.saveChanges();
        this.addNewNote();
      }
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/styles/style';

.notes-list {
  box-sizing: border-box;
  width: 25%;
  overflow: auto;
  height: 89vh;
  list-style-type: none;
  border: 1px solid $dark-space;
  border-right: none;
  background-color: $color-white;

  @media (max-width: 1180px) {
    width: 35%;
  }

  @media (max-width: $md) {
    width: 100%;
    height: 151px;
    overflow: auto;
    border-right: 1px solid $dark-space;
    border-bottom: none;
  }

  &__item {
    position: relative;
    border-bottom: 1px solid $dark-space;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
  }

  &__title {
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid;
    margin: 0;
    font-weight: 600;
    font-size: 16px;
  }

  &__save {
    position: absolute;
    right: 11px;;
    background-color: $galaxy-green;
    border: none;
    border-radius: 2px;
    padding: 3px 6px;
    cursor: pointer;

    img {
      transition: .4s all;

      &:hover {
        transform: scale(1.1);
      }

      @media (max-width: $md) {
        &:hover {
          transform: none;
        }
      }
    }
  }

  &__btn {
    padding: 10px;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: $galaxy-green;
    background-color: transparent;
    transition: .5s all;

    &:hover {
      transform: scale(1.3);
      text-shadow: rgba(126 172 172 / 50%) 0 0 2px;
    }
  }

  ul {
    padding-left: 0;
    margin: 0;
  }
}

.active {
  background-color: $galaxy-green;
  color: white;
  border: none;
}

body .sepiaBg {
  background-color: $nuance;
}

.up-enter-active,
.up-leave-active {
  transition: all 0.3s ease;
}

.up-enter-from,
.up-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.up-move {
  transition: transform .3s;
}
</style>