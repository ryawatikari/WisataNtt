<template>
  <div class="home" id="profil">
    <div class="container-fluid">
      <div class="title">
        <h5 class=" d-flex align-items-center justify-content-center text-white">Selamat Datang, Nusa Tenggara Timur</h5>
        <h1 class=" d-flex align-items-center justify-content-center text-center">Wajib Dicoba Saat Berkunjung ke NTT</h1>
        <p class="d-flex align-items-center justify-content-center  text-center mt-3 text-white">Salah satu destinasi kelas dunia Nusa Tenggara Timur, <br> Ada banyak hal seru yang bisa Sobat Pesona rasakan saat berada di <br> provinsi yang terdiri dari gugusan pulau ini.</p>
        <div class="button d-flex justify-content-center align-items-center">
          <button type="button" class="btn btn-primary m-2"><a href="http://localhost:5173/galeri">Jelajahi Sekarang</a></button>
          <button type="button" class="btn btn-secondary m-2"><a href="http://localhost:5173/pesan">Pesan Perjalanan</a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Arima:wght@100..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
 /* section{
    
 } */
  
  .home{
    background-image: url(../assets/kelo-the-best.jpg);
    background-size: cover;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat, repeat;
  }
  .title{
    margin-top: 70px !important;
    padding-top: 250px !important;
   }
  .title h1{
    font-family: "Noto Sans", sans-serif;
    color: #ffff;
  }
  .btn-primary{
    border: none !important;
    background-color: #fa983a !important;
    padding: 10px !important;
  }
  .btn-primary a{
    color: white;
    text-decoration: none;
    font-size: 15px;
    font-family: "Nunito", sans-serif;
  }
  .btn-primary:hover{
    background-color: #f6b93b !important;
  }
  .btn-secondary{
    border: none !important;
    background-color: #f6b93b !important;
    padding: 10px !important;
  }
  .btn-secondary a{
    color: white;
    text-decoration: none;
    font-size: 15px;
    font-family: "Nunito", sans-serif;
  }
  .btn-secondary:hover{
    background-color: #fa983a !important;
  }
</style>

