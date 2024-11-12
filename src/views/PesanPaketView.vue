<template>
    <div class="pesanPaket" v-if="pesananTerpilih">
      <div class="container">
        <div class="title">
          <h4>{{ pesananTerpilih.judul }}</h4>
          <p class="card-text mt-3 d-flex gap-2">
            <i class="fas fa-map-marker-alt align-items-center"></i>{{ pesananTerpilih.lokasi }}
            <i class="fa-regular fa-star align-items-center"></i>{{ pesananTerpilih.rating }}
          </p>
        </div>
  
        <div class="row d-flex content">
            <div class="col-12 col-lg-8 mt-3 rounded-4">
                <div class="big-img">
                <div :id="'carouselExample' + pesananTerpilih.id" class="carousel slide">
                    <div class="carousel-inner">
                    <div
                        class="carousel-item"
                        v-for="(imgData, imgIndex) in pesananTerpilih.image"
                        :key="imgIndex"
                        :class="{ active: imgIndex === 0 }"
                    >
                        <img :src="imgData.img" class="d-block w-100" :alt="'image' + (imgIndex + 1)" />
                    </div>
                    </div>

                    <button
                    class="carousel-control-prev"
                    type="button"
                    :data-bs-target="'#carouselExample' + pesananTerpilih.id"
                    data-bs-slide="prev"
                    >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                    class="carousel-control-next"
                    type="button"
                    :data-bs-target="'#carouselExample' + pesananTerpilih.id"
                    data-bs-slide="next"
                    >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
                </div>
            </div>

        <div class="col-12 col-lg-4 mt-4 d-flex flex-lg-column flex-row justify-content-between">
            <div class="img m-2">
            <img :src="pesananTerpilih.statisimg1" class="img-thumbnail h-100 w-100" alt="" />
            </div>
            <div class="img m-2">
            <img :src="pesananTerpilih.statisimg2" class="img-thumbnail h-100 w-100" alt="" />
            </div>
        </div>


        <div class="description d-flex">
            <div class="row">
            <div class="col-12 col-lg-5">
                <div class="shadow p-4 mb-5 bg-white rounded">
                <div class="detail mt-4">
                    <h3>{{ pesananTerpilih.judulcard }}</h3>
                    <h6 class="mt-3">{{ pesananTerpilih.iklan }}</h6>
                    <div class="d-flex gap-2 mt-4">
                    <p><i class="fa-solid fa-house-chimney m-2"></i> {{ pesananTerpilih.waktu }}</p>
                    <p><i class="fa-regular fa-clock m-2"></i>{{ pesananTerpilih.durasi }}</p>
                    </div>
                    <div class="rincian-harga d-flex justify-content-between mt-3">
                    <div class="price">
                        <h5>Harga</h5>
                        <h4>Rp{{ pesananTerpilih.harga }}</h4>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary mt-4">Pesan Sekarang</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="desc p-5">
                <p>
                    {{ pesananTerpilih.deskripsi1 }}<br><br>
                    {{ pesananTerpilih.deskripsi2 }}<br><br>
                    {{ pesananTerpilih.deskripsi3 }}
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>

        <!-- container -->
      </div>
      <div class="page-content container"  >
            <div class="padding">
                <div class="row d-flex justify-content-between">
                    
                    <div class="col-12 col-lg-6">
                        <h4>Rincian Acara</h4>
                        <div class="timeline p-4 block mb-4">
                            <div class="tl-item active">
                                <div class="tl-dot b-warning"></div>
                                <div class="tl-content">
                                    <div class="fs-5 fw-bold">{{ pesananTerpilih.judulLokasiPenjemputan }}</div>
                                    <div class="tl-date text-muted mt-1">{{ pesananTerpilih.lokasiPenjemputan }}</div>
                                </div>
                            </div>
                            <div class="tl-item">
                                <div class="tl-dot b-primary"></div>
                                <div class="tl-content">
                                    <div class="fs-5 fw-bold">{{ pesananTerpilih.judulLokasiPertama }}</div>
                                    <div class="fs-sm">{{ pesananTerpilih.kegiatanPertama }}
                                    </div>
                                    <div class="tl-date text-muted mt-1">{{ pesananTerpilih.waktupertama }}</div>
                                </div>
                            </div>
                            <div class="tl-item">
                                <div class="tl-dot b-danger"></div>
                                <div class="tl-content">
                                    <div class="fs-5 fw-bold">{{ pesananTerpilih.judulLokasiKedua }}</div>
                                    <div class="fs-sm">{{ pesananTerpilih.kegiatanKedua }}</div>
                                    <div class="tl-date text-muted mt-1">{{ pesananTerpilih.waktuKedua }}</div>
                                </div>
                            </div>
                            <div class="tl-item">
                                <div class="tl-dot b-danger"></div>
                                <div class="tl-content">
                                    <div class="fs-5 fw-bold">{{ pesananTerpilih.judulLokasiKetiga }}</div>
                                    <div class="fs-sm">{{ pesananTerpilih.kegiatanKetiga }}</div>
                                    <div class="tl-date text-muted mt-1">{{ pesananTerpilih. waktuKetiga }}</div>
                                </div>
                            </div>
                            <div class="tl-item">
                                <div class="tl-dot b-warning"></div>
                                <div class="tl-content">
                                    <div class="fs-5 fw-bold">{{ pesananTerpilih.judulLokasiKeempat }}</div>
                                    <div class="fs-sm">{{ pesananTerpilih.kegiatanKeempat }}</div>
                                    <div class="tl-date text-muted mt-1">{{ pesananTerpilih.waktuKeempat }}</div>
                                </div>
                            </div>
                            <div class="tl-item">
                                <div class="tl-dot b-warning"></div>
                                <div class="tl-content">
                                    <div class="fs-5 fw-bold">{{ pesananTerpilih.judulLokasiKelima }}</div>
                                    <div class="fs-sm">{{ pesananTerpilih.kegiatanKelima }}</div>
                                    <div class="tl-date text-muted mt-1">{{ pesananTerpilih.waktuKelima }}</div>
                                </div>
                            </div>
                            <div class="tl-item">
                                <div class="tl-dot b-warning"></div>
                                <div class="tl-content">
                                    <div class="fs-5 fw-bold">{{ pesananTerpilih.judulLokasiKeenam }}</div>
                                    <div class="fs-sm">{{ pesananTerpilih.kegiatanKeenam }}</div>
                                    <div class="tl-date text-muted mt-1">{{ pesananTerpilih.waktuKeenam }}</div>
                                </div>
                            </div>
                            <div class="tl-item">
                                <div class="tl-dot b-warning"></div>
                                <div class="tl-content">
                                    <div class="fs-5 fw-bold">{{ pesananTerpilih.judulLokasiPengantaran }}</div>
                                    <div class="tl-date text-muted mt-1">{{ pesananTerpilih.lokasiPengantaran }}</div>
                                </div>
                            </div>
                        </div>
                        </div>

                    <div class="col-12 col-lg-6 my-4">
                        <div class="map mt-5">
                            <iframe :src="pesananTerpilih.mapsLink"  width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
               

                </div>
            </div>
        </div>

    </div>
    <div v-else>
      <p>Data tidak ditemukan.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { DetailPesanan } from '../../data';
  
  // Ambil ID dari route
  const route = useRoute();
  const pesananTerpilih = ref(null);
  
  const ambilDataPesanan = () => {
    const idPesanan = parseInt(route.params.id);
    pesananTerpilih.value = DetailPesanan.find((item) => item.id === idPesanan);
  };
  
  onMounted(() => {
    ambilDataPesanan();
  });
  </script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.pesanPaket{
    margin-top: 130px !important;
}
.title h4{
    font-family: "Poppins", serif;
    font-size: 32px;
}
.content{
    margin-top: 50px !important;
}
.big-img{
    box-sizing: border-box;
}
.img img{
    border-radius: 10px;
    box-sizing: border-box;
    width: 94% !important;
}
.card-text i{
    font-size: 20px;
}

