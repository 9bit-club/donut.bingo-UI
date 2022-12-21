<template>
  <section class="bg-blue flex">
    <div id="rewardsSection" class="flex justify-center">
      <div
        class="w-2/5 rounded-lg overflow-hidden bg-dark text-white bit-font px-4 justify-center text-center flex"
      >
        <div class="m-auto">
          Winners pot
          <img class="mx-auto my-4" src="~/assets/img/solana_3d.png" />
            <div class="flex justify-center mx-4">
              {{ progressive }}
              <img class="w-5 h-5" src="~/assets/svg/solana-sol-logo.svg" />
            </div>
          <span class="rubik-font">(growing with every Donut minted)</span>
        </div>
      </div>
      <div class="rubik-font text-white text-[5vw] m-auto">+</div>
      <div class="w-2/5 rounded-lg overflow-hidden bg-dark text-white bit-font">
        <img
          draggable="false"
          class=""
          src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https%3A%2F%2Fbafybeihr7vi77syiup5o4avvzemhlp4v4nplpc23haderjcjkkzgah2a5u.ipfs.dweb.link%2F0.gif%3Fext%3Dgif"
        />
        <div class="mx-4 my-4">
          Membership Perks
          <ul class="mt-4 rubik-font">
            <li>Very rare NFT airdrops of future 9bit.club games</li>
            <li>Invite to Private Channel</li>
            <li>Get exclusive physical merchandise</li>
          </ul>
        </div>
      </div>
    </div>

    <br />
  </section>
</template>
<script lang="ts" setup>
// https://free3dicon.com/ <-- TODO: free icons attribution needs to be added
import { animate, inView } from "motion";
onMounted(async () => {
  const progressive = ref(0);
  return inView("#rewardsSection", ({ target }) => {
    animate(
      (progress) => {
        progressive.value = Number((progress * 2).toFixed(3));
      },
      { duration: 3, easing: "ease-out" }
    );
    return (leaveInfo) => {};
  });
});
</script>
