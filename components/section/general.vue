<template>
  <section class="bg-dark w-full">
    <div id="generalSection" class="container mx-auto flex z-[3]">
      <div class="flex w-1/2 relative text-white items-center justify-center">
        Read more about 9 bit club
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { animate, inView, spring } from "motion";
onMounted(() => {
  inView(
    "#generalSection",
    ({ target }) => {
      animate("#menuGeneral", { opacity: [0.2, 1] }, { easing: "ease-out" })
      animate(
        "#card1",
        { x: [0, -150], rotate: [0, -15] },
        { easing: spring() }
      );
      animate("#card2", { scale: [0.8, 1.2] }, { easing: spring() });
      animate("#card3", { x: [0, 150], rotate: [0, 15] }, { easing: spring() });
      animate("#text1", { y: [30, 0], opacity: [0, 1] }, { easing: spring() });
      animate(
        "#text2",
        { y: [30, 0], opacity: [0, 1] },
        { easing: spring(), delay: 0.2 }
      );
      return (leaveInfo) => {
        animate("#menuGeneral", { opacity: [1, 0.2] }, { easing: "ease-out" })

      };
    }
  );
});
</script>
