<template>
    <div class="page-heading">
        <div class="page-title">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>List Wisata</h3>
                    <p class="text-subtitle text-muted">Terbaru </p>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><nuxt-link to="/">Dashboard</nuxt-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Layout Default</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <section class="section">
            <div class="row">
                <div v-for="(item, index) in  destination.data " :key="index" :value="item" class="card col-md-3"
                    style="margin-right: 80px; margin-left: 50px;">
                    <div class="card-content">
                        <img :src="`https://api.portodev.my.id/${item.image}`" width="200" height="200"
                            class="card-img-top img-fluid" alt="singleminded">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                    <label for="tourguide">Info Wisata:</label>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Alamat Wisata : </b>{{ item.alamat }}</li>
                        <li class="list-group-item"><b>Harga Tiket Masuk : </b>{{ item.price }}</li>

                    </ul>
                    <label for="tourguide">Info Tourguide:</label>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Tourguide Name : </b>{{ item.tourguide_name }}</li>
                        <li class="list-group-item"><b>Email : </b>{{ item.tourguide_email }}</li>

                    </ul>
                    <div class="buttons">
                        <nuxt-link
                            :to="`/order/add?customer_id=${me.user_id}&tourguide_id=${item.tourguide_id}&product_id=${item.id}`"><button
                                class="btn btn-outline-primary btn-nm">Order
                                Sekarang</button></nuxt-link>
                    </div>
                </div>
                <!-- <div class="card col-md-3" style="margin-right: 80px;">
                    <div class="card-content">
                        <img src="~assets/images/samples/motorcycle.jpg" class="card-img-top img-fluid"
                            alt="singleminded">
                        <div class="card-body">
                            <h5 class="card-title">Be Single Minded</h5>
                            <p class="card-text">
                                Chocolate sesame snaps apple pie danish cupcake sweet roll jujubes tiramisu.Gummies
                                bonbon apple pie fruitcake icing biscuit apple pie jelly-o sweet roll.
                            </p>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div class="buttons" style="margin-left: auto; margin-right: auto">
                        <a href="#" class="btn btn-outline-primary">Primary</a>
                    </div>
                </div>
                <div class="card col-md-3" style="margin-right: 80px;">
                    <div class="card-content">
                        <img src="~assets/images/samples/motorcycle.jpg" class="card-img-top img-fluid"
                            alt="singleminded">
                        <div class="card-body">
                            <h5 class="card-title">Be Single Minded</h5>
                            <p class="card-text">
                                Chocolate sesame snaps apple pie danish cupcake sweet roll jujubes tiramisu.Gummies
                                bonbon apple pie fruitcake icing biscuit apple pie jelly-o sweet roll.
                            </p>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div class="buttons" style="margin-left: auto; margin-right: auto">
                        <a href="#" class="btn btn-outline-primary">Primary</a>
                    </div>
                </div>
                <div class="card col-md-3" style="margin-right: 80px; margin-left: 50px">
                    <div class="card-content">
                        <img src="~assets/images/samples/motorcycle.jpg" class="card-img-top img-fluid"
                            alt="singleminded">
                        <div class="card-body">
                            <h5 class="card-title">Be Single Minded</h5>
                            <p class="card-text">
                                Chocolate sesame snaps apple pie danish cupcake sweet roll jujubes tiramisu.Gummies
                                bonbon apple pie fruitcake icing biscuit apple pie jelly-o sweet roll.
                            </p>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div class="buttons" style="margin-left: auto; margin-right: auto">
                        <a href="#" class="btn btn-outline-primary">Primary</a>
                    </div>
                </div>
                <div class="card col-md-3" style="margin-right: 80px;">
                    <div class="card-content">
                        <img src="~assets/images/samples/motorcycle.jpg" class="card-img-top img-fluid"
                            alt="singleminded">
                        <div class="card-body">
                            <h5 class="card-title">Be Single Minded</h5>
                            <p class="card-text">
                                Chocolate sesame snaps apple pie danish cupcake sweet roll jujubes tiramisu.Gummies
                                bonbon apple pie fruitcake icing biscuit apple pie jelly-o sweet roll.
                            </p>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div class="buttons" style="margin-left: auto; margin-right: auto">
                        <a href="#" class="btn btn-outline-primary">Primary</a>
                    </div>
                </div>
                <div class="card col-md-3" style="margin-right: 80px;">
                    <div class="card-content">
                        <img src="~assets/images/samples/motorcycle.jpg" class="card-img-top img-fluid"
                            alt="singleminded">
                        <div class="card-body">
                            <h5 class="card-title">Be Single Minded</h5>
                            <p class="card-text">
                                Chocolate sesame snaps apple pie danish cupcake sweet roll jujubes tiramisu.Gummies
                                bonbon apple pie fruitcake icing biscuit apple pie jelly-o sweet roll.
                            </p>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div class="buttons" style="margin-left: auto; margin-right: auto">
                        <a href="#" class="btn btn-outline-primary">Primary</a>
                    </div>
                </div> -->
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import axios from 'axios';
useHead({
    title: 'GAMA - Order Destination',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ]
})
const destination = ref({
    data: [],

});

const me = ref({ user_id: '' });
const fetchMe = async () => {
    try {
        loading.value = true;


        const token = useCookie('token');
        const response = await axios.get('https://api.portodev.my.id/api/me', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });

        me.value.user_id = response.data.data.user.id;
        // me.value.user = response.data.data.user;


        loading.value = false;


    } catch (error) {
        console.error('Error fetching user data:', error);
        loading.value = false;
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to fetch user data. Please try again later.',
        });
    }
};


const loading = ref(false);

onMounted(() => {
    fetchdestinationData();
    fetchMe();
});



const fetchdestinationData = async () => {
    try {
        loading.value = true;


        const token = useCookie('token');
        const response = await axios.get('https://api.portodev.my.id/api/getWisata', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });

        destination.value.data = response.data.data;

        console.log(destination.value);

        loading.value = false;


    } catch (error) {
        console.error('Error fetching destination data:', error);
        loading.value = false;
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to fetch destination data. Please try again later.',
        });
    }
};


</script>
