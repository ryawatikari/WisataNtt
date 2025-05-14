<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">   
            <router-link class="navbar-brand" to="#">Surga Timur</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav ">
                        <li class="nav-item p-2">
                        <router-link class="nav-link active" aria-current="page" to="/">Beranda</router-link>
                        </li>
                        <li class="nav-item p-2">
                        <router-link class="nav-link" to="galeri">Galeri</router-link>
                        </li>
                        <li class="nav-item dropdown p-2">
                        <router-link class="nav-link dropdown-toggle" to="/paketWisata" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Paket Wisata
                        </router-link>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/paketWisata">Pesan Paket</router-link></li>
                            <li><router-link class="dropdown-item" to="/testimoni">Testimoni Pengunjung</router-link></li>
                        </ul>
                        </li>
                        <li class="nav-item p-2">
                        <router-link class="nav-link" to="/hubungikami">Hubungi kami</router-link>
                        </li>
                    </ul>

                <!-- <li class="nav-item p-2 ">
                    <router-link to="" class="nav-link text-end">login</router-link>
                </li>
               </ul> -->
                </div>
        </div>
    </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arima:wght@100..700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap');
.navbar{
    background-color: #30336b !important;
}
.navbar-brand{
    color: #ffff;
    font-family: "Caveat", cursive;
    font-size: 2.5rem;
}
.navbar-toggler:focus{
    box-shadow: none !important;
}
.nav-link{
    font-size: 20px;
    color:  #c7ecee !important;
    font-family: "Rethink Sans", sans-serif;
}
.nav-link:hover{
    color: #d3e5e6 !important;
}.akun{
    background: #82ccdd;
    color: #ffff;
}
.akun, .nav-link{
    color: #ffff !important;
 }
</style>

