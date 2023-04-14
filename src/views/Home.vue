<script setup>
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer.vue'
    window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    if(scroll > 50 ) this.document.getElementById('down').style.display = 'none'
    else this.document.getElementById('down').style.display = 'block'
});
</script>

<template>
  <div class="w-full h-screen flex flex-col">
    <Navbar/>
    <div class="w-full h-screen flex flex-col items-center">
      <div class="w-10/12 h-full">
        <div class="w-full h-auto flex">
          <div class="w-4/12 flex justify-end items-center">
            <h2 class="text-4xl leading-relaxed text-gray-800"><font class="text-blue-400">OpenHospital</font>, hastaların tedavi sürecinde ihtiyaç duydukları desteği sağlamak için tasarlanmış bir uygulamadır. Uzman doktorlarımız ve deneyimli sağlık personelimiz, sizlere en iyi hizmeti sunmak için burada. Sağlığınız bizim önceliğimizdir.</h2>
          </div>
          <img src="../assets/images/Scenes01.svg" class="w-8/12">
        </div>
      </div>
      <span id="down" class="material-symbols-outlined text-3xl">expand_more</span>
    </div>
    
  </div>
  <div class="w-full h-screen flex flex-col items-center">
    <div class="w-10/12 h-2/4 flex items-center flex-nowrap">
      <img src="../assets/images/Scenes05.svg" class="w-8/12 h-full">
      <div class="w-4/12 h-auto">
        <h2 class="text-2xl leading-relaxed text-gray-800"><font class="text-blue-400">OpenHospital</font>, kolay sonuç alma ve istatistikleri görme imkanı sağlayarak hastaların tedavi sürecini daha da verimli hale getiriyor. Uygulamamız sayesinde, doktorlar ve sağlık personeli hızlı bir şekilde sonuçlara erişebilir ve tedavinin seyrini buna göre planlayabilir. Ayrıca, uygulamamızın istatistiksel verileri sayesinde, hastalıkların yaygınlığı ve tedavi yöntemleri hakkında daha kapsamlı bir bilgi sahibi olabilirsiniz. Bu da hastalarımızın daha iyi ve bilinçli bir şekilde tedavi sürecini yönetmelerine yardımcı olur.</h2>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style>
  #down{
    animation: rotate 1s infinite;
  }

  @keyframes rotate {
			from {
				margin-bottom: 10px;
			}
      
			to {
				margin-bottom: 0px;
			}
		}
</style>