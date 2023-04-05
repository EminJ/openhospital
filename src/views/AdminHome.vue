<script setup>
    import { ref } from "vue";
    const openmenu = ref(true)
</script>

<template>
  <div class="w-full h-screen flex flex-nowrap">
    <Transition>
    <div v-if="openmenu" class="w-72 h-full border-r border-gray-200">
      <div class="pl-5 top-logo flex items-center h-14 justify-start">
        <p class="bg-clip-text text-transparent text-xl bg-gradient-to-tr from-blue-700 bg-blue-500 font-bold">Open<span>Hospital</span></p>
        <span class="bg-gray-200 rounded-md ml-1 text-gray-600" style="font-size: 0.6rem; padding: 0.15rem 0.38rem;">v1.0.0</span>
      </div>
      <p class="text-xs text-gray-400 pt-2 pb-1 pl-5 font-bold">Gerekli Menüler</p>
      <a href="/">
        <div class="my-2 bg-blue-50 w-full h-11 border-r-2 border-r-blue-500 flex items-center pl-5 text-blue-400"><span class="material-symbols-outlined mr-2">dashboard</span> Gösterge Paneli</div>
      </a>
    </div>
  </Transition>
    <div class="w-full h-full flex flex-col">
      <div class="w-full h-14 border-b border-b-gray-200 pl-2 pr-5 flex flex-nowrap justify-between items-center">
        <span v-show="openmenu==true" @click="openmenu=!openmenu" class="material-symbols-outlined bg-gray-200 rounded-md text-2xl px-1 cursor-pointer">menu_open</span>
        <span v-show="openmenu==false" @click="openmenu=!openmenu" class="material-symbols-outlined bg-gray-200 rounded-md text-2xl px-1 cursor-pointer">menu</span>
        <div class="flex items-center flex-nowrap">
          <div class="flex flex-nowrap items-center">
            <div class="w-9 h-9 bg-gray-400 rounded-full"></div>
            <p class="ml-2 font-bold text-gray-700 text-sm">John Doe</p>
          </div>
        </div>
      </div>
      <div class="w-full h-auto p-5">
        <div class="flex flex-wrap">
          <div class="w-72 h-36 mx-2 bg-gray-100 rounded-md shadow-md shadow-gray-400"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .v-enter-active {
    animation: v-in 0.5s;
  }
  .v-leave-active {
    animation: v-out 0.5s ;
  }
  @keyframes v-out {
    0% {
      margin-left: -0rem;
    }
    100% {
      margin-left: -18rem;
    }
  }
  @keyframes v-in {
    0% {
      margin-left: -18rem;
    }
    100% {
      margin-left: 0rem;
    }
  }

</style>
