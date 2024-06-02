<script setup lang="ts">
import { getEmployees } from "./services/employeeService";
import Employee from "./components/Employee.vue";
import EmployeeDisplay from "./components/EmployeeDisplay.vue";
import FooterComp from "./components/FooterComp.vue";
import HeaderComp from "./components/HeaderComp.vue";

import type { IEmployee } from "./models/IEmployee";
</script>

<template>
  <div>
    <HeaderComp></HeaderComp>
    <EmployeeDisplay></EmployeeDisplay>
    <FooterComp></FooterComp>
  </div>
</template>

<style scoped>
div {
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
</style>