/* description */
.description{
    margin-top: 70px;
}
.detail h6{
    line-height: 1.5;
}
.detail i {
    font-size: 20px;
}


/* timeline */
body {
    background-color: #f9f9fa
}

@media (min-width:992px) {
    .page-container {
        max-width: 1140px;
        margin: 0 auto
    }

    .page-sidenav {
        display: block !important
    }
}

.padding {
    padding: 2rem
}

.w-32 {
    width: 32px !important;
    height: 32px !important;
    font-size: .85em
}

.tl-item .avatar {
    z-index: 2
}

.circle {
    border-radius: 500px
}

.gd-warning {
    color: #fff;
    border: none;
    background: #f4c414 linear-gradient(45deg, #f4c414, #f45414)
}

.timeline {
    position: relative;
    border-color: rgba(160, 175, 185, .15);
    padding: 0;
    margin: 0
}

.p-4 {
    padding: 1.5rem !important
}

.block,
.card {
    background: #fff;
    border-width: 0;
    border-radius: .25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .05);
    margin-bottom: 1.5rem
}

.mb-4,
.my-4 {
    margin-bottom: 1.5rem !important
}

.tl-item {
    border-radius: 3px;
    position: relative;
    display: -ms-flexbox;
    display: flex
}

.tl-item>* {
    padding: 10px
}

.tl-item .avatar {
    z-index: 2
}

.tl-item:last-child .tl-dot:after {
    display: none
}

.tl-item.active .tl-dot:before {
    border-color: #448bff;
    box-shadow: 0 0 0 4px rgba(68, 139, 255, .2)
}

.tl-item:last-child .tl-dot:after {
    display: none
}

.tl-item.active .tl-dot:before {
    border-color: #448bff;
    box-shadow: 0 0 0 4px rgba(68, 139, 255, .2)
}

.tl-dot {
    position: relative;
    border-color: rgba(160, 175, 185, .15)
}

.tl-dot:after,
.tl-dot:before {
    content: '';
    position: absolute;
    border-color: inherit;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    top: 15px;
    left: 50%;
    transform: translateX(-50%)
}

.tl-dot:after {
    width: 0;
    height: auto;
    top: 25px;
    bottom: -15px;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 0;
    border-radius: 0
}

tl-item.active .tl-dot:before {
    border-color: #448bff;
    box-shadow: 0 0 0 4px rgba(68, 139, 255, .2)
}

.tl-dot {
    position: relative;
    border-color: rgba(160, 175, 185, .15)
}

.tl-dot:after,
.tl-dot:before {
    content: '';
    position: absolute;
    border-color: inherit;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    top: 15px;
    left: 50%;
    transform: translateX(-50%)
}

.tl-dot:after {
    width: 0;
    height: auto;
    top: 25px;
    bottom: -15px;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 0;
    border-radius: 0
}

.tl-content p:last-child {
    margin-bottom: 0
}

.tl-date {
    font-size: .85em;
    margin-top: 2px;
    min-width: 100px;
    max-width: 100px
}

.avatar {
    position: relative;
    line-height: 1;
    border-radius: 500px;
    white-space: nowrap;
    font-weight: 700;
    border-radius: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border-radius: 500px;
    box-shadow: 0 5px 10px 0 rgba(50, 50, 50, .15)
}

.b-warning {
    border-color: #f4c414!important;
}

.b-primary {
    border-color: #448bff!important;
}

.b-danger {
    border-color: #f54394!important;
}

</style>