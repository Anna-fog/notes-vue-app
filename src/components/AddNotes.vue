<template>
    <div class="add-notes">
        <form
            @submit.prevent="addNewNote"
            class="add-notes__form"
        >
            <textarea
                @keyup.enter.shift="addNewNote"
                v-model.trim="currentNote.body"
                @input="checkChanges" name="field"
                class="add-notes__field" :class="{ sepiaField: changeColorScheme }"
                :style="{ fontSize: fontSize + 'px' }">
            </textarea>
            <button
                class="add-notes__button" type="submit"
                :class="{ sepiaBtnBorders: changeColorScheme }"
            >
              {{ currentNote.noteIsChanged && currentNote.body ? 'Make it new note' : 'Add note' }}
            </button>
        </form>

        <Btn
            title="clear field"
            class="btn_clear"
            @click.stop="clearField">
          &times;
        </Btn>

        <Btn
            title="enlarge font size"
            class="btn_enlarge"
            @click.stop="enlargeFontSize"
        >
          +
        </Btn>

        <Btn
            title="decrease font size"
            class="btn_decrease"
            @click.stop="decreaseFontSize"
        >
          -
        </Btn>

        <Btn
            v-show="currentNote.clickOnNote && currentNote.body"
            title="delete note"
            class="btn_delete"
            @click.stop="deleteNote"
        >
            <img title="delete note" :src="require('@/assets/img/delete.svg')" alt="Delete">
        </Btn>
    </div>
</template>


<script>
    import { mapGetters, mapMutations } from "vuex";
    import Btn from "./Btn.vue";

    export default {
        computed: {
            ...mapGetters(['notesList', 'currentNote', 'changeColorScheme', 'fontSize'])
        },

        methods: {
            ...mapMutations(['addNewNote', 'checkChanges', 'clearField', 'deleteNote', 'enlargeFontSize', 'decreaseFontSize']),
        },
        components: {
            Btn
        }
    }
</script>


<style lang="scss">
@import 'src/assets/styles/style';

    button {
        &:focus {
            outline: none;
        }
    }

    .add-notes {
        width: 100%;
        position: relative;

        &__form {
            width: 100%;
            display: flex;
        }

        &__field {
            width: calc(100% - 90px);
            height: 89vh;
            box-sizing: border-box;
            padding: 6px 49px 45px 20px;
            border-radius: 0;
            border-color: $dark-space;
            border-right: none;
            line-height: 38px;
            font-family: 'Open Sans', sans-serif;
            resize: none;
            color: $dark-space;

            background: linear-gradient(to bottom, $frosty-glade 1px, $color-white 1px, $color-white);
            background-size: 100% 38px;
            background-attachment: local;
            background-origin: border-box;

            &:focus {
                outline: none;
            }

            @media (max-width: 867px) {
                width: calc(100% - 65px);
                padding: 6px 30px 30px 15px;
                height: calc(100vh - 248px);
            }
        }

        &__button {
            cursor: pointer;
            width: 90px;
            background-color: $galaxy-green;
            border: none;
            font-size: 16px;
            color: white;
            transition: .4s all;
            &:hover {
                background-color: $frosty-glade;
            }

            @media (max-width: 867px) {
                width: 65px;
                &:hover {
                    background-color: $galaxy-green;
                }
            }
        }
    }

   .sepiaField {
        background: linear-gradient(to bottom, $frosty-glade 1px, $nuance 1px, $nuance);
        background-size: 100% 38px;
        background-attachment: local;
        background-origin: border-box;
    }

   .sepiaBtnBorders {
      border-top: 1px solid $bauhaus;
      border-top: 1px solid $bauhaus;
   }

    textarea::-webkit-scrollbar {
        width: 10px;
    }
    textarea::-webkit-scrollbar-track {
        background-color: $greenland-ice;
    }
    textarea::-webkit-scrollbar-thumb {
        background: $bali-bliss;
    }

</style>