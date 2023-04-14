<script setup>
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer.vue'
    import axios from "axios";
    import { ref } from 'vue'
    const err = ref()
    const ad = ref('')
    const soyad = ref('')
    const eposta = ref('')
    const sifre = ref('')
    const sifre2 = ref('')
    const cinsiyet = ref(true)
  const register = (()=>{
    const options = {
      method: 'POST',
      url: 'https://localhost:7129/users/register',
      headers: {'Content-Type': 'application/json'},
      data: {
        ad: ad.value,
        soyad: soyad.value,
        eposta: eposta.value,
        sifre: sifre.value,
        sifre2: sifre2.value,
        cinsiyet: cinsiyet.value,
      }
    };

    axios.request(options).then(function (response) {
      if(response.data.code == 200){
        document.cookie = `_accounts=${response.data.message.split(";")[1]}`;
        location.href = "/";
      }
      err.value = response.data;
    }).catch(function (error) {
      console.error(error);
    });
  })
</script>

<template>
  <div class="w-full h-screen flex flex-col">
    <Navbar/>
    <div class="h-full w-10/12 flex flex-nowrap mx-auto">
      <img src="../assets/images/Character13.svg" class="w-7/12 h-full"/>
      <div class="w-5/12 h-full flex flex-col p-5">
        <div class="w-full flex flex-col items-center mt-20 py-7 shadow-md shadow-gray-400 rounded-md">
          <div class="w-10/12 h-10 my-2 border-b-2 border-b-gray-200 items-center flex justify-start">
            <h2 class="text-lg font-bold text-gray-600">Kayıt Ol - <a href="/giris">Giriş Yap <span class="material-symbols-outlined text-sm">link</span></a></h2>
          </div>
          <div class="w-10/12 h-10 my-2 items-center flex flex-nowrap bg-white rounded-md">
            <span class="material-symbols-outlined ml-1 text-gray-700">person</span>
            <input type="text" name="ad" v-model="ad" class="w-full h-full border-l-2 border-l-transparent focus:border-l-blue-400 ml-1 focus:outline-none text-gray-600 pl-2 bg-transparent" placeholder="Ad Girişi Yapınız" />
          </div>
          <div class="w-10/12 h-10 my-2 items-center flex flex-nowrap bg-white rounded-md">
            <span class="material-symbols-outlined ml-1 text-gray-700">person</span>
            <input type="text" name="soyad" v-model="soyad" class="w-full h-full border-l-2 border-l-transparent focus:border-l-blue-400 ml-1 focus:outline-none text-gray-600 pl-2 bg-transparent" placeholder="Soyad Girişi Yapınız" />
          </div>
          <div class="w-10/12 h-10 my-2 items-center flex flex-nowrap bg-white rounded-md">
            <span class="material-symbols-outlined ml-1 text-gray-700">mail</span>
            <input type="text" name="eposta" v-model="eposta" class="w-full h-full border-l-2 border-l-transparent focus:border-l-blue-400 ml-1 focus:outline-none text-gray-600 pl-2 bg-transparent" placeholder="E-Posta Girişi Yapınız" />
          </div>
          <div class="w-10/12 h-10 my-2 items-center flex flex-nowrap bg-white rounded-md">
            <span class="material-symbols-outlined ml-1 text-gray-700">lock</span>
            <input type="password" name="sifre" v-model="sifre" class="w-full h-full border-l-2 border-l-transparent focus:border-l-blue-400 ml-1 focus:outline-none text-gray-600 pl-2 bg-transparent" placeholder="Şifre Girişi Yapınız" />
          </div>
          <div class="w-10/12 h-10 my-2 items-center flex flex-nowrap bg-white rounded-md">
            <span class="material-symbols-outlined ml-1 text-gray-700">lock</span>
            <input type="password" name="sifre2" v-model="sifre2" class="w-full h-full border-l-2 border-l-transparent focus:border-l-blue-400 ml-1 focus:outline-none text-gray-600 pl-2 bg-transparent" placeholder="Tekrar Şifre Girişi Yapınız" />
          </div>
          <div class="w-10/12 h-10 my-2 items-center flex flex-nowrap bg-white rounded-md">
            <span class="material-symbols-outlined ml-1 text-gray-700">wc</span>
            <div class="flex items-center w-full h-full ml-1 text-gray-600 pl-2">
             <span class="text-gray-400">Cinsiyet Girişi</span>
              <p class="flex mx-2 text-gray-500"><input type="radio" checked name="erkek" class="mr-1" @click="cinsiyet=true"> Erkek</p>
              <p class="flex mx-2 text-gray-500"><input type="radio" name="erkek" class="mr-1" @click="cinsiyet=false"> Kadın</p>
            </div>
          </div>
          <div class="w-10/12 h-10 my-2 items-center flex justify-between">
            <p class="text-xs text-gray-500">By proceeding, you agree to OpenHospital' <a href="/" class="text-blue-400">Terms of service</a> and <a href="/" class="text-blue-400">Privacy policy</a>.</p>
            <input type="submit" @click="register" value="Kayıt Ol" class="text-gray-600 px-5 py-2 hover:bg-gray-50 transition-all bg-white rounded-md">
          </div>
        </div>
        <div v-if="err && err.code != 200" class="w-full h-auto p-2 text-sm mt-2 rounded-md bg-red-500 text-gray-50">
          <div class="w-full flex justify-between border-b border-b-gray-100 pb-1 mb-2"><p>Hata Kodu {{ err.code }}!</p> <p class="material-symbols-outlined cursor-pointer text-base" @click="err=null">close</p></div>
          <p class="text-gray-100">{{ err.message }}</p>
        </div>
      </div>
      
    </div>
  </div>
  <Footer/>
</template>
