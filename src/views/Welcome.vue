<script setup>
import { ref, computed } from 'vue';

const messages = ref(["No :(", "But this is VERY ergent;-;", "<- Click here", "Trust me!", "Please click another button🙏", "😠"])
const counter = ref(0)
const fontSize = computed(() => { return 16 - counter.value })
const today = new Date()
const isBirthday = computed(() => today.getDate() === 11 && today.getMonth() === 4)
</script>

<template>
  <div class="font-outfit bg-[#1C2122] text-[#FEFEFE] flex flex-col justify-center items-center gap-4 h-screen">
    <p class="text-xl font-bold text-center">You have received an email!</p>
    <p class="text-m text-center">Open it?</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ECC7D9" class="size-[6rem]">
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
    <div class="flex gap-5 font-extrabold">
      <RouterLink to="/HbdPapa"><button class="bg-[#88E3C9]">Sure!</button></RouterLink>
      <button class="bg-[#E0E0E0] text-[.75rem]" @click="counter++" v-if="counter <= 5">{{
        messages[counter] }}</button>
    </div>
  </div>
</template>

<style scoped>
button {
  padding: .5rem 1rem;
  border-radius: .5rem;
  color: #1C2122;
  cursor: pointer;
}
</style>