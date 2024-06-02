<script setup lang="ts">
import { defineEmits, ref } from "vue";

defineEmits(["updatePage"]);
const currentPage = ref(1);

const updatePage = (page: number) => {
  currentPage.value = page;
  // @ts-ignore
  $emit("updatePage", page);
};
</script>

<template>
  <div class="pagination">
    <button>Prev</button>
    <span> {{ currentPage }}</span>
    <button>Next</button>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

button {
  padding: 5px 10px;
}
</style>
