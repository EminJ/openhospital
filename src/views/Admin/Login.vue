<script setup>
    import { ref } from "vue";
    import axios from 'axios'
    const name = ref()
    const password = ref()
    const Hesap = ref()
    const err = ref()
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
    const login = (() => {
        const options = {
            method: 'POST',
            url: 'https://localhost:7129/users/admin',
            headers: {'Content-Type': 'application/json'},
            data: {name: name.value, password: password.value}
        };

        axios.request(options).then(function (response) {
            if(response.data.code == 200) {
            document.cookie = `_admin=${response.data.message.split(";")[1]}`;
            location.href = "/admin";
            }
            err.value=response.data
        }).catch(function (error) {
            console.error(error);
        });
    })
    const loginadmin = (() => {
        const options = {
            method: 'POST',
            url: 'https://localhost:7129/users/yetkiligiris',
            headers: {'Content-Type': 'application/json'},
            data: {id:cookie}
        };

        axios.request(options).then(function (response) {
            if(response.data.code == 200) {
            document.cookie = `_admin=${response.data.message.split(";")[1]}`;
            location.href = "/admin";
        }
        }).catch(function (error) {
            console.error(error);
        });
    })
</script>
<template>
    <div class="w-full h-screen flex justify-center items-center">
        <div class="w-[35rem] h-auto p-5 rounded-md shadow-md shadow-gray-400">
            <h2 class="text-gray-600 border-b-2 border-b-gray-200 pb-1">Admin Girişi</h2>
            <div class="flex flex-nowrap my-4 items-center bg-gray-100 rounded-md">
                <span class="material-symbols-outlined text-gray-600 pl-2">person</span>
                <input type="text" class="w-full  h-10 bg-transparent focus:outline-none pl-2" v-model="name" placeholder="Kullanıcı Adı Girişi Sağlayınız">
            </div>
            <div class="flex flex-nowrap my-4 items-center bg-gray-100 rounded-md">
                <span class="material-symbols-outlined text-gray-600 pl-2">lock</span>
                <input type="password" class="w-full  h-10 bg-transparent focus:outline-none pl-2" v-model="password" placeholder="Şifre Girişi Sağlayınız">
            </div>
            <div class="text-[0.6rem] bg-gray-50 p-1 text-gray-400 py-2">
                Tüm hakları saklıdır. OpenHospital, yazılımının, içeriğinin ve her türlü materyalinin telif haklarına sahiptir. Bu materyaller, OpenHospital'ın önceden yazılı izni olmadan kopyalanamaz, değiştirilemez, dağıtılamaz veya yayınlanamaz. Bu materyallerin izinsiz kullanımı, yasal takip ve tazminat davalarını gerektirebilir.
            </div>
            <div class="w-full flex justify-end mt-2">
                <div @click="login" class="cursor-pointer border-b-2 border-b-transparent transition-all hover:border-b-gray-500 pl-2 hover:text-gray-700 text-gray-500">Giriş Yapınız</div>
            </div>
            <div v-if="Hesap==4" class="w-full flex justify-end mt-2">
                <div @click="loginadmin" class="cursor-pointer border-b-2 border-b-transparent transition-all hover:border-b-red-500 pl-2 hover:text-red-700 text-red-500">Yetkili Giriş Sağla</div>
            </div>
            <div v-if="err && err.code != 200" class="w-full h-auto p-2 text-sm mt-2 rounded-md bg-red-500 text-gray-50">
          <div class="w-full flex justify-between border-b border-b-gray-100 pb-1 mb-2"><p>Hata Kodu {{ err.code }}!</p> <p class="material-symbols-outlined cursor-pointer text-base" @click="err=null">close</p></div>
          <p class="text-gray-100">{{ err.message }}</p>
        </div>
        </div>
        
    </div>
</template>