<script setup lang="ts">
import type { IEmployee } from "../models/IEmployee";

interface EmployeeProps {
  employee: IEmployee;
}

defineProps<EmployeeProps>();
</script>

<template>
  <article>
    <div class="img-container">
      <img :src="employee.avatar" :alt="employee.first_name" />
    </div>
    <h2>{{ employee.first_name }} {{ employee.last_name }}</h2>
    <a :href="`mailto:${employee.email}`">Kontakta mig</a>
  </article>
</template>

<style lang="scss" scoped>
@import "../assets/scss/__variables.scss";
article {
  padding: 10px;
  border-radius: 8px;
  height: 350px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  background-color: $light-text-color;

  //#59 box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  //#47 box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}
img {
  border-radius: 50%;
  height: 128px;
  width: 128px;
  object-fit: cover;
}
a {
  border-radius: 3px;
  padding: 3px 6px;
}
</style>
