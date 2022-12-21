<template>
  <section class="bg-dark w-full">
    <div id="welcomeDescription" class="container mx-auto flex">
      <div class="flex w-1/2 relative items-center justify-center">
        <img
          id="card1"
          src="~/assets/img/BB/BB_420.png"
          alt="BB_1"
          class="m-auto w-1/3 absolute z-[1]"
        />
        <img
          id="card2"
          src="~/assets/img/BB/BB_1337.png"
          alt="BB_1"
          class="m-auto w-1/3 absolute z-[2]"
        />
        <img
          id="card3"
          src="~/assets/img/BB/BB_69.png"
          alt="BB_1"
          class="m-auto w-1/3 absolute z-[1]"
        />
      </div>
      <div class="w-1/3">
        <h2 id="text1" class="text-white w-full flex bit-font">
          STEP 1: <br />
          Mint your collection card!
        </h2>
        <p id="text2" class="text-gray w-full rubik-font">
          In order to play you will need a collection card. This card will tell
          you which donuts you must collect. You can mint it
          <a href="/mint" class="text-pink">here</a>
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
