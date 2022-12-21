<template>
  <section class="bg-dark w-full">
    <div
      id="step2Section"
      class="container flex relative items-center justify-center"
    >
      <div class="w-1/3 my-auto mr-8">
        <h2 id="text1" class="text-white w-full flex bit-font">
          STEP 2: <br />
          Mint & Trade donuts!
        </h2>
        <p id="text2" class="text-gray w-full rubik-font">
          Donuts will be minted in random order. You can trade your donuts on
          with other players on:
        </p>
        <div class="flex">
          <a href="https://www.yawww.io/">
            <img
              src="~/assets/svg/yawww.svg"
              alt=""
              class="w-1/2 m-8 grayscale"
            />
          </a>
          <a href="https://magiceden.io/">
            <img
              src="~/assets/svg/ME_Full_White.svg"
              alt=""
              class="w-1/2 m-8 grayscale brightness-50"
            />
          </a>
        </div>
      </div>
      <div class="w-1/4 grid gap-4 grid-cols-3 grid-rows-3">
        <img src="~/assets/img/donuts/1.png" alt="Donut_1" class="" />
        <img src="~/assets/img/donuts/2.png" alt="Donut_2" class="" />
        <img src="~/assets/img/donuts/3.png" alt="Donut_3" class="" />
        <img src="~/assets/img/donuts/4.png" alt="Donut_4" class="" />
        <img src="~/assets/img/donuts/5.png" alt="Donut_5" class="" />
        <div class="relative">
          <img
            src="~/assets/img/donuts/wrong-1.png"
            alt="Wrong_1"
            class="absolute z-[2] grayscale"
          />
          <img
            src="~/assets/img/donuts/6.png"
            alt="Donut_8"
            class="absolute z-[1]"
          />
        </div>
        <img src="~/assets/img/donuts/7.png" alt="Donut_7" class="" />
        <div class="relative">
          <img
            src="~/assets/img/donuts/wrong-2.png"
            alt="Wrong_2"
            class="absolute z-[2] grayscale"
          />
          <img
            src="~/assets/img/donuts/8.png"
            alt="Donut_8"
            class="absolute z-[1]"
          />
        </div>
        <img src="~/assets/img/donuts/9.png" alt="Donut_9" class="" />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { animate, inView, spring } from "motion";
onMounted(() => {
  inView("#step2Section", ({ target }) => {
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
