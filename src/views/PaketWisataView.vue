<template>
    <div class="PaketWisata" id="paketwisata">
        <div class="container mt-5">
            <div class="title d-flex justify-content-center">
                <h2 class="display-4 text-primary fw-5 text-center">Paket Wisata Pesona Nusa Tenggara Timur</h2>
            </div>
                <p class="text-center text-muted mt-2">
                    Jelajahi keindahan alam NTT dengan paket lengkap, termasuk transportasi dan fasilitas eksklusif.
                </p>
    
            <div class="row align-items-center mt-5">
                <!-- Card 1 - Pulau Padar -->
                <div v-for="data in pesanan" :key="data.id" class="col-12 col-md-4 mb-4">
                    <div class="card shadow">
                        <img :src="data.image" class="card-img-top" alt="Pulau Padar">
                        <div class="card-body">
                            <h6 class="card-title mt-2">{{ data.judul }}</h6>
                            <p class="mt-1 fw-bold">{{ data.informasi }}</p>
                            <p class="card-text mt-1">
                                <i class="fas fa-tags"></i> Dari IDR {{ data.harga }}
                            </p>
                            <p><strong>Fasilitas: </strong>{{ data.fasilitas }}</p>
                            <!-- <a href="#" >Pesan Perjalanan</a> -->
                            <RouterLink :to="{name: 'pesan', params: {id: data.id}}" class="btn btn-primary mt-1">Kunjungi</RouterLink>
                        </div>
                    </div>
                </div>

           
            </div>
        </div>

    </div>
</template>

<script setup >
import { pesanan } from '../../data';

// console.log('ID yang diterima:', id);


</script>

<style scoped>
.PaketWisata{
    padding-top: 100px !important;
    overflow-y: auto;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.card-img-top {
    height: 200px;
    object-fit: cover;
}
/* .shadow:hover{
    transform: scale(1.1);
    transition: transform .3s ease;
} */

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
}

.card-text {
    font-size: 0.9rem;
}

/* p {
    margin: 0.5rem 0;
} */

.btn {
    width: 100%;
}

@media (min-width: 768px) {
    .col-md-4 {
        height: 100%;
    }
    
    .card {
        height: 100%;
    }
}

.row {
    display: flex;
    flex-wrap: wrap;
}

</style>