<script setup lang="ts">
import { ref } from "vue";

const visibleMenu = ref(false);
const toggleMenu = () => {
  visibleMenu.value = !visibleMenu.value;
};
</script>
<template>
  <header>
    <div class="flex-container">
      <div class="logo">
        <img src="../assets/vendre_logo.webp" alt="Vendre" />
      </div>
      <nav :class="{ visible: visibleMenu }">
        <ul>
          <li v-for="li in 6" :key="li">Lorem Ipsum</li>
        </ul>
      </nav>
      <button @click="toggleMenu" class="menu-button">☰ Menu</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/scss/__variables.scss";

header {
  position: sticky;
  top: 0;
  padding: 20px 0 10px 10px;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  height: calc(34px + 23px * 2);
  backdrop-filter: blur(10px);
  z-index: 10;

  .flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0 40px;

    .logo {
      z-index: 16;
      position: relative;
      display: flex;
      height: 48px;
      width: 170px;
    }
  }
}

.menu-button {
  display: none;
  border-radius: 5px;
  background-color: $primary-color;
  color: $light-text-color;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  z-index: 20;
  position: relative;
}

nav {
  display: flex;
  flex-direction: row;
  ul {
    display: flex;

    li {
      color: $dark-text-color;
      list-style-type: none;
      float: right;
      margin: 10px;
      padding: 10px;
      border-radius: 8px;
      &:hover {
        background-color: $secondary-color;
      }
    }
  }
}

@media (max-width: 1024px) {
  .menu-button {
    display: block;
  }

  nav {
    display: none;
    &.visible {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgb(248, 244, 252);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 15;
    }
  }

  ul {
    flex-direction: column;
    padding-left: 0;
    li {
      margin: 20px 0;
    }
  }
}
</style>
