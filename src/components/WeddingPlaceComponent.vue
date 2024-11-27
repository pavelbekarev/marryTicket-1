<script setup>

import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const newlyweds = computed(() => store.state.newlywedsModule.all);


</script>


<template>
    <div class="weddingPlace__content" v-for="item in newlyweds">
        <img class="weddingDecor__image" src="../assets/img/weddingDecor.svg" alt="Свадебный декор">
        <h1 class="weddingPlace__h1">Место проведения</h1>
        <p class="weddingPlace__text">Торжественная церемония и последующее веселье состоятся по адресу: </p>
        <p class="weddingPlace__text">{{ item.address }}</p>
    </div>
</template>