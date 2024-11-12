<template>
    <div class="galeri" id="galeri">
        <div class="container">
            <div class="title d-flex justify-content-center">
                <h2>Galeri Pesona Nusa Tenggara Timur</h2>
            </div>
            <div class="row  align-items-center mt-5">
                <div class="col-12 col-md-4" v-for="data in Galeri" :key="data.id">
                    <div class="card">
                        <img :src="data.image" class="card-img-top" alt="Pulau Padar">
                        <div class="card-body">
                            <h5 class="card-title mt-2">{{ data.judul }}</h5>
                            
                            <!-- Menambahkan lokasi dan harga dengan ikon -->
                            <p class="card-text mt-3">
                                <i class="fas fa-map-marker-alt"></i> {{ data.lokasi }} <br>
                                <i class="fas fa-tags"></i> {{ data.harga }}
                            </p>
                            <!-- <a href="#" class="card-link mt-1">Lihat Selengkapnya</a> -->
                             <RouterLink :to="{name: 'detailgaleri', params: {id: data.id}}" class="card-link mt-1">Lihat Selengkapnya</RouterLink>
                        </div>
                    </div>
                </div>


                <!-- <div class="col-12 col-md-4">
                    <div class="card" >
                        <img src="../assets/padar1.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Pulau Padar</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Lihat Selengkapnya</a>
                            </div>
                    </div>
                </div>

                <div class="col-12 col-md-4">
                    <div class="card" >
                        <img src="../assets/padar1.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Pulau Padar</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">Lihat Selengkapnya</a>
                            </div>
                    </div>
                </div>
                 -->
    
            </div>

            <!-- end -->
        </div>
    </div>
</template>

<script setup>
import { Galeri } from '../../data';


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
 .galeri{
    overflow-y: auto;
    padding-top: 150px ;
 }
 .title{
    font-family: "Poppins", sans-serif;
 }
 .card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.card:hover{
    opacity: 0.8;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    transition: all .30s;;
}

.card img {
    object-fit: cover;
    height: 200px; /* Sesuaikan sesuai kebutuhan */
}

.card-body {
    /* flex-grow: 1; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-text, .card-title {
    margin: 0;
}
.card-link{
    color: #f0932b !important;
    font-weight: 500;
}
.display-4{
    color: #30336b;
}
.row > .col-md-4 {
    margin-bottom: 20px; /* Jarak antar card */
}

</style>