<script setup>
    import { ref, computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();
    const newlyweds = computed(() => store.state.newlywedsModule.all);

    store.dispatch('newlywedsModule/getNewlywedsInfo')
</script>

<template>
    <div class="main__content" v-for="item in newlyweds">
        <img class="decor-image__top-left" src="../assets/img/image1.svg" alt="">
        <span class="name">{{ item.wifeName }}</span>
        <span class="name">&</span>
        <span class="name">{{ item.husbandName }}</span>

        <span class="marryTicket">приглашение на свадьбу</span>
        <div class="marry-date">
            <span class="dateDetail month">{{ item.marryMonth }}</span>
            <span class="dateDetail day">{{ item.marryDay }}</span>
            <span class="dateDetail year">{{ item.marryYear }}</span>
        </div>
        <img class="decor-image__bottom-right" src="../assets/img/image2.svg" alt="">
    </div>

</template>