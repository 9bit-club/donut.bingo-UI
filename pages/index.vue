<template>
  <div>
    <Menu id="menu" />
    <SectionWelcome />
    
    <SectionRewards />
    <div id="menuSection">

    <SectionStep1 />
    <div id="howToPlay"></div>
    <SectionStep2 />
    <SectionGeneral />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { animate, inView, spring } from "motion";
onMounted(async () => {
  inView("#menuSection", ({ target }) => {
    animate("#menu", { opacity: [0, 1]}, { easing: spring() });

    return (leaveInfo) => {
      animate("#menu", { opacity: [1, 0]}, { easing: spring() });
    };
  });
  inView("#howToPlay", ({ target }) => {
    animate("#menuHow", { opacity: [0.2, 1]}, { easing: "ease-out" });
    return (leaveInfo) => {
      animate("#menuHow", { opacity: [1, 0.2]}, { easing: "ease-out" });
    };
  });
});
</script>
