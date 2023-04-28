<script setup>
    import { ref } from "vue";
    import axios from 'axios'
    const openmenu = ref(true)
    const Status = ref()
    const Hastane = ref()
    const HesapAdSoyad = ref()
    const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)_accounts\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const options = {
      method: 'POST',
      url: 'https://localhost:7129/users/hesabim',
      headers: {'Content-Type': 'application/json'},
      data: {id: cookie}
    };
    
    axios.request(options).then(function (response) {
      Status.value = response.data.status
      HesapAdSoyad.value = response.data.ad+' '+response.data.soyad
      if(response.data.hastaneId){
        const options = {
          method: 'POST',
          url: 'https://localhost:7129/hospital/sorgula',
          headers: {'Content-Type': 'application/json'},
          data: {id: response.data.hastaneId}
        };
        
        axios.request(options).then(function (res) {
          if(res.data.code==200) Hastane.value = res.data.message
        })
      }
    })
</script>

<template>
  <div class="w-full h-screen flex flex-nowrap">
    <Transition>
      <div v-if="openmenu" class="w-72 h-full border-r border-gray-200">
        <div class="pl-5 top-logo flex items-center h-14 justify-start">
          <a href="/"><p class="bg-clip-text text-transparent text-xl bg-gradient-to-tr from-blue-700 bg-blue-500 font-bold">Open<span>Hospital</span></p></a>
          <span class="bg-gray-200 rounded-md ml-1 text-gray-600" style="font-size: 0.6rem; padding: 0.15rem 0.38rem;">v1.0.0</span>
        </div>
        <p class="text-xs text-gray-400 pt-2 pb-1 pl-5 font-bold">Gerekli Menüler</p>
        <a href="/admin">
          <div class="my-2 bg-blue-50 w-full h-11 border-r-2 border-r-blue-500 flex items-center pl-5 text-blue-400"><span class="material-symbols-outlined mr-2">dashboard</span> Gösterge Paneli</div>
        </a>
        <a v-if="Status>=4" href="/admin/HastaneEkle">
          <div class="my-2 bg-transparent w-full h-11 border-r-2 border-r-transparent flex items-center pl-5 text-blue-400"><span class="material-symbols-outlined mr-2">local_hospital</span> Hastane Ekle</div>
        </a>
      </div>
    </Transition>
    <div class="w-full h-full flex flex-col">
      <div class="w-full h-14 border-b border-b-gray-200 pl-2 pr-5 flex flex-nowrap justify-between items-center">
        <span v-show="openmenu==true" @click="openmenu=!openmenu" class="material-symbols-outlined bg-gray-200 rounded-md text-2xl px-1 cursor-pointer">menu_open</span>
        <span v-show="openmenu==false" @click="openmenu=!openmenu" class="material-symbols-outlined bg-gray-200 rounded-md text-2xl px-1 cursor-pointer">menu</span>
        <div class="flex items-center flex-nowrap">
          <p class="mx-2 flow-text">{{Hastane}}</p>
          <div class="flex flex-nowrap items-center">
            <div class="w-9 h-9 bg-gray-400 rounded-full"></div>
            <p class="ml-2 font-bold text-gray-700 text-sm">{{ HesapAdSoyad }}</p>
          </div>
        </div>
      </div>
      <div class="w-full h-auto p-5 ">
        <div>

        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .flow-text {
    background-image: linear-gradient(to right, #60a5fa, #607b9c, #121c27, #1d2b3c, #a2bfe3, #92abc8, #06182d);
    background-size: 1500% auto;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    animation: flow 15s linear infinite;
  }

  @keyframes flow {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }

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
