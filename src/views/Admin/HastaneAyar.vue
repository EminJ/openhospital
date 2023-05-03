<script setup>
import { ref } from "vue";
import axios from 'axios'
const openmenu = ref(true)
const Status = ref()
const Hastane = ref()
const HastaneId = ref()
const HesapAdSoyad = ref()
const categori = ref(['Doktor',
  ['Dahiliye:489465645', ['Kardiyoloji', 'Endokrinoloji', 'Gastroenteroloji', 'Nefroloji', 'Onkoloji', 'Romatoloji', 'Hematoloji', 'Enfeksiyon hastalıkları']],
  ['Cerrahi', ['Beyin ve Sinir Cerrahisi', 'Kalp ve Damar Cerrahisi', 'Genel Cerrahi', 'Ortopedi', 'Üroloji', 'Plastik Cerrahi', 'Göğüs Cerrahisi', 'Kulak Burun Boğaz Cerrahisi']],
  ['Kadın Hastalıkları ve Doğum', ['Jinekoloji', 'Doğumhane', 'Perinatoloji', 'Üreme Endokrinolojisi ve İnfertilite', 'Obstetrik']],
  ['Çocuk Sağlığı ve Hastalıkları', ['Yenidoğan yoğun bakım ünitesi', 'Pediatrik kardiyoloji', 'Pediatrik nöroloji', 'Pediatrik hematoloji/onkoloji', 'Pediatrik gastroenteroloji', 'Pediatrik nefroloji']],
  ['Psikiyatri', ['Klinik psikiyatri', 'Çocuk ve ergen psikiyatrisi', 'Ruh sağlığı ve hastalıkları']],
  ['Göz Hastalıkları', ['Katarakt', 'Glokom', 'Retina hastalıkları', 'Kornea hastalıkları']],
  ['Dermatoloji', ['Alerjik cilt hastalıkları', 'Sedef hastalığı', 'Akne tedavisi', 'Deri kanseri']],
  ['Diş Hekimliği', ['Ortodonti', 'Periodontoloji', 'Endodonti', 'Oral cerrahi', 'Pedodonti (çocuk diş hekimliği)']],
  ['Rehabilitasyon', ['Fizik tedavi ve rehabilitasyon', 'Spor rehabilitasyonu', 'Psikolojik rehabilitasyon']]])
const cookie = document.cookie.replace(/(?:(?:^|.*;\s*)_accounts\s*\=\s*([^;]*).*$)|^.*$/, "$1");
const options = {
  method: 'POST',
  url: 'https://localhost:7129/users/hesabim',
  headers: { 'Content-Type': 'application/json' },
  data: { id: cookie }
};

axios.request(options).then(function (response) {
  Status.value = response.data.status
  HesapAdSoyad.value = response.data.ad + ' ' + response.data.soyad
  HastaneId.value = response.data.hastaneId
  if (response.data.hastaneId) {
    const options = {
      method: 'POST',
      url: 'https://localhost:7129/hospital/sorgula',
      headers: { 'Content-Type': 'application/json' },
      data: { id: response.data.hastaneId }
    };

    axios.request(options).then(function (res) {
      if (res.data.code == 200) Hastane.value = res.data.message
    })
  }
})

const personadd = ((person) => {
  console.log(person);
})
</script>

