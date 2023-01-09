<template>
  <section class="bg-dark w-full">
    <div id="welcomeDescription" class="container mx-auto flex z-[3]">
      <div class="flex w-1/2 relative items-center justify-center">
        <img
          id="card1"
          src="~/assets/img/BB/BB_420.png"
          alt="BB_1"
          class="m-auto w-1/3 absolute z-[5]"
        />
        <img
          id="card2"
          src="~/assets/img/BB/BB_1337.png"
          alt="BB_1"
          class="m-auto w-1/3 absolute z-[6]"
        />
        <img
          id="card3"
          src="~/assets/img/BB/BB_69.png"
          alt="BB_1"
          class="m-auto w-1/3 absolute z-[5]"
        />
      </div>
      <div class="w-1/3 z-[6]">
        <p class="text-white text-[16px] w-full flex bit-font opacity-50 mb-4">
          STEP 1:
        </p>
        <h2 id="text1" class="text-white w-full flex bit-font leading-[36px] mb-6 text-[24px]">
          Mint your <br /> collection card!
        </h2>
        <p id="text2" class="text-gray w-full rubik-font weight-400 text-[24px] leading-[36px]">
          In order to play you will need a collection card. This card will tell
          you which donuts you must collect. You can mint it
          <a href="/mint" class="text-pink cursor-pointer">here</a>
        </p>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { animate, inView, spring } from "motion";
onMounted(() => {
  inView("#welcomeDescription", ({ target }) => {
    animate("#card1", { x: [0, -150], rotate: [0, -15] }, { easing: spring() });
    animate("#card2", { scale: [0.8, 1.2] }, { easing: spring() });
    animate("#card3", { x: [0, 150], rotate: [0, 15] }, { easing: spring() });
    animate("#text1", { y: [30, 0], opacity: [0, 1] }, { easing: spring() });
    animate(
      "#text2",
      { y: [30, 0], opacity: [0, 1] },
      { easing: spring(), delay: 0.2 }
    );
    return (leaveInfo) => {};
  });
});
</script>
