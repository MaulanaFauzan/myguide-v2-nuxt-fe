<template>
    <div class="container">
        <div class="card mt-5">
            <div class="card-header">
                <h4 class="card-title">Add User</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nama</label>
                        <input v-bind:readonly="true" v-model="transaction.customer.name" type="text"
                            class="form-control" id="InputNama" placeholder="Masukkan Nama">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input v-bind:readonly="true" v-model="transaction.customer.email" type="email"
                            class="form-control" id="InputEmail" placeholder="Masukkan Email">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Nama TourGuide</label>
                        <input v-bind:readonly="true" v-model="transaction.tourguide.name" type="text"
                            class="form-control" id="InputGuide" placeholder=" ">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Tujuan Destinasi</label>
                        <input v-bind:readonly="true" v-model="transaction.destinasi.name" type="text"
                            class="form-control" id="Destinasi" placeholder=" ">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Tanggal kunjungan</label>
                        <input v-model="transaction.tanggal" type="date" class="form-control" id="InputPass"
                            placeholder="Masukkan Password">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Metode pembayaran</label>
                        <br />
                        <div class="btn-group dropdown me-1 mb-1">

                            <select v-model="transaction.metode_pembayaran" class="form-select"
                                aria-label="Disabled select example">
                                <option disabled selected hidden>Pilih metode pembayaran</option>
                                <option value="cash">Tunai</option>
                                <option value="nontunai">NonTunai</option>
                            </select>
                        </div>
                    </div>

                    <br />
                    <br />
                    <div class="buttons">
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>
                <div class="buttons">
                    <nuxt-link to="/user"><button class="btn btn-danger btn-nm">Cancel</button></nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: '1-column'
});
useHead({
    title: 'GAMA - Begin Transaction',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ]
})
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import axios from 'axios';

const transaction = ref({
    customer: [],
    destinasi: [],
    tourguide: [],
    tanggal: '',
    metode_pembayaran: ''
});

const fetchCustomer = async () => {
    try {
        loading.value = true;

        const route = useRoute();
        const token = useCookie('token');
        const response = await axios.get('https://api.portodev.my.id/api/user/' + route.query.customer_id, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });

        transaction.value.customer = response.data.data;
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

const fetchTourguide = async () => {
    try {
        loading.value = true;

        const route = useRoute();
        const token = useCookie('token');
        const response = await axios.get('https://api.portodev.my.id/api/user/' + route.query.tourguide_id, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });

        transaction.value.tourguide = response.data.data;
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

const fetchDestination = async () => {
    try {
        loading.value = true;

        const route = useRoute();
        const token = useCookie('token');
        const response = await axios.get('https://api.portodev.my.id/api/wisata/' + route.query.product_id, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });

        transaction.value.destinasi = response.data.data;
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


onMounted(() => {
    fetchCustomer()
    fetchTourguide()
    fetchDestination()
});


const loading = ref(false);
const onSubmit = async () => {
    try {
        const update = await Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you to book this destination?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        });
        if (update.isConfirmed) {
            loading.value = true;
            Swal.fire({
                title: 'Creating Transaction',
                html: 'Please wait...',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });
            const userPost = ref({
                customer_id: transaction.value.customer.id,
                tourguide_id: transaction.value.tourguide.id,
                product_id: transaction.value.destinasi.id,
                tanggal_wisata: transaction.value.tanggal,
                metode_pembayaran: transaction.value.metode_pembayaran
            });
            const token = useCookie('token');
            await axios.post(`https://api.portodev.my.id/api/transaction`, userPost.value, {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                },
            });

            loading.value = false;
            if (!loading.value) {
                Swal.close();
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'User registered successfully.',
                });
                const router = useRouter();
                router.back()

            }
        }

    } catch (error) {
        console.error('Error updating user profile:', error);
        loading.value = false;
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to update profile. Please try again later.',
        });
    }
};
</script>
