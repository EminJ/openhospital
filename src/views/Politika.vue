<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="w-full h-screen flex flex-col">
        <Navbar />
        <main class="container mx-auto px-4 py-8">
            <div v-if="$route.params.id=='gizlilik'" class="bg-fuchsia-100">
                <h1 class="text-3xl font-bold mb-4">Gizlilik Politikası</h1>
                <p class="mb-4">Bu gizlilik politikası, OpenHospital web sitesinde (openhospital.com.tr) ve OpenHospital mobil
                    uygulamasında (aşağıda "uygulama" olarak anılacaktır) sağlanan hizmetlerimizle ilgili sizinle paylaşacağımız
                    bilgileri açıklamaktadır.</p>
                <p class="mb-4">OpenHospital, kişisel verilerinizi işleme konusunda büyük bir titizlikle hareket etmektedir ve
                    gizlilik politikamızın amacı, nasıl hareket ettiğimizi ve bu konuda nasıl koruma sağladığımızı açıklamaktır.
                </p>
            </div>
            <div v-else>
                <h1 class="text-3xl font-bold mb-4">Gizlilik Politikası</h1>
                <p class="mb-4">Bu gizlilik politikası, OpenHospital web sitesinde (openhospital.com.tr) ve OpenHospital mobil
                    uygulamasında (aşağıda "uygulama" olarak anılacaktır) sağlanan hizmetlerimizle ilgili sizinle paylaşacağımız
                    bilgileri açıklamaktadır.</p>
                <p class="mb-4">OpenHospital, kişisel verilerinizi işleme konusunda büyük bir titizlikle hareket etmektedir ve
                    gizlilik politikamızın amacı, nasıl hareket ettiğimizi ve bu konuda nasıl koruma sağladığımızı açıklamaktır.
                </p>
            </div>
            <h2 class="text-xl font-bold mb-2">Toplanan Veriler</h2>
            <p class="mb-4">OpenHospital, hastaların tedavi süreciyle ilgili bilgileri toplamakta ve bu bilgileri ilgili
                sağlık çalışanlarıyla paylaşmaktadır. Bunun dışında, kullanıcıların web sitesini ve uygulamayı kullanımına
                ilişkin bazı veriler toplanmaktadır.</p>
            <h2 class="text-xl font-bold mb-2">Veri Güvenliği</h2>
            <p class="mb-4">OpenHospital, toplanan verilerin güvenliğini sağlamak için uygun teknik ve organizasyonel
                önlemler almaktadır. Verilerin yetkisiz erişime, değiştirilmesine, ifşa edilmesine veya kaybedilmesine karşı
                koruma sağlamak amacıyla verilerin işlenmesinde ve saklanmasında en son güvenlik standartlarına uygun olarak
                hareket etmekteyiz.</p>
            <h2 class="text-xl font-bold mb-2">Çerezler</h2>
            <p class="mb-4">OpenHospital, web sitesi ve uygulamayı kullanırken çerezler kullanmaktadır. Çerezler, bir
                kullanıcının web sitesi veya uygulamayı ne sıklıkta kullandığını ve hangi sayfaların ziyaret edildiğini
                takip etmemize olanak sağlar. Bu bilgiler, kullanıcıların deneyimini geliştirmek ve hizmetleri optimize
                etmek için kullanılır.</p>
            <div v-if="$route.params.id=='kullanim'" class="bg-fuchsia-100">
                <h2 class="text-xl font-bold mb-2">Kullanım Şartları</h2>
                <p class="mb-4">OpenHospital web sitesini ve mobil uygulamasını kullanarak, aşağıdaki kullanım şartlarını kabul
                etmiş olursunuz:</p>
                <ul class="list-disc pl-8 mb-4">
                    <li>Kullanıcılar, web sitesini ve uygulamayı yalnızca yasal amaçlarla kullanacaktır.</li>
                    <li>Kullanıcılar, web sitesi ve uygulamayı kullanırken diğer kullanıcıların haklarına saygı
                        göstereceklerdir.</li>
                    <li>Kullanıcılar, web sitesi ve uygulamayı kullanırken diğer kullanıcıların gizliliğini ihlal
                        etmeyeceklerdir.</li>
                    <li>OpenHospital, web sitesi ve uygulamayı dilediği zaman değiştirme veya durdurma hakkına sahiptir.</li>
                </ul>
            </div>
            <div v-else>
                <h2 class="text-xl font-bold mb-2">Kullanım Şartları</h2>
                <p class="mb-4">OpenHospital web sitesini ve mobil uygulamasını kullanarak, aşağıdaki kullanım şartlarını kabul
                etmiş olursunuz:</p>
                <ul class="list-disc pl-8 mb-4">
                    <li>Kullanıcılar, web sitesini ve uygulamayı yalnızca yasal amaçlarla kullanacaktır.</li>
                    <li>Kullanıcılar, web sitesi ve uygulamayı kullanırken diğer kullanıcıların haklarına saygı
                        göstereceklerdir.</li>
                    <li>Kullanıcılar, web sitesi ve uygulamayı kullanırken diğer kullanıcıların gizliliğini ihlal
                        etmeyeceklerdir.</li>
                    <li>OpenHospital, web sitesi ve uygulamayı dilediği zaman değiştirme veya durdurma hakkına sahiptir.</li>
                </ul>
            </div>
    </main>
    </div>
    <Footer />
</template>