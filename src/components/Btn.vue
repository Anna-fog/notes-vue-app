<template>
    <button v-show="currentNote.body"
            class="btn" :class="{ sepiaBg: changeColorScheme }">
            <slot></slot>
    </button>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        computed: {
            ...mapGetters(['currentNote', 'changeColorScheme'])
        },
    }
</script>

<style lang="scss">

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

</style>