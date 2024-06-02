<script setup lang="ts"></script>
<template>
  <footer>
    <div class="flex-container">
      <div class="logo">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2168 39.0066H25.7115L11.5377 0H0L12.4928 34.3074C13.5243 37.1346 16.1986 39.0066 19.2168 39.0066Z"
            fill="white"
          ></path>
          <path
            d="M32.8556 14.2884C36.7907 14.2884 39.9998 11.0792 39.9998 7.1442C39.9998 3.20916 36.7907 0 32.8556 0C28.9206 0 25.7114 3.20916 25.7114 7.1442C25.7114 11.0792 28.9206 14.2884 32.8556 14.2884Z"
            fill="white"
          ></path>
        </svg>
      </div>
      <nav>
        <div>
          <h2>Lorem</h2>
          <ul>
            <li v-for="li in 4" :key="li">Lorem</li>
          </ul>
        </div>
        <div>
          <h2>Ipsum</h2>
          <ul>
            <li v-for="li in 4" :key="li">Ipsum</li>
          </ul>
        </div>
        <div>
          <h2>Lorem Ipsum</h2>
          <ul>
            <li v-for="li in 3" :key="li">Lorem Ipsum</li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="copyright">
      <p>All rights reserved ©2024</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/scss/__variables.scss";
footer {
  position: relative;
  padding: 0 0 10px 10px;
  margin-top: 50px;
  width: 100%;
  background: $primary-color;
  min-height: 300px;
  backdrop-filter: blur(10px);
  .flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(100% - 30px);
    margin: 0 40px;
    color: $light-text-color;

    .logo {
      position: relative;
      left: 5%;
      height: 48px;
      width: 170px;
    }
  }
}

nav {
  display: flex;
  margin-right: 10%;
  width: 50%;
  justify-content: space-between;

  div {
    margin: 40px;
    h2 {
      font-weight: 600;
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        cursor: pointer;
      }
    }
  }
}

.copyright {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px 0;
  color: $dark-text-color;
  background-color: rgba(255, 255, 255, 0.2);
}

@media (max-width: 1024px) {
  .flex-container {
    text-align: center;
  }
  nav {
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin: auto;
  }
}
</style>
