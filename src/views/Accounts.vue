<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import axios from "axios";
import { ref } from 'vue'
const Hesap = ref()
const outrange = ref(0)
const err = ref()
const Sifre = ref()
const AAd = ref()
const ASoyad = ref()
const Kimlik = ref()
const KimlikTest = ref()
const Eposta = ref()
const cinsiyet = ref('Kadın')
const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)_accounts\s*\=\s*([^;]*).*$)|^.*$/, "$1");
const options = {
  method: 'POST',
  url: 'https://localhost:7129/users/hesabim',
  headers: {'Content-Type': 'application/json'},
  data: {id: cookieValue}
};

axios.request(options).then(function (response) {
    Hesap.value = response.data
    if(response.data.cinsiyet) cinsiyet.value='Erkek'
    Eposta.value = Hesap.value.eposta
    AAd.value = Hesap.value.ad
    ASoyad.value = Hesap.value.soyad
    KimlikTest.value = Hesap.value.kimlikNo
}).catch(function (error) {
  console.error(error);
});

const upgrade = (()=>{
    const options = {
      method: 'POST',
      url: 'https://localhost:7129/users/guncelle',
      headers: {'Content-Type': 'application/json'},
      data: {
        Token: cookieValue,
        Sifre: Sifre.value,
        Ad: AAd.value,
        Soyad: ASoyad.value,
        Eposta: Eposta.value,
        KimlikNo: Kimlik.value.toString(),
      }
    };
    if(Sifre.value!=null){
        axios.request(options).then(function (response) {
            err.value = response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
    else{
        err.value = {code:400,message: 'Lütfen Şifre Girişini Sağlayınız!'}
    }
    
  })

    const outclick = (()=>{
        document.cookie = "_accounts=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "_admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/admin;";
        location.href = "/";
    })
</script>

<template>
    <div class="w-full h-screen flex flex-col">
        <Navbar />
        <div class="flex justify-end py-8">
            <div class="w-1/3 h-full">
                <div class="w-10/12 mx-auto h-12 flex flex-wrap items-center text-gray-800">
                    <div class="w-full h-12 my-2 flex flex-nowrap items-center">
                        <p class="px-2 w-32 flex items-center justify-start h-full">Ad</p>
                        <input type="text" name="name" class="w-full h-10 border-b border-b-gray-300 focus:outline-none focus:bg-gray-50 bg-transparent px-1" v-model="AAd"/>
                    </div>
                    <div class="w-full h-12 my-2 flex flex-nowrap items-center">
                        <p class="px-2 w-32 flex items-center justify-start h-full">Soyad</p>
                        <input type="text" name="surname" class="w-full h-10 border-b border-b-gray-300 focus:outline-none focus:bg-gray-50 bg-transparent px-1" v-model="ASoyad"/>
                    </div>
                    <div class="w-full h-12 my-2 flex flex-nowrap items-center">
                        <p class="px-2 w-32 flex items-center justify-start h-full">E-Posta</p>
                        <input type="email" name="email" v-model="Eposta" class="w-full h-10 border-b border-b-gray-300 focus:outline-none focus:bg-gray-50 bg-transparent px-1"/>
                    </div>
                    <div class="w-full h-12 my-2 flex flex-nowrap items-center">
                        <p class="px-2 w-32 flex items-center justify-start h-full">Doğum Tarihi</p>
                        <p class="w-full h-10 border-b border-b-gray-300 focus:outline-none focus:bg-gray-50 bg-transparent px-1">{{ Hesap.dogumTarihi.split("T")[0].replaceAll('-','/') }}</p>
                    </div>
                    <div class="w-full h-12 my-2 flex flex-nowrap items-center">
                        <p class="px-2 w-32 flex items-center justify-start h-full">Cinsiyet</p>
                        <p class="w-full h-10 border-b border-b-gray-300 focus:outline-none focus:bg-gray-50 bg-transparent px-1">{{ cinsiyet }}</p>
                    </div>
                    <div class="w-full h-12 my-2 flex flex-nowrap items-center">
                        <p class="px-2 w-32 flex items-center justify-start h-full">Kimlik No</p>
                        <input v-if="KimlikTest==''" type="number" name="kimlik" v-model="Kimlik" class="w-full h-10 border-b border-b-gray-300 focus:outline-none focus:bg-gray-50 bg-transparent px-1" placeholder="Kimlik Numarası Giriniz"/>
                        <input v-if="KimlikTest!=''" disabled type="text" name="kimlik" v-model="KimlikTest" class="w-full h-10 border-b border-b-gray-300 focus:outline-none focus:bg-gray-50 bg-transparent px-1" placeholder="Kimlik Numarası Giriniz"/>
                    </div>
                    
                    <!-- <div class="w-full h-12 my-2 flex flex-nowrap items-center">
                        <p class="px-2 w-32 flex items-center justify-start h-full">Şifre</p>
                        <input type="password" name="password" autocomplete="false" class="w-full h-10 border-b border-b-gray-300 focus:outline-none focus:bg-gray-50 bg-transparent px-1" disabled value="asd123asd!"/>
                    </div> -->
                    <div class="w-full h-auto flex justify-between mt-5">
                        <button v-if="outrange==0" @click="outrange=1" class="bg-red-300 px-3 py-[0.35rem] rounded-md text-sm mx-2 mt-2 hover:bg-red-200 transition-all">Çıkış Yap</button>
                        <button v-if="outrange==1" @click="outclick" class="bg-red-300 px-3 py-[0.35rem] rounded-md text-sm mx-2 mt-2 hover:bg-red-200 transition-all">Çıkışı Sağla</button>
                       
                        <div>
                            <input type="password" v-model="Sifre" name="password" autocomplete="false" class="w-64 h-10 border-b border-b-gray-300 focus:outline-none focus:bg-gray-50 bg-transparent px-1" placeholder="Şifrenizi Giriniz.."/>
                        <button class="bg-green-300 px-3 py-[0.35rem] rounded-md text-sm mx-2 mt-2 hover:bg-green-200 transition-all" @click="upgrade">Kaydet</button>
                        </div>
                    </div>
                    <div v-if="err && err.code != 200" class="w-full h-auto p-2 text-sm mt-2 rounded-md bg-red-500 text-gray-50">
                        <div class="w-full flex justify-between border-b border-b-gray-100 pb-1 mb-2"><p>Hata Kodu {{ err.code }}!</p> <p class="material-symbols-outlined cursor-pointer text-base" @click="err=null">close</p></div>
                        <p class="text-gray-100">{{ err.message }}</p>
                    </div>
                    <p v-if="err && err.code == 200" class="rounded-md text-green-900 my-5 w-full h-12 bg-green-100 flex items-center px-2">Kayıt Başarılı!</p>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>