<template>
  <div class="w-full h-screen flex flex-nowrap">
    <Transition>
      <div v-if="openmenu" class="w-72 h-full border-r border-gray-200">
        <div class="pl-5 top-logo flex items-center h-14 justify-start">
          <a href="/">
            <p class="bg-clip-text text-transparent text-xl bg-gradient-to-tr from-blue-700 bg-blue-500 font-bold">
              Open<span>Hospital</span></p>
          </a>
          <span class="bg-gray-200 rounded-md ml-1 text-gray-600"
            style="font-size: 0.6rem; padding: 0.15rem 0.38rem;">v1.0.0</span>
        </div>
        <p class="text-xs text-gray-400 pt-2 pb-1 pl-5 font-bold">Gerekli Menüler</p>
        <a href="/admin">
          <div
            class="my-2 bg-transparent w-full h-11 border-r-2 border-r-transparent flex items-center pl-5 text-blue-400">
            <span class="material-symbols-outlined mr-2">dashboard</span> Gösterge Paneli
          </div>
        </a>
        <a href="/admin/randevu">
          <div
            class="my-2 bg-transparent w-full h-11 border-r-2 border-r-transparent flex items-center pl-5 text-blue-400">
            <span class="material-symbols-outlined mr-2">description</span> Randevu Oluştur
          </div>
        </a>
        <a v-if="Status >= 3 && HastaneId != 0" href="/admin/hastane">
          <div class="my-2 bg-blue-50 w-full h-11 border-r-2 border-r-blue-500 flex items-center pl-5 text-blue-400"><span
              class="material-symbols-outlined mr-2">settings</span> Hastane Ayarları</div>
        </a>
        <a v-if="Status >= 4" href="/admin/HastaneEkle">
          <div
            class="my-2 bg-transparent w-full h-11 border-r-2 border-r-transparent flex items-center pl-5 text-blue-400">
            <span class="material-symbols-outlined mr-2">local_hospital</span> Hastane Ekle
          </div>
        </a>
      </div>
    </Transition>
    <div class="w-full h-full flex flex-col">
      <div class="w-full h-14 border-b border-b-gray-200 pl-2 pr-5 flex flex-nowrap justify-between items-center">
        <span v-show="openmenu == true" @click="openmenu = !openmenu"
          class="material-symbols-outlined bg-gray-200 rounded-md text-2xl px-1 cursor-pointer">menu_open</span>
        <span v-show="openmenu == false" @click="openmenu = !openmenu"
          class="material-symbols-outlined bg-gray-200 rounded-md text-2xl px-1 cursor-pointer">menu</span>
        <div class="flex items-center flex-nowrap">
          <p class="mx-2 flow-text">{{ Hastane }}</p>
          <div class="flex flex-nowrap items-center">
            <div class="w-9 h-9 bg-gray-400 rounded-full"></div>
            <p class="ml-2 font-bold text-gray-700 text-sm">{{ HesapAdSoyad }}</p>
          </div>
        </div>
      </div>
      <div class="w-full h-auto flex p-5 justify-end">
        <div class="w-[22rem] h-[20rem] mr-5 mt-2 px-3 py-5 shadow-md shadow-gray-300 rounded-md">
          <h2 class="text-xl text-gray-800 mb-2">Personel Hakkında</h2>
          <hr>
          <p class="w-full h-8 flex items-center">Ad: Muhammet Emin</p>
          <p class="w-full h-8 flex items-center">Soyad: Güleşci</p>
          <span class="text-xs text-gray-400">burada sağ taraftan tıklanan personelin bilgileri gelecek</span>
        </div>
        <div class="flex flex-col">
          <div class="w-[22rem] h-auto mr-5 px-3 py-5 shadow-md shadow-gray-300 rounded-md">
          <h2 class="text-xl text-gray-800 mb-2">Bölüm Ekle</h2>
          <hr>
          <input type="text" name="hastaneyetkili" class="w-full my-2 h-10 shadow-md shadow-gray-400 rounded pl-2 focus:outline-none focus:shadow-gray-300 text-sm" placeholder="Bölüm Adını Giriniz">
           <div class="flex flex-nowrap justify-between mt-2">
            <select>
              <option>Yetki Seçimi</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <input type="button" value="Bölümü Oluştur" class="cursor-pointer bg-gray-200 px-4 py-2 text-sm rounded hover:bg-green-400 hover:text-white transition-all">
           </div>
          </div>
          <div class="w-[22rem] h-auto mr-5 mt-2 px-3 py-5 shadow-md shadow-gray-300 rounded-md">
            <h2 class="text-xl text-gray-800 mb-2">Bölüm Personel Listesi</h2>
            <hr>
            <p class="w-full h-8 flex items-center hover:bg-gray-100 transition-all cursor-pointer mt-1 rounded-sm">Muhammet Emin Güleşci</p>
            <span class="text-xs text-gray-400">axios ile alınan id ile post sonucu gelen response yaz</span>
          </div>
        </div>
        <div class="w-auto h-[90vh] overflow-y-scroll px-3 py-5 shadow-md shadow-gray-300 rounded-md">
          <h2 class="text-xl text-gray-800 mb-2">Bölüm Listesi</h2>
          <hr>
          <div v-for="i in categori">
            <h2 v-if="typeof i == 'string'"
              class="text-lg mt-2 w-64 h-8 flex items-center px-1 transition-all hover:bg-gray-100 rounded-sm cursor-pointer"
              :id="i.split(' ')[0]" @click="personadd(i.split(':')[1])">{{ i.split(':')[0] }}</h2>
            <div v-if="typeof i == 'object'" v-for="y in i" class="ml-2 text-base">
              <p v-if="typeof y == 'string'"
                class="py-4 w-64 h-8 flex items-center px-1 transition-all hover:bg-gray-100 rounded-sm cursor-pointer"
                :id="y.split(':')[1]" @click="personadd(y.split(':')[1])">{{ y.split(':')[0] }}</p>
              <hr>
              <p v-if="typeof y == 'object'" v-for="x in y" class="ml-2 text-sm">
              <p v-if="typeof x == 'string'"
                class="w-64 h-8 flex items-center px-1 transition-all hover:bg-gray-100 rounded-sm cursor-pointer"
                :id="x.split(':')[1]" @click="personadd(x.split(':')[1])">{{ x.split(':')[0] }}</p>
              <p v-if="typeof x == 'object'" v-for="r in x" class="ml-2 text-xs">
              <p v-if="typeof r == 'string'"
                class="w-64 h-8 flex items-center px-1 transition-all hover:bg-gray-100 rounded-sm cursor-pointer"
                :id="r.split(':')[1]" @click="personadd(r.split(':')[1])">{{ r.split(':')[0] }}</p>
              <p v-if="typeof r == 'object'" v-for="z in r" class="ml-2">
              <p v-if="typeof z == 'string'"
                class="w-64 h-8 flex items-center px-1 transition-all hover:bg-gray-100 rounded-sm cursor-pointer"
                :id="z.split(':')[1]" @click="personadd(z.split(':')[1])">{{ z.split(':')[0] }}</p>
              <p v-if="typeof z == 'object'" v-for="u in z" class="ml-2">
              <p v-if="typeof u == 'string'"
                class="w-64 h-8 flex items-center px-1 transition-all hover:bg-gray-100 rounded-sm cursor-pointer"
                :id="u.split(':')[1]" @click="personadd(u.split(':')[1])">{{ u.split(':')[0] }}</p>
              <p v-if="typeof u == 'object'" v-for="t in u" class="ml-2">
              <p v-if="typeof t == 'string'"
                class="w-64 h-8 flex items-center px-1 transition-all hover:bg-gray-100 rounded-sm cursor-pointer"
                :id="t.split(':')[1]" @click="personadd(t.split(':')[1])">{{ t.split(':')[0] }}</p>
              <p v-if="typeof t == 'object'" v-for="k in t" class="ml-2">
              <p v-if="typeof k == 'string'"
                class="w-64 h-8 flex items-center px-1 transition-all hover:bg-gray-100 rounded-sm cursor-pointer"
                :id="k.split(':')[1]" @click="personadd(k.split(':')[1])">{{ k.split(':')[0] }}</p>
              </p>
              </p>
              </p>
              </p>
              </p>
              </p>
            </div>
          </div>
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
  animation: v-out 0.5s;
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
}</style>

