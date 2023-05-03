<template>

  <div class="about">
    <h1>Insert the link here:</h1>
    <div class="flex-auto">
      <label>URL</label>
      <InputText v-model="inputUrl" class="p-inputmask" @change="getTitle(url)" slotChar=""
                 mask="https://?"
                 placeholder="https://"
                 />
    </div>
    <i v-show="loader" class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    <h2 v-show="!loader">{{pageTitle}}</h2>
  </div>
</template>
<script setup>
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import { ref, computed } from 'vue'
import axios from "axios";

const getTitle = async () => {
  loader.value = true
  return await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`${url.value}`)}`)
      .then(response => response.text())
            .then((html) => {
              const doc = new DOMParser().parseFromString(html, "text/html");
              const title = doc.querySelectorAll('title')[0];
              pageTitle.value = title.innerText
              loader.value = false
            }).catch(error => loader.value = false)
      ;

};
const loader = ref(false)
const inputUrl = ref(null)
const pageTitle = ref('')

const url = computed(() => {
  if (inputUrl.value.slice(0,8) === 'https://') return inputUrl.value
  else return `https://${inputUrl.value}`
})
</script>
<style scoped>
.flex-auto {
  display: flex;
  align-items: center;
  gap: 25px
}

</style>
