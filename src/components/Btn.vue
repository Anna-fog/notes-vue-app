<template>
    <button
        v-show="currentNote.body"
        class="btn"
        :class="{ sepiaBg: changeColorScheme }"
    >
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
@import 'src/assets/styles/style';

    .btn {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 100px;
        height: 30px;
        width: 30px;
        border: 1px solid $galaxy-green;
        border-radius: 2px;
        font-size: 20px;
        background-color: $color-white;
        color: $galaxy-green;
        cursor: pointer;
        transition: .4s box-shadow;

        &:hover {
            box-shadow: 1px 1px 5px rgba(126 172 172 / 70%);
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