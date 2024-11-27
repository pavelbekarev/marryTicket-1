<script setup>

import DayProgramComponent from './components/DayProgramComponent.vue';
import DearGuestsComponent from './components/DearGuestsComponent.vue';
import DressCodeComponent from './components/DressCodeComponent.vue';
import MainComponent from './components/MainComponent.vue';
import WeddingPlaceComponent from './components/WeddingPlaceComponent.vue';
</script>

<template>
  <main>
    <section class="startSection">
      <div class="container">
        <MainComponent />
      </div>
    </section>
    <section class="guestsSection">
      <div class="container">
        <DearGuestsComponent />
      </div>
    </section>
    <section class="weddingPlaceSection">
      <div class="container">
        <WeddingPlaceComponent />
      </div>
    </section>
    <section class="dayProgramSection">
      <div class="container">
        <DayProgramComponent />
      </div>
    </section>
    <section class="dressCodeSection">
      <div class="container">
        <DressCodeComponent />
      </div>
    </section>
  </main>
</template>

<style>

</style>
