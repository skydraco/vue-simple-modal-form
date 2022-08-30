<template>
    <div :class="['modal', { modal__open : enabled }]" @click="hideModal">
        <div class="modal__container uk-container uk-container-small" aria-modal>
            <div :class="['modal__content', {'modal__content_sm' : windowSmall}]">
                <div class="modal__close" @click="hideModal($event, true)">
                    <SvgClose viewBox="0 0 20 20" />
                </div>
               
                <slot>
                    <!-- Here is the modal content -->
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
import SvgClose from '!vue-svg-loader!@/assets/svg/close.svg';
import '@/assets/sass/style.sass';

export default {
    components: {
        SvgClose
    },
    props: {
        windowSmall: null
    },
    computed: {
        enabled() {
            return this.$store.state.modal.name;
        },
    },
    watch: {
        enabled(value) {
            if (document.body && value) {
                document.body.classList.add('modal-open');
            }
            if (document.body && !value) {
                document.body.classList.remove('modal-open');
            }
        }
    },
    methods: {
        hideModal(prop, force = false) {
            if (!prop.target.closest('[aria-modal]') || force) {
                this.$store.commit('modal/CALL_MODAL', false);
            }
        }
    }
}
</script>