<template>
    <div class="add-notes">
        <form @submit.prevent="addNewNote" class="add-notes__form">
            <textarea v-model="currentNote.body"
                @input="checkChanges" name="field"
                class="add-notes__field" :class="{ sepiaField: changeColorScheme }">
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
            class="add-notes__btn-clear" :class="{ sepiaBg: changeColorScheme }">&times;
        </button>
        <button v-show="currentNote.clickOnNote"
            @click.stop="deleteNote"
            class="add-notes__btn-delete" :class="{ sepiaBg: changeColorScheme }">
            <img title="delete note" src="../assets/delete.svg" alt="Delete">
        </button>
    </div>
</template>


<script>
    import { mapGetters, mapMutations } from "vuex";

    export default {
        computed: {
            ...mapGetters(['notesList', 'currentNote', 'changeColorScheme'])
        },

        methods: {
            ...mapMutations(['addNewNote', 'checkChanges', 'clearField', 'deleteNote']),
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
            font-size: 18px;
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

        &__btn-clear {
            position: absolute;
            top: 20px;
            right: 110px;
            height: 30px;
            width: 30px;
            background-color: #fff;
            font-size: 20px;
            color: #7EACAC;
            border: 1px solid #7EACAC;
            border-radius: 2px;
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
        }

        &__btn-delete {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 30px;
            bottom: 20px;
            right: 110px;
            background-color: #fff;
            border: 1px solid #7EACAC;
            border-radius: 2px;
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