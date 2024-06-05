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

                    <h4 class="card-title">List Destinasi Aktif</h4>
                    <div v-if="me.roles_id != 2" style="width: 10%;" class="buttons mt-4">
                        <button class="btn btn-primary btn-nm">Add Destinasi</button>
                    </div>
                    <div class="row mt-4">

                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" style="width: 1%">No</th>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Destination</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Description</th>
                                    <th v-if="me.roles_id != 2" scope="col" style="width: 7%;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in destination.data" :key="index" :value="item">
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td v-if="item.image"><img :src="`https://api.portodev.my.id/${item.image}`"
                                            width="200" height="200" alt=""></td>
                                    <td v-else>Image Not-Set</td>
                                    <td>{{ item.name }}</td>
                                    <td>Rp. {{ item.price }}</td>
                                    <td>{{ item.alamat }}</td>
                                    <td>{{ item.description }}</td>
                                    <td v-if="me.roles_id != 2"><nuxt-link
                                            :to="`/destination/edit?id=${item.id}`">Edit</nuxt-link> | <a
                                            style="color:blue" @click="deletedestination(item.id)">Delete</a></td>

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

const deletedestination = async (id) => {
    const deletedestination = await Swal.fire({
        title: 'Confirmation',
        text: 'Are you sure to delete this destination?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    });
    if (deletedestination.isConfirmed) {
        loading.value = true;
        Swal.fire({
            title: 'Deleting destination',
            html: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            },
        });

        const token = useCookie('token');
        await axios.delete(`https://api.portodev.my.id/api/wisata/` + id, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        }).then(response => {
            loading.value = false;
            if (!loading.value) {
                Swal.close();

                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'destination registered successfully.',
                });

            }
            setTimeout(location.reload.bind(location), 3000);
        });


    }

}

const next = () => {
    loading.value = true
    destination.value.current_page++
    fetchdestinationData
};
const prev = () => {
    loading.value = true
    destination.value.current_page--
    fetchdestinationData
};

const fetchdestinationData = async () => {
    try {
        loading.value = true;


        const token = useCookie('token');
        const response = await axios.get('https://api.portodev.my.id/api/wisata', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });

        destination.value = response.data.data;

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