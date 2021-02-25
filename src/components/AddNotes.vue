<template>
    <div class="add-notes">
        <form @submit.prevent="addNewNote" class="add-notes__form">
            <textarea @keyup.enter.shift="addNewNote" v-model.trim="currentNote.body"
                @input="checkChanges" name="field"
                class="add-notes__field" :class="{ sepiaField: changeColorScheme }"
                :style="{ fontSize: fontSize + 'px' }"
            >
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

        <button title="clear field"
            @click.stop="clearField" v-show="currentNote.body"
            class="btn btn_clear" :class="{ sepiaBg: changeColorScheme }">&times;
        </button>
        <button title="enlarge font size"
                @click.stop="enlargeFontSize" v-show="currentNote.body"
                class="btn btn_enlarge" :class="{ sepiaBg: changeColorScheme }">+
        </button>
        <button title="decrease font size"
                @click.stop="decreaseFontSize" v-show="currentNote.body"
                class="btn btn_decrease" :class="{ sepiaBg: changeColorScheme }">-
        </button>
        <button v-show="currentNote.clickOnNote"
            @click.stop="deleteNote"
            class="btn btn_delete" :class="{ sepiaBg: changeColorScheme }">
            <img title="delete note" src="../assets/delete.svg" alt="Delete">
        </button>
    </div>
</template>


<script>
    import { mapGetters, mapMutations } from "vuex";

    export default {
        computed: {
            ...mapGetters(['notesList', 'currentNote', 'changeColorScheme', 'fontSize'])
        },

        methods: {
            ...mapMutations(['addNewNote', 'checkChanges', 'clearField', 'deleteNote', 'enlargeFontSize', 'decreaseFontSize']),
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

    .btn {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 110px;
        height: 30px;
        width: 30px;
        border: 1px solid #7EACAC;
        border-radius: 2px;
        font-size: 20px;
        background-color: #fff;
        color: #7EACAC;
        cursor: pointer;
        transition: .4s box-shadow;

        &:hover {
            box-shadow: 1px 1px 5px rgb(126 172 172 / 50%);
        }

        @media (max-width: 867px) {
            right: 80px;
            &:hover {
                box-shadow: none;
            }
        }

        &_clear {
            top: 20px;
        }

        &_delete {
            bottom: 20px;
        }

        &_enlarge {
            top: 60px;
        }
        &_decrease {
            top: 100px;
            padding-bottom: 5px;
        }

        &_archive {
            top: 9px;
            right: 15px;
            bottom: 0;
            @media (max-width: 867px) {
                right: 15px !important;
            }
        }

        &_restore {
            top: 9px;
            left: 15px;
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