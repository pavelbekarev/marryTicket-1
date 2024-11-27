<script setup>

import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
const newlyweds = computed(() => store.state.newlywedsModule.all);
</script>


<template>
    <div class="dayProgram__content" v-for="item in newlyweds">
        <h1 class="dayProgram__h1">Программа дня</h1>
        <div class="programDetail">
            <p class="detail__p detail__time">{{ item.guestsArriveAction }}</p>
            <p class="detail__p detail__action">сбор гостей</p>
        </div>
        <img src="../assets/img/weddingDecor.svg" alt="Свадебный декор">
        <div class="programDetail">
            <p class="detail__p detail__time">{{ item.weddingCeremonyStart }}</p>
            <p class="detail__p detail__action">свадебная церемония</p>
        </div>
        <img src="../assets/img/weddingDecor.svg" alt="Свадебный декор">
        <div class="programDetail">
            <p class="detail__p detail__time">{{ item.banquetStart }}</p>
            <p class="detail__p detail__action">начало банкета</p>
        </div>
    </div>

</template>