<script setup>
    import { ref } from "vue";
</script>

<template>
  <div class="w-full h-screen flex flex-col">
    <div class="w-full h-16 border-b-2 border-blue-100 flex items-center justify-between px-5">
      <p class="bg-clip-text text-transparent text-xl bg-gradient-to-tr from-blue-700 bg-blue-500 font-bold">Open<span>Hospital</span></p>
      <ul class="flex">
        <a href="/"><li class="ml-4 text-blue-600 px-1 font-bold text-sm border-b-2 border-b-transparent hover:border-b-blue-300 transition-all">Destek</li></a>
        <a href="/"><li class="ml-4 text-blue-600 px-1 font-bold text-sm border-b-2 border-b-transparent hover:border-b-blue-300 transition-all">Iletisim</li></a>
        <a href="/"><li class="ml-4 text-blue-600 px-1 font-bold text-sm border-b-2 border-b-transparent hover:border-b-blue-300 transition-all">Sıkça Sorulan Sorular</li></a>
      </ul>
    </div>
    <div class="w-full h-screen flex justify-center">
      <div class="w-8/12 h-4/6 bg-white mt-10 rounded-md shadow-md shadow-gray-400"></div>
    </div>
    <!-- <img src="../assets/images/Scenes01.svg"> -->
  </div>
</template>