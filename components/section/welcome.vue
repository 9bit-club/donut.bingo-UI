<template>
  <section id="welcomeSection" class="bg-blue flex">
    <div>
      <img src="~/assets/svg/logo.svg" alt="Donut bingo logo" class="m-auto" />
    </div>
    <div
      id="scrolldown"
      class="text-white flex bit-font absolute bottom-16 my-auto"
    >
      Scroll down
    </div>
  </section>
</template>
<script lang="ts" setup>
import { animate } from "motion";
onMounted(() => {
  animate(
    "#scrolldown",
    { scale: [1, 1.2, 1] },
    { repeat: Infinity, duration: 2 }
  );
});
</script>
