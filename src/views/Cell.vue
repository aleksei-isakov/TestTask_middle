<template>
    <div class="card">
      <h1>Action list:</h1>
      <DataTable :value="data" tableStyle="min-width: 30rem" showGridlines>
        <Column field="time" header="Время"></Column>
        <Column field="action" header="Действие"></Column>
      </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';

const rawData = '[13:36:53] Расчетное время: 9 мин[13:36:58] Открыть клапан откачки К1[13:36:58] Включить вакуумный насос[13:36:58] Закрыть клапан К5[13:36:58] Закрыть клапан дистилляции К2[13:36:58] Ожидание: 8 с[13:37:06] Заливка 2.2мл. в испаритель[13:37:06] Заданно 26.50602409638554 шагов[13:37:09] Заливка перекиси завершена[13:37:09] Открыть клапан дистилляции К2[13:42:09] Включить нагрев испарителя[13:42:09] Закрыть клапан дистилляции К2[13:42:09] конечное давление1.0960040758227925 торр[13:42:09] Выпаривание через К2[13:42:09] Выпаривание длилось5 мин[13:42:09] Откачка до 1 торр[13:42:15] Закрыть клапан откачки К1[13:43:09] Открыть клапан откачки К1[13:43:14] Аппаратное смещение 0 денсит. = -0.313683180809021[13:43:14] Закрыть клапан дистилляции К2'
const array = ref([])
const data = ref([])

function dataToArray() {
  let j = 0
  for(let i = 0; rawData.length > i; i++) {
    if(rawData[i] === '[') {
      array.value.push(rawData.slice(j, i))
      j = i
    }
  }
}

function dataToObject() {
  let obj = {}
  let j = 0
  for(let i = 0; array.value.length > i; i++) {
    let worker = array.value[i]
    for(let k = 0; worker.length > k; k++) {
      if(worker[k] === ']') {
        obj.time = worker.slice(j, k+1)
        obj.action = worker.slice(k+2)
        data.value.push(obj)
        obj = {}
      }
    }
  }

}
onMounted(() => {
  dataToArray()
  dataToObject()
})
</script>

<style scoped>
.card {
  padding: 50px;
}
</style>