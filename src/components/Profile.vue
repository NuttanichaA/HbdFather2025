<script setup>
import {computed} from 'vue';
const today = new Date()
const isBirthday = computed(() => today.getDate() === 11 && today.getMonth() === 4)

</script>
 
<template>
<div class="flex p-4 pl-7 gap-4 items-center relative" :class="isBirthday ? 'pt-10' : 'pt-4'">
      <img v-if="isBirthday" src="../assets/partyHat.svg" alt="partyHat" class="absolute top-[0rem] left-[.5rem] w-[4rem] h-[4rem]">
      <img src="../assets/profile.png" alt="Papa Tee" class="rounded-full w-[5rem] h-[5rem] bo">
      <div>
        <p class="font-semibold text-xl">Pairote A.</p>
        <p>Aka. <span v-if="isBirthday">Birthday Boy!</span><span v-if="!isBirthday">Greatest Dad Ever!</span></p>
      </div>
    </div>
</template>
 
<style scoped>

</style>