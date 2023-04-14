<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="w-full h-screen flex flex-col">
        <Navbar />

        <div class="flex flex-nowrap container items-center mx-auto px-4 py-8">
            <img src="../assets/images/Character01.svg" class="w-1/2">
            <form class="w-1/2">
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="name">
                        Adınız
                    </label>
                    <input
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Adınız">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="surname">
                        Soyadınız
                    </label>
                    <input
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="surname" type="text" placeholder="Soyadınız">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="email">
                        E-posta Adresiniz
                    </label>
                    <input
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="E-posta adresiniz">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="subject">
                        Konu
                    </label>
                    <input
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="subject" type="text" placeholder="Konu">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="message">
                        Mesajınız
                    </label>
                    <textarea
                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message" placeholder="Mesajınız"></textarea>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Gönder
                    </button>
                </div>
            </form>
        </div>
    </div>
    <Footer />
</template>