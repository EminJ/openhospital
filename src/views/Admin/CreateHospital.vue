<script setup>
    import { ref } from "vue";
    import axios from 'axios'
    const openmenu = ref(true)

    const AdGiris = ref('')
    const AciklamaGiris = ref('')
    const TCGiris = ref('')
    const Status = ref()
    const err = ref()
    const girisler = ref()
    const HesapAdSoyad = ref()
    const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)_accounts\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const cookieadmin = document.cookie.replace(/(?:(?:^|.*;\s*)_admin\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const options = {
      method: 'POST',
      url: 'https://localhost:7129/users/hesabim',
      headers: {'Content-Type': 'application/json'},
      data: {id: cookie}
    };
    
    axios.request(options).then(function (response) {
      Status.value = response.data.status
      HesapAdSoyad.value = response.data.ad+' '+response.data.soyad
    })

    
    var link = document.createElement('a');

    const hastaneolustur = (()=>{
      const options = {
        method: 'POST',
        url: 'https://localhost:7129/hospital/add',
        headers: {'Content-Type': 'application/json'},
        data: {token:cookieadmin, HastaneAd: AdGiris.value,HastaneAciklama: AciklamaGiris.value,HastaneYetkiliTC: TCGiris.value}
      };
      
      axios.request(options).then(function (response) {
        err.value = response.data
        girisler.value=[AdGiris.value,AciklamaGiris.value,TCGiris.value]
        var metin = "Hastane Adı : "+ girisler.value[0] +"\nHastane Açıklama : "+girisler.value[1] +"\nHastane Yetkilisi TC : "+ girisler.value[2] +"\nHastane Giriş Adı : "+err.value.message.split(';')[1].split(':')[0] +"\nHastane Giriş Şifre : "+err.value.message.split(';')[1].split(':')[1];
        var blob = new Blob([metin], { type: 'text/plain' });
        var url = URL.createObjectURL(blob);
        link.href = url;
        link.download = AdGiris.value+'HastaneBilgileri.txt';
      })
    });
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
          <div class="my-2 bg-transparent w-full h-11 border-r-2 border-r-transparent flex items-center pl-5 text-blue-400"><span class="material-symbols-outlined mr-2">dashboard</span> Gösterge Paneli</div>
        </a>
        <a v-if="Status>=4" href="/admin/HastaneEkle">
          <div class="my-2 bg-blue-50 w-full h-11 border-r-2 border-r-blue-500 flex items-center pl-5 text-blue-400"><span class="material-symbols-outlined mr-2">local_hospital</span> Hastane Ekle</div>
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
            <p class="ml-2 font-bold text-gray-700 text-sm">{{ HesapAdSoyad }}</p>
          </div>
        </div>
      </div>
      <div class="w-full h-auto p-5 ">
        <div class="w-[40rem] h-auto px-3 py-5 shadow-md shadow-gray-300 rounded-md">
          <h2 class="text-xl text-gray-800 mb-2">Hastane Ekle</h2>
          <div class="flex flex-col items-center">
            <input type="text" name="hastanename" v-model="AdGiris" class="w-11/12 my-2 h-10 shadow-md shadow-gray-400 rounded pl-2 focus:outline-none focus:shadow-gray-300" placeholder="Hastane Adını Giriniz..">
            <input type="text" name="hastaneaciklama" v-model="AciklamaGiris" class="w-11/12 my-2 h-10 shadow-md shadow-gray-400 rounded pl-2 focus:outline-none focus:shadow-gray-300" placeholder="Hastane Açıklama Giriniz..">
            <input type="text" name="hastaneyetkili" v-model="TCGiris" class="w-11/12 my-2 h-10 shadow-md shadow-gray-400 rounded pl-2 focus:outline-none focus:shadow-gray-300" placeholder="Hastane Yetkilisi TC si Giriniz..">
            <div class="w-11/12 my-2 flex justify-end">
              <input type="button" @click="hastaneolustur" value="Hastane Oluştur" class="cursor-pointer bg-gray-200 px-4 py-2 rounded hover:bg-green-400 hover:text-white transition-all">
            </div>
            <div v-if="err && err.code==200" class="w-11/12 h-auto p-2 bg-gray-100 rounded">
              <h2 class="py-2 border-b border-b-gray-400 mb-2 text-green-600 flex items-center">
                <span class="material-symbols-outlined text-2xl mr-1">new_releases</span>Hastane Oluşturuldu</h2>
              <div class="text-gray-700">
                <p>Hastane Adı : {{ girisler[0] }}</p>
                <p>Hastane Açıklama : {{ girisler[1] }}</p>
                <p>Hastane Yetkilisi TC : {{ girisler[2] }}</p>
                <hr class="my-2">
                <p>Hastane Giriş Adı : {{err.message.split(';')[1].split(':')[0]}}</p>
                <p>Hastane Giriş Şifre : {{err.message.split(';')[1].split(':')[1]}}</p>
                <div class="flex justify-end" id="download">
                  <a @click="link.click()" class="cursor-pointer flex items-center text-green-500">Bilgileri İndir
                    <span class="material-symbols-outlined">download</span></a>
                </div>
              </div>
            </div>
            <div v-if="err && err.code != 200" class="w-full h-auto p-2 text-sm mt-2 rounded-md bg-red-500 text-gray-50">
              <div class="w-full flex justify-between border-b border-b-gray-100 pb-1 mb-2"><p>Hata Kodu {{ err.code }}!</p> <p class="material-symbols-outlined cursor-pointer text-base" @click="err=null">close</p></div>
              <p class="text-gray-100">{{ err.message }}</p>
            </div>
          </div>
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
