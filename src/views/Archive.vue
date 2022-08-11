<template>
  <div class="archive">
    <svg
      @click="toggleColors"
      class="logo" width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.2734 17.5C10.2734 29.5 20.6917 35 20.6917 35C9.264 35 0 27.165 0 17.5C0 7.83502 9.264 0 20.6917 0C20.6917 0 10.2734 5.5 10.2734 17.5Z" fill="#9FC0C0"/>
    </svg>

    <transition name="fade" mode="out-in">
      <h1
        v-if="deletedNotes.length === 0"
        class="title"
        :class="{ sepiaColor: isDarkTheme }">
        Deleted notes will be here
      </h1>

      <ul v-else class="archive__list">
        <transition-group name="up">
          <li
            class="archive__item"
            :class="{ sepiaBg: isDarkTheme }"
            v-for="note in deletedNotes"
            :key="note.id"
            @click="openDeletedNote(note)">

            <Btn
              v-show="note"
              title="restore note"
              class="btn_restore"
              @click.stop="restoreNote(note)">
              <img :src="require('@/assets/img/restore.svg')" alt="Restore">
            </Btn>

            <transition name="fade" mode="out-in">
              <div v-if="note.clickOnNote">
                {{ trimmedText(note) }}
              </div>
              <div v-else>
                {{ note.body }}
              </div>
            </transition>

            <Btn
              v-show="note"
              title="delete note"
              class="btn_archive"
              @click.stop="deleteNoteFromArchive(note)">
              <img :src="require('@/assets/img/delete.svg')" alt="Delete">
            </Btn>
          </li>
        </transition-group>
      </ul>
    </transition>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from "vuex";
  import Btn from "../components/Btn";

export default {
  computed: {
    ...mapGetters(['deletedNotes', 'isDarkTheme']),
  },
  methods: {
    ...mapMutations(['deleteNoteFromArchive', 'openDeletedNote', 'toggleColors']),
    ...mapActions(['restoreNote']),
    trimmedText(note) {
      const dots = note.body.length > 20 ? '..' : '';
      return note.body.toString().slice(0, 20) + dots;
    }
  },
  components: {
    Btn
  }
}
</script>

<style lang="scss">
@import 'src/assets/styles/style';

.title {
  font-size: 24px;
  margin-top: 45px;
}

.archive  {
  &__list {
    margin-top: 30px;
    list-style-type: none;
    padding: 0;
    border: 1px solid $dark-space;
    border-bottom: none;
  }

  &__item {
    box-sizing: border-box;
    cursor: pointer;
    overflow-wrap: break-word;
    border-bottom: 1px solid $dark-space;
    padding: 15px 90px;
    position: relative;
    line-height: 20px;
    background-color: $color-white;
    transition: .4s all;

    &:hover {
      color: $water-carrier;
    }

    @media (max-width: $md) {
      padding: 20px 45px;
      &:hover {
        color: $dark-space;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
