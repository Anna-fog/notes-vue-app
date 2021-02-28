<template>
    <div class="add-notes">
        <form @submit.prevent="addNewNote" class="add-notes__form">
            <textarea @keyup.enter.shift="addNewNote" v-model.trim="currentNote.body"
                @input="checkChanges" name="field"
                class="add-notes__field" :class="{ sepiaField: changeColorScheme }"
                :style="{ fontSize: fontSize + 'px' }">
            </textarea>
            <button v-if="!currentNote.noteIsChanged"
                    class="add-notes__button" type="submit"
                    :class="{ sepiaBtnBorders: changeColorScheme }">
                    Add note
            </button>
            <button v-else class="add-notes__button"
                    :class="{ sepiaBtnBorders: changeColorScheme }"
                    type="submit">
                Make it new note
            </button>
        </form>

        <Btn title="clear field" class="btn_clear" @click.stop="clearField">&times;</Btn>

        <Btn title="enlarge font size" class="btn_enlarge" @click.stop="enlargeFontSize">+</Btn>

        <Btn title="decrease font size" class="btn_decrease" @click.stop="decreaseFontSize">-</Btn>

        <Btn v-show="currentNote.clickOnNote && currentNote.body" title="delete note" class="btn_delete" @click.stop="deleteNote">
            <img title="delete note" src="../assets/delete.svg" alt="Delete">
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
    button {
        &:focus {
            outline: none;
        }
    }

    .add-notes {
        width: 100%;
        position: relative;

        @media (max-width: 867px) {
            height: 63vh;
        }

        &__form {
            width: 100%;
            display: flex;
        }

        &__field {
            width: calc(100% - 90px);
            min-height: 89vh;
            box-sizing: border-box;
            padding: 6px 45px 45px 20px;
            border-radius: 0;
            border-color: #404A4D;
            border-right: none;
            line-height: 38px;
            font-family: 'Open Sans', sans-serif;
            resize: none;
            color: #404A4D;

            background: linear-gradient( to bottom, #9FC0C0 1px, #fff 1px, #fff);
            background-size: 100% 38px;
            background-attachment: local;
            background-origin: border-box;

            &:focus {
                outline: none;
            }

            @media (max-width: 867px) {
                width: calc(100% - 65px);
                padding: 6px 30px 30px 15px;
            }
        }

        &__button {
            cursor: pointer;
            width: 90px;
            background-color: #7EACAC;
            border: none;
            font-size: 16px;
            color: white;
            transition: .4s all;
            &:hover {
                background-color: #9FC0C0;
            }

            @media (max-width: 867px) {
                width: 65px;
                &:hover {
                    background-color: #7EACAC;
                }
            }
        }
    }

   .sepiaField {
        background: linear-gradient(to bottom, #9FC0C0 1px, #E2DFD5 1px, #E2DFD5);
        background-size: 100% 38px;
        background-attachment: local;
        background-origin: border-box;
    }

    .sepiaBtnBorders {
        border-top: 1px solid #404040;
        border-bottom: 1px solid #404040;
    }

    textarea::-webkit-scrollbar {
        width: 10px;
    }
    textarea::-webkit-scrollbar-track {
        background-color: #BAD7D7;
    }
    textarea::-webkit-scrollbar-thumb {
        background: #5E9F9F;
    }

</style>