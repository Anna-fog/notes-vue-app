<template>
    <ul class="notes-list" :class="{ sepiaBg: changeColorScheme }">
        <h5 class="notes-list__title">All notes</h5>
        <li v-for="(note, i) in notesList"
            @click="showNote(note)"
            :key="i" class="notes-list__item"
            :class="{ active: currentNote.clickOnNote && currentNote.id === note.id }">

            {{ note.body.toString().slice(0, 20) }} {{ note.body.length > 20 ? '..' : null }}

            <button title="save changes" @click.stop="saveChanges"
                    v-show="currentNote.noteIsChanged && currentNote.id === note.id"
                    class="notes-list__save">
                <img src="../assets/add.svg" alt="Save">
            </button>
        </li>
    </ul>
</template>


<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        computed: mapGetters(['notesList', 'currentNote', 'changeColorScheme']),
        methods: {
            ...mapMutations(['showNote', 'saveChanges']),
        }
    }
</script>


<style lang="scss">
    .notes-list {
        box-sizing: border-box;
        width: 25%;
        overflow: auto;
        height: 89vh;
        list-style-type: none;
        padding-left: 0;
        margin: 0;
        border: 1px solid #404A4D;
        border-right: none;
        background-color: #fff;

        @media (max-width: 1180px) {
            width: 35%;
        }

        @media (max-width: 867px) {
            width: 100%;
            height: 200px;
            overflow: auto;
            border-right: 1px solid #404A4D;
            border-bottom: none;
        }

        &__item {
            position: relative;
            border-bottom: 1px solid #404A4D;
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
            background-color: #7EACAC;
            border: none;
            border-radius: 2px;
            padding: 3px 6px;
            cursor: pointer;
            img {
                transition: .4s all;
                &:hover {
                    transform: scale(1.1);
                }

                @media (max-width: 867px) {
                    &:hover {
                        transform: none;
                    }
                }
            }
        }
    }

    .active {
        background-color: #7EACAC;
        color: white;
        border: none;
    }

   body .sepiaBg {
        background-color: #E2DFD5;

    }

</style>