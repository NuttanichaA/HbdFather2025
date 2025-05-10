<script setup>
import Profile from '../components/Profile.vue';
import { ref, computed} from 'vue';

const mails = ref(["Let's be Happy today!💗", "Have you smile today? If not, here, let me go first!😊", "I'm so proud of you🍀", "Do you need a hug?🤗🫂"])
const emoji = ref(["💗", "😊", "🍀", "🫂"])
const showEmoji = ref(Array(mails.value.length).fill(false))
const today = new Date()
const isBirthday = computed(() => today.getDate() === 11 && today.getMonth() === 4)

const emojiPopup = (index) => {
  showEmoji.value[index] = true
  setTimeout(() => {
    showEmoji.value[index] = false
  }, 1000)
}

</script>

<template>
  <div class="bg-[#1C2122] text-[#FEFEFE] font-outfit pt-4 h-full">
    <div class="w-screen h-10 shadow-md">
      <p v-if="isBirthday" class="text-center">It's your Birthday today!🎊</p>
      <p v-if="!isBirthday" class="text-center">Hope you have a nice day!☀️</p>
    </div>
    <Profile />
    <div class="m-auto rounded-2xl w-[90vw] h-7 border border-[#FEFEFE] flex items-center">
      <p class="text-[.75rem] text-center w-full">Try clicking the mails!</p>
    </div>
    <div class="p-4 m-auto text-[#1C2122] space-y-3">
      <RouterLink to="/HbdPapa">
        <div
          class="w-[90vw] m-auto px-[2vw] h-20 rounded-xl bg-[#ECC7D9] border-2 border-[#d98db2] flex items-center gap-2 text-[.75rem]">
          <img src="../assets/cream.jpg" alt="Cream" class="w-[4rem h-[4rem] rounded-full border-2 border-[#d98db2]">
          <div>
            <p class="font-bold">Cream</p>
            <p class="font-bold"><span class="font-normal">Subject:</span> Happy BirthDay! Papa Tee</p>
            <p class="border-b pt-1 border-b-[#7e7e82] w-fit text-[#5a5b5c]">continue &gt;</p>
          </div>
        </div>
      </RouterLink>
      <div class="w-[90vw] px-[2vw] m-auto mt-3 h-20 rounded-xl bg-[#FEFEFE] flex items-center gap-2 text-[.75rem]"
        v-for="(mail, index) in mails" :key="index" @click="emojiPopup(index)">
        <img src="../assets/cream.jpg" alt="Cream" class="w-[4rem h-[4rem] rounded-full border-2 border-[#7e7e82]">
        <div>
          <p class="font-bold">Cream</p>
          <p class="font-bold"><span class="font-normal">Subject:</span> {{ mail }}</p>
        </div>
        <Transition name="zoom">
          <div v-if="showEmoji[index]"
            class="w-full h-full text-9xl fixed top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-50">
            {{ emoji[index] }}
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.3s ease;
}
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0);
  opacity: 0;
}
.zoom-enter-to,
.zoom-leave-from {
  transform: scale(1);
  opacity: 1;
}

</style>