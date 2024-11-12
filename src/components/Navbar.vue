<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid ">
            
            <a class="navbar-brand" href="#">Surga Timur</a>
            <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul class="navbar-nav ">
                        <li class="nav-item p-2">
                        <a class="nav-link active" aria-current="page" href="http://localhost:5173/home">Profil</a>
                        </li>
                        <li class="nav-item p-2">
                        <a class="nav-link" href="galeri">Galeri</a>
                        </li>
                        <li class="nav-item dropdown p-2">
                        <a class="nav-link dropdown-toggle" href="http://localhost:5173/paketWisata" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Paket Wisata
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="http://localhost:5173/paketWisata">Sewa Transportasi</a></li>
                            <li><a class="dropdown-item" href="http://localhost:5173/testimoni">Testimoni Pengunjung</a></li>
                        </ul>
                        </li>
                        <li class="nav-item p-2">
                        <a class="nav-link" href="#hubungiKami">Hubungi kami</a>
                        </li>
                    </ul>

                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

             
                <!-- <li class="nav-item p-2 ">
                    <a href="" class="nav-link text-end">login</a>
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
    .navbar-toggler-icon{
        width: 100% !important;
        height: auto;
        background-image: url(../assets/hamburger-menu.png) !important;
    }
    .nav-link{
        font-size: 20px;
        color:  #c7ecee !important;
        font-family: "Rethink Sans", sans-serif;
    }
    .nav-link:hover{
        color: #d3e5e6 !important;
    }
    .akun{
        background: #82ccdd;
        color: #ffff;
    }
    .akun, .nav-link{
        color: #ffff !important;
    }
</style>

