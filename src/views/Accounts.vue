<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="w-full h-screen flex flex-col">
        <Navbar />
        <div class="flex justify-end py-8">
            <div class="w-1/3 h-full">
                <div class="w-10/12 mx-auto h-12 flex flex-wrap items-center text-gray-800">
                    <div class="w-full h-12 flex flex-nowrap items-center">
                        <p class="px-2 w-32 flex items-center justify-end h-full">Ad</p>
                        <input type="text" name="name" class="w-full h-10 border-b border-b-gray-300 focus:outline-none focus:bg-gray-50 bg-transparent px-1" value="Muhammet Emin"/>
                    </div>
                    <div class="w-full h-12 flex flex-nowrap items-center">
                        <p class="px-2 w-32 flex items-center justify-end h-full">Soyad</p>
                        <input type="text" name="surname" class="w-full h-10 border-b border-b-gray-300 focus:outline-none focus:bg-gray-50 bg-transparent px-1" value="Güleşci"/>
                    </div>
                    <div class="w-full h-12 flex flex-nowrap items-center">
                        <p class="px-2 w-32 flex items-center justify-end h-full">E-Posta</p>
                        <input type="email" name="email" class="w-full h-10 border-b border-b-gray-300 focus:outline-none focus:bg-gray-50 bg-transparent px-1" value="muhammetegulesci@gmail.com"/>
                    </div>
                    <div class="w-full h-12 flex flex-nowrap items-center">
                        <p class="px-2 w-32 flex items-center justify-end h-full">Şifre</p>
                        <input type="password" name="password" autocomplete="false" class="w-full h-10 border-b border-b-gray-300 focus:outline-none focus:bg-gray-50 bg-transparent px-1" disabled value="asd123asd!"/>
                    </div>
                    <div class="w-full h-auto flex justify-end mt-5">
                        <input type="password" name="password" autocomplete="false" class="w-64 h-10 border-b border-b-gray-300 focus:outline-none focus:bg-gray-50 bg-transparent px-1" placeholder="Şifrenizi Giriniz.."/>
                        <button class="bg-green-300 px-3 py-[0.35rem] rounded-md text-sm mx-2 mt-2 hover:bg-green-200 transition-all">Kaydet</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>