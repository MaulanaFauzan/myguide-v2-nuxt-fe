<template>
    <div class="page-heading">
        <div class="page-title">
            <div class="row">

                <div class="row">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><nuxt-link to="/">Dashboard</nuxt-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Destination</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <section class="section">
            <div class="card">
                <div class="card-header">

                    <h4 class="card-title">List Transaksi</h4>


                    <div class="row mt-4">

                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" style="width: 1%">No</th>
                                    <th scope="col">Nama Wisata</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Tanggal Wisata</th>
                                    <th scope="col">Metode Pembayaran</th>
                                    <th scope="col">Nama Tourguide</th>
                                    <th scope="col">Nama Customer</th>
                                    <th v-if="me.roles_id != 2" scope="col" style="width: 7%;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in destination.data" :key="index" :value="item">
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td>{{ item.nama_wisata }}</td>
                                    <td>{{ item.harga_wisata }}</td>
                                    <td>{{ item.tanggal_wisata }}</td>
                                    <td>{{ item.metode_pembayaran }}</td>
                                    <td>{{ item.tourguide_name }}</td>
                                    <td>{{ item.customer_name }}</td>
                                    <td v-if="me.roles_id != 2"><button @click="finishOrder(item.id)"
                                            class="btn btn-success btn-nm">Selesaikan Order</button>
                                    </td>

                                </tr>


                            </tbody>
                        </table>


                    </div>
                    <div class="row justify-content-between mt-3">
                        <div id="user-list-page-info" class="col-md-6">
                            <span>Showing {{ destination.from }} to {{ destination.to }} of
                                {{ destination.total }} entries</span>
                        </div>
                        <div class="col-md-6">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-end">
                                    <li class="page-item" :class="{ disabled: !destination.prev_page_url || loading }">
                                        <button @click="prev" class="btn page-link"
                                            :disabled="!destination.prev_page_url || loading">
                                            Previous
                                        </button>
                                    </li>
                                    <li class="page-item active">
                                        <button class="page-link">
                                            {{ destination.current_page }}
                                        </button>
                                    </li>
                                    <li class="page-item" :class="{ disabled: !destination.next_page_url || loading }">
                                        <button @click="next" :disabled="!destination.next_page_url || loading"
                                            class="btn page-link">
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import axios from 'axios';
useHead({
    title: 'GAMA - List Transaction',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ]
})
const destination = ref({
    data: [],
    current_page: 1,
    last_page: 1,
    first_page: 1,
    from: 0,
    to: 0,
    per_page: 10,
    total: 10,
    next_page_url: null,
    prev_page_url: null,
});
const me = ref({ roles_id: '' });


const fetchMe = async () => {
    try {
        loading.value = true;


        const token = useCookie('token');
        const response = await axios.get('https://api.portodev.my.id/api/me', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });

        me.value.roles_id = response.data.data.user.roles_id;
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

const finishOrder = async (id) => {
    try {
        const update = await Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you to finish this transaction?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        });
        if (update.isConfirmed) {
            loading.value = true;
            Swal.fire({
                title: 'Finishing Transaction',
                html: 'Please wait...',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });
            const userPost = ref({
                is_orders_done: 1
            });
            const token = useCookie('token');
            await axios.post(`https://api.portodev.my.id/api/transaction/` + id, userPost.value, {
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
                    text: 'Transaction finished successfully.',
                });
                setTimeout(location.reload.bind(location), 3000);



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



const next = () => {
    loading.value = true
    destination.value.current_page++
    fetchdestinationData()
};
const prev = () => {
    loading.value = true
    destination.value.current_page--
    fetchdestinationData()
};

const fetchdestinationData = async () => {
    try {
        loading.value = true;
        Swal.fire({
            title: "Checking data!",
            html: "Please wait...",
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            },
        });
        const route = useRoute();

        const token = useCookie('token');
        const response = await axios.get('https://api.portodev.my.id/api/transaction?page=' + destination.value.current_page + '&id=' + route.query.id, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });

        destination.value = response.data.data;

        console.log(destination.value);

        loading.value = false;
        Swal.close();


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