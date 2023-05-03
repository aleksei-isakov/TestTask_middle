<template>
  <div class="about">
<h1>Choose the date:</h1>
  <Calendar id="calendar-timeonly" v-model="time" timeOnly show-icon showButtonBar showTime/>

  </div>
</template>

<script setup>
import Calendar from 'primevue/calendar'

import { ref } from 'vue'

const time = ref()
</script>

<style scoped>
.icon-container {
  height: 45px;
  width: 45px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
}
.p-inputtext, .p-component {
  border: none;
}
</style>


