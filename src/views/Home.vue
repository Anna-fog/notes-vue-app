<template>
  <div class="home">
      <svg
          @click="toggleColors"
          class="logo" width="21" height="35" viewBox="0 0 21 35" fill="none"
           xmlns="http://www.w3.org/2000/svg">
          <path d="M10.2734 17.5C10.2734 29.5 20.6917 35 20.6917 35C9.264 35 0 27.165 0 17.5C0 7.83502 9.264 0 20.6917 0C20.6917 0 10.2734 5.5 10.2734 17.5Z" fill="#9FC0C0"/>
      </svg>

      <div class="notes-wrapper">
          <NotesList></NotesList>
          <AddNotes></AddNotes>
      </div>
  </div>
</template>


<script>
import AddNotes from "../components/AddNotes";
import NotesList from "../components/NotesList";
import { mapMutations } from 'vuex';

export default {
    name: 'Home',
    methods: {
        ...mapMutations(['toggleColors'])
    },
    components: {
      AddNotes,
      NotesList
  },
}
</script>

<style lang="scss">
@import 'src/assets/styles/style';

    .notes-wrapper {
        display: flex;
        margin-top: 30px;

        @media (max-width: 867px) {
            flex-direction: column;
        }
    }

    .logo {
        position: absolute;
        top: 24px;
        cursor: pointer;
        path {
            transition: .4s all;
        }
        &:hover {
            path {
                fill: $lily-scent-green;
            }
        }
        @media (max-width: 867px) {
            &:hover {
                path {
                    fill: $frosty-glade;
                }
            }
        }
    }

</style>
