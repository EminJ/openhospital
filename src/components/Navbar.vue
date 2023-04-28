<script setup>
  import axios from 'axios'
  import { ref } from 'vue'
  const Hesap = ref()
  const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)_accounts\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  const options = {
    method: 'POST',
    url: 'https://localhost:7129/users/hesabim',
    headers: {'Content-Type': 'application/json'},
    data: {id: cookie}
  };
  
  axios.request(options).then(function (response) {
    Hesap.value = response.data.status
  })
</script>
<template>
    <div class="w-full h-20 border-b-2 border-blue-100 flex items-center justify-between px-5">
        <a href="/" class="bg-clip-text text-transparent text-3xl transition-all hover:bg-gradient-to-tl bg-gradient-to-tr from-blue-700 bg-blue-500 font-bold">Open<span>Hospital</span></a>
        <ul class="flex">
          <a href="/iletisim"><li class="ml-4 text-gray-500 px-1  hover:text-blue-300 transition-all">Iletisim</li></a>
          <a href="/politika"><li class="ml-4 text-gray-500 px-1  hover:text-blue-300 transition-all">Gizilik Politikası</li></a>
          <a href="/admin" v-if="Hesap>0"><li class="ml-4 text-gray-500 px-1 hover:text-blue-300 transition-all">Kontrol Paneli</li></a>
          <a href="/hesap" v-if="cookie"><li class="ml-4 text-gray-500 px-1 hover:text-blue-300 transition-all">Hesabım</li></a>
          <a href="/giris" v-if="!cookie"><li class="ml-4 text-gray-500 px-1 hover:text-blue-300 transition-all">Giriş Yap</li></a>
        </ul>
    </div>
</template>