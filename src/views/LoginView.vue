<template>
    <div>
        <section class="hubungi">
          <div class="container py-5 h-100">
            
            <div class="row d-flex align-items-center h-100">
              <div class="text-center my-5">
                <div class="fs-2 mt-5 fw-semibold">
                  Kami Siap Membantu Anda
                </div>

                <div class="fs-5 my-4">
                  Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut mengenai layanan kami, jangan ragu untuk menghubungi kami melalui form di halaman ini.
                </div>
              </div>

              <!-- keterangan-->
              <div class="row d-flex justify-content-evenly my-3">
                <div class="col-12 col-md-3 bg-primary-subtle rounded m-2 p-3">
                  <div class="fs-4 fw-medium d-flex gap-3 align-items-center"><i class="fa-solid fa-envelope"></i>Email
                  </div>
                  <div class="fs-5">wisatantt@gmail.com</div>
                </div>

                <div class="col-12 col-md-3 bg-primary-subtle rounded m-2 p-3">
                  <div class="fs-4 fw-medium d-flex gap-3 align-items-center"><i class="fa-solid fa-phone"></i>No.Hp</div>
                  <div class="fs-5">0852-4225-5919</div>
                </div>
                <div class="col-12 col-md-3 bg-primary-subtle rounded m-2 p-3">
                  <div class="fs-4 fw-medium d-flex gap-3 align-items-center"><i class="fa-solid fa-location-dot"></i>Alamat</div>
                  <div class="fs-5 text-">Ende. Nusa Tenggara Timur</div>
                </div>
              </div>
              
              <div class="col-md-8 col-lg-7 col-xl-6">
                <img src="../assets/bg-layanan3.png"
                  class="img-fluid" alt="Phone image">
              </div>
              <div class="col-md-4 col-lg-6 col-xl-6 mx-auto mt-3">
                    <h4 class="text-uppercase mb-4 font-weight-bold">Hubungi Kami</h4>
                    <form>
                    <div class="form-group my-2">
                        <input type="text" class="form-control" placeholder="Nama Lengkap" required>
                    </div>
                    <div class="form-group my-2">
                        <input type="email" class="form-control" placeholder="Email" required>
                    </div>
                    <div class="form-group my-2">
                        <textarea class="form-control" rows="3" placeholder="Pesan" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Kirim Pesan</button>
                    </form>
                </div>
            </div>
          </div>

          <div class="container-fluid" id="hubungiKami">
            <footer class="bg-Primary text-white mt-5">
            <div class="container text-center text-md-end">
                <div class="row text-center text-md-end justify-content-end">
                <!-- About -->
                <div class="col-md-3 col-lg-3 col-xl-3 my-1 mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold">Wisata NTT</h5>
                    <p>Menawarkan pengalaman wisata yang menakjubkan di Nusa Tenggara Timur, menjelajahi destinasi tersembunyi yang mempesona.</p>
                </div>

                <!-- Links -->
                <div class="col-md-3 col-lg-3 col-xl-3 my-1  mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold">Paket Wisata</h5>
                    <p><a href="#" class="text-white text-decoration-none">Pulau Padar</a></p>
                    <p><a href="#" class="text-white text-decoration-none">Pantai Pink</a></p>
                    <p><a href="#" class="text-white text-decoration-none" >Wae Rebo</a></p>
                    <p><a href="#" class="text-white text-decoration-none">Air Terjun Tanggedu</a></p>
                </div>

                <!-- Contact -->
               

                <!-- social -->
                <div class="col-md-3 col-lg-3 col-xl-3 my-1 mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold">Ikuti Kami</h5>
                    <div class="social-icons">
                    <a href="#" class="text-white"><i class="fab fa-facebook fa-lg"></i></a>
                    <a href="#" class="text-white"><i class="fab fa-instagram fa-lg"></i></a>
                    <a href="#" class="text-white"><i class="fab fa-twitter fa-lg"></i></a>
                    <a href="#" class="text-white"><i class="fab fa-youtube fa-lg"></i></a>
                    </div>
                </div>
                </div>
                <hr class="mb-4">
                <div class="row align-items-center">
                <div class="col-md-7 col-lg-8">
                    <p class="text-start text-md-left">© 2024 Wisata Nusa Tenggara Timur.</p>
                </div>
                <div class="col-md-5 col-lg-4">
                    <p class="text-right text-md-right">Designed by <a href="#" class="text-white">ryawati kari</a></p>
                </div>
                </div>
            </div>
          </footer>
        </div>
        </section>

    </div>
</template>

<script setup>
</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
 /* footer */
 footer {
    background: #40407a !important;
    color: white;
}
.hubungi{
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: normal;
}
footer a {
    color: #ACCE22;
    transition: 0.3s;
}
footer a:hover {
  text-decoration: none;
  color: #ffffff;
}
footer h5 {
  letter-spacing: 1px;
  position: relative;
  padding-bottom: 10px;
}

    footer h5::after {
        content: '';
        width: 50px;
        height: 2px;
        background: #ACCE22;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .social-icons a {
        margin: 0 10px;
    }

    .social-icons a:hover {
        color: #ACCE22;
    }

    .btn-accent {
        background-color: #ACCE22;
        border: none;
        color: #ffffff;
        transition: 0.3s;
    }

    .btn-accent:hover {
        background-color: #ffffff;
        color: #000000;
    }

    hr {
        background-color: #ACCE22;
        height: 2px;
    }

</style>