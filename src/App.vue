<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>

<style scoped>
:root {
  --green-primary: #2a9d8f;
  --green-dark: #1d7870;
  --green-light: #d8f3dc;
  --green-accent: #76c893;
  --green-light-bg: rgba(216, 243, 220, 0.3);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>
