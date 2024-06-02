<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { IEmployee } from "../models/IEmployee";
import { getEmployees } from "../services/employeeService";
import Employee from "./Employee.vue";

const employees = ref<IEmployee[]>([]);
const currentPage = ref(1);
const totalPages = ref(1);

const fetchEmployees = async (page: number) => {
  try {
    const response = await getEmployees(page);
    employees.value = response.data;
    totalPages.value = response.totalPages;
    console.log(response);
  } catch (error) {
    console.error("Error fetching employees:", error);
    employees.value = [];
  }
};

onMounted(() => {
  fetchEmployees(currentPage.value);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchEmployees(currentPage.value);
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchEmployees(currentPage.value);
  }
};
</script>

<template>
  <div>
    <section>
      <h1>Våra medarbetare</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        aliquam reiciendis minus atque architecto in error vero? Modi, voluptas
        architecto, amet dolorum corporis neque, cumque veniam iure minus rerum
        quia. Repellat totam assumenda sunt, placeat dicta asperiores doloribus,
        repellendus debitis numquam, iusto quo explicabo. Animi rerum quidem
        illum aperiam corrupti provident quia nobis iusto dolor. Officiis eos
        enim sed similique.
      </p>
    </section>

    <section class="employees">
      <Employee
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
      />
    </section>

    <section class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/__variables.scss";

section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
h1 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 40px auto;
  color: $dark-text-color;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  word-wrap: break-word;
}

p {
  margin: 30px auto;
  width: 50%;
  font-size: 1.2rem;
}

.employees {
  width: 75%;
  max-width: 1100px;
}

.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  color: $dark-text-color;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    background-color: $primary-color;
    color: $light-text-color;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  }

  span {
    margin: 0 10px;
    font-size: 1.2rem;
  }
}
</style>
