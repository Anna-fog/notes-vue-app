<template>
  <div class="archive">
    <svg @click="toggleColors"
         class="logo" width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.2734 17.5C10.2734 29.5 20.6917 35 20.6917 35C9.264 35 0 27.165 0 17.5C0 7.83502 9.264 0 20.6917 0C20.6917 0 10.2734 5.5 10.2734 17.5Z" fill="#9FC0C0"/>
    </svg>

    <h1 v-if="deletedNotes.length === 0" class="title"
        :class="{ sepiaColor: changeColorScheme }">
        Deleted notes will be here
    </h1>

    <ul v-else class="archive__list">
      <li class="archive__item" :class="{ sepiaBg: changeColorScheme }"
          v-for="(note, i) in deletedNotes" :key="i"
          @click="openDeletedNote(note)">

        <button @click="restoreNote(note)"
                class="add-notes__btn-delete add-notes__btn-delete_restore"
                :class="{ sepiaBg: changeColorScheme }">
          <img title="restore note" src="../assets/restore.svg" alt="Restore">
        </button>

        <div v-if="note.clickOnNote">
          {{ note.body.toString().slice(0, 20) }} {{ note.body.length > 20 ? '..' : null }}
        </div>
        <div v-else>{{ note.body }}</div>

        <button @click.stop="deleteNoteFromArchive(note)"
                class="add-notes__btn-delete add-notes__btn-delete_archive"
                :class="{ sepiaBg: changeColorScheme }">
          <img title="delete note" src="../assets/delete.svg" alt="Delete">
        </button>

      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from "vuex";

  export default {
    computed: mapGetters(['deletedNotes', 'changeColorScheme']),
    methods: {
      ...mapMutations(['deleteNoteFromArchive', 'openDeletedNote', 'toggleColors']),
      ...mapActions(['restoreNote'])
    }
  }
</script>

<style lang="scss">
  .title {
    font-size: 24px;
    margin-top: 45px;
  }

  .archive  {

    &__list {
      margin-top: 30px;
      list-style-type: none;
      padding: 0;
      border: 1px solid #404A4D;
      border-bottom: none;
    }

    &__item {
      cursor: pointer;
      border-bottom: 1px solid #404A4D;
      padding: 15px 90px;
      position: relative;
      line-height: 20px;
      background-color: #fff;
      transition: .4s all;
      &:hover {
        background-color: #BAD7D7;
      }

      @media (max-width: 867px) {
        padding: 15px 30px;
      }
    }
  }

</style>
