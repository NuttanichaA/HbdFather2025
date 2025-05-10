<script setup>
import Profile from '../components/Profile.vue'

</script>

<template>
  <div class="bg-[#1C2122] text-[#FEFEFE] font-outfit">
    <div class="h-fit w-sreen px-4 py-4 shadow-md">
      <RouterLink to="/mails">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
          <path fill-rule="evenodd"
            d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd" />
        </svg>
      </RouterLink>
    </div>
    <Profile />
    <div class="p-4 pt-0 pl-7">
      <p class="font-semibold text-2xl"><span class="font-normal">Subject: </span>Happy BirthDay! Papa Tee</p>
      <p class="font-normal text-[.75rem]">From: Cream</p>
    </div>
    <div class="p-4 pt-0">
      <img src="../assets/mailpic1.png" alt="Papa and me pic" class="w-[90vw] h-auto rounded-xl m-auto">
      <p class="pt-4 w-[90vw] m-auto break-words font-ibm">
        &nbsp;&nbsp;&nbsp;&nbsp;สุขสันต์วันเกิดนะคะป่าป๊า เวลาผ่านไปเร็วมาก ๆ เลย แปปเดียวก็หนึ่งปีแล้ว ขอบคุณมากเลยนะคะ
        สำหรับเวลาที่ผ่านมา หนูเห็นว่าป่าป๊าพยายามมาก ๆ เลยในปีนี้ ขอบคุณจริง ๆ ที่สู้เพื่อพวกหนูมาตลอดนะคะ
        หนูอยากบอกว่า หนู appreciate ทุกอย่างที่ป่าป๊าทำให้เสมอเลยค่ะ(คิดคำภาษาไทยที่สื่อถึงคำนี้ไม่ออกเลย555)
      </p>
      <p class="pt-4 w-[90vw] m-auto break-words font-ibm">
        &nbsp;&nbsp;&nbsp;&nbsp;ขอบคุณที่มีชีวิตอยู่ในทุก ๆ วัน ขอบคุณทุกมื้ออร่อย ๆ ที่ตั้งใจทำให้ รวมถึงคลิป reels,
        Instragram post, และรูปเก่า ๆ ที่ส่งให้บ่อย ๆ ด้วย หนูขอให้ป่าป๊าแข็งแรง เต็มไปด้วยพลังบวกและความสุข
        มีเรี่ยวแรงกำลังใจที่จะใช้ชีวิตตามใจได้ทุกวัน ยิ้มได้ในทุกช่วงเวลา และมีวันที่ดีจากนี้ตลอดไปเลยนะคะ </p>
      <p class="pt-4 w-[90vw] m-auto break-words font-ibm">
        ด้วยรัก,<br>ครีม
      </p>
      <img src="../assets/mailpic2.png" alt="Our family" class="mt-4 w-[90vw] h-auto rounded-xl m-auto">
      <hr class="mt-4">
    </div>
    <div class="flex justify-center pb-4">
      <RouterLink to="/mails">
        <button class="bg-[#88E3C9]">
          << See all of your mails
        </button>
      </RouterLink>
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