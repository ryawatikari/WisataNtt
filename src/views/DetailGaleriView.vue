<template>
    <div>
        <div class="container mt-5" v-if="galeriTerpilih">
            <div class="title">
                <div class="fs-5">
                    {{ galeriTerpilih.judul }}
                </div>
                <div class="fs-6">

                </div>

                <!-- carousel -->
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-12 col-lg-6 mt-5 mb-5">
                        <div class="big-image">
                            <div :id="'carouselExampleCaptions' + galeriTerpilih.id" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item"
                                v-for="(imgData, imgIndex) in galeriTerpilih.image"
                                :key="imgIndex"
                                :class="{ active: imgIndex === 0 }"
                                >
                                <img :src="imgData.img" class="d-block w-100" :alt="'image' + (imgIndex + 1)" />
                                <div class="carousel-caption d-none d-md-block">
                                    <!-- <h5>Pantai Liman</h5>
                                    <p>Some representative placeholder content for the first slide.</p> -->
                                </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" :data-bs-target="'#carouselExampleCaptions' + galeriTerpilih.id" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleCaptions' + galeriTerpilih.id" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="row d-flex justify-content-center">
                    <div class="col-12 col-lg-8 mt-3">
                        <div class="fs-5">
                            {{ galeriTerpilih.paragraf }}
                        </div>

                        <div class="fs-4 fw-bold mt-3">
                           {{ galeriTerpilih.keistimewaan }}
                        </div>

                        <div class="fs-5">
                            <ul>
                                <li>
                                    <div class="fs-sm fw-bold mt-2">{{ galeriTerpilih.judulPertama }}</div>
                                    {{ galeriTerpilih.pertama }}
                                </li>
                                <li>
                                    <div class="fs-sm fw-bold mt-2">{{ galeriTerpilih.judulKedua }}</div>
                                    {{ galeriTerpilih.kedua }}
                                </li>
                                <li>
                                    <div class="fs-sm fw-bold mt-2">{{ galeriTerpilih.judulKetiga }}</div>
                                    {{ galeriTerpilih.ketiga }}
                                </li>
                                <li>
                                    <div class="fs-sm fw-bold mt-2">{{ galeriTerpilih.judulKeempat }}</div>
                                    {{ galeriTerpilih.keempat }}
                                </li>
                            </ul>
                        </div>

                        <div class="fs-4 fw-bold">
                            {{ galeriTerpilih.hargaTiketBiaya }}
                        </div>

                        <!-- informasi harga tiket masuk -->
                       <div class="fs-5">
                        <ul class="mt-3">
                            <li>
                                <div class="fs-sm fw-bold mt-2">{{ galeriTerpilih.judulTiketMasuk }}</div>
                                {{ galeriTerpilih.informasiTiketMasuk }}
                            </li>
                            <li>
                                <div class="fs-sm fw-bold mt-2">{{ galeriTerpilih.judulPemandu }}</div>
                                {{ galeriTerpilih.informasiPemandu }}
                            </li>
                            <li>
                                <div class="fs-sm fw-bold mt-2">{{ galeriTerpilih.judulBiaya }}</div>
                                {{ galeriTerpilih.informasiBiaya }}
                            </li>
                        </ul>
                       </div> 

                       <!-- informasi fasilitas -->
                        <div class="fs-4 fw-bold">
                            {{ galeriTerpilih.judulFasilitas }}
                        </div>
                        <div class="fs-5">
                            <ul class="mt-3">
                                <li>
                                    <div class="fs-sm fw-bold mt-2">{{ galeriTerpilih.judulInfoSatu }}</div>
                                    {{ galeriTerpilih.infoSatu }}
                                </li>
                                <li>
                                    <div class="fs-sm fw-bold mt-2">{{ galeriTerpilih.judulInfoDua }}</div>
                                    {{ galeriTerpilih.infoDua}}
                                </li>
                                <li>
                                    <div class="fs-sm fw-bold mt-2">{{ galeriTerpilih.judulInfoTiga }}</div>
                                    {{ galeriTerpilih.infoTiga }}
                                </li>
                                <li>
                                    <div class="fs-sm fw-bold mt-2">{{ galeriTerpilih.judulInfoEmpat }}</div>
                                    {{ galeriTerpilih.infoEmpat }}
                                </li>
                                <li>
                                    <div class="fs-sm fw-bold mt-2">{{ galeriTerpilih.judulInfoLima }}</div>
                                    {{ galeriTerpilih.infoLima }}
                                </li>
                            </ul>
                        </div>

                        <div class="fs-5 mt-2">
                            {{ galeriTerpilih.penutupInfo }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { DetailGaleri } from '../../data';

  
  // Ambil ID dari route
  const route = useRoute();
  const galeriTerpilih = ref(null);
  
  const ambilDataGaleri = () => {
    const idGaleri = parseInt(route.params.id);
    galeriTerpilih.value = DetailGaleri.find((item) => item.id === idGaleri);
  };
  
  onMounted(() => {
    ambilDataGaleri();
  });
</script>

<style scoped>

</style>