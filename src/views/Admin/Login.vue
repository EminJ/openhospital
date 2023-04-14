<template>
    <div class="w-full h-screen flex justify-center items-center">
        <div class="w-[35rem] h-auto p-5 rounded-md shadow-md shadow-gray-400">
            <h2 class="text-gray-600 border-b-2 border-b-gray-200 pb-1">Admin Girişi</h2>
            <div class="flex flex-nowrap my-4 items-center bg-gray-100 rounded-md">
                <span class="material-symbols-outlined text-gray-600 pl-2">person</span>
                <input type="text" class="w-full  h-10 bg-transparent focus:outline-none pl-2" placeholder="Kullanıcı Adı Girişi Sağlayınız">
            </div>
            <div class="flex flex-nowrap my-4 items-center bg-gray-100 rounded-md">
                <span class="material-symbols-outlined text-gray-600 pl-2">lock</span>
                <input type="password" class="w-full  h-10 bg-transparent focus:outline-none pl-2" placeholder="Şifre Girişi Sağlayınız">
            </div>
            <div class="text-[0.6rem] bg-gray-50 p-1 text-gray-400 py-2">
                Tüm hakları saklıdır. OpenHospital, yazılımının, içeriğinin ve her türlü materyalinin telif haklarına sahiptir. Bu materyaller, OpenHospital'ın önceden yazılı izni olmadan kopyalanamaz, değiştirilemez, dağıtılamaz veya yayınlanamaz. Bu materyallerin izinsiz kullanımı, yasal takip ve tazminat davalarını gerektirebilir.
            </div>
            <div class="w-full flex justify-end mt-2">
                <div class="cursor-pointer border-b-2 border-b-transparent transition-all hover:border-b-gray-500 pl-2 hover:text-gray-700 text-gray-500">Giriş Yapınız</div>
            </div>
        </div>
    </div>
</template>