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

                    <h4 class="card-title">List User Aktif</h4>
                    <div style="width: 10%;" class="buttons mt-4">
                        <nuxt-link to="/user/add"><button class="btn btn-primary btn-nm">Add User</button></nuxt-link>
                    </div>
                    <div class="row mt-4">

                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" style="width: 1%">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col" style="width: 7%;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in user.data" :key="index" :value="item">
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>{{ item.role_name }}</td>
                                    <td><nuxt-link :to="`/user/edit?id=${item.id}`">Edit</nuxt-link> | Delete</td>
                                </tr>


                            </tbody>
                        </table>


                    </div>
                    <div class="row justify-content-between mt-3">
                        <div id="user-list-page-info" class="col-md-6">
                            <span>Showing {{ user.from }} to {{ user.to }} of
                                {{ user.total }} entries</span>
                        </div>
                        <div class="col-md-6">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-end">
                                    <li class="page-item" :class="{ disabled: !user.prev_page_url || loading }">
                                        <button @click="prev" class="btn page-link"
                                            :disabled="!user.prev_page_url || loading">
                                            Previous
                                        </button>
                                    </li>
                                    <li class="page-item active">
                                        <button class="page-link">
                                            {{ user.current_page }}
                                        </button>
                                    </li>
                                    <li class="page-item" :class="{ disabled: !user.next_page_url || loading }">
                                        <button @click="next" :disabled="!user.next_page_url || loading"
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

const user = ref({
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



const loading = ref(false);

onMounted(() => {
    fetchUserData();
});

const next = () => {
    loading.value = true
    user.value.current_page++
    fetchUserData
};
const prev = () => {
    loading.value = true
    user.value.current_page--
    fetchUserData
};

const fetchUserData = async () => {
    try {
        loading.value = true;


        const token = useCookie('token');
        const response = await axios.get('http://127.0.0.1:8000/api/user', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });

        user.value = response.data.data;

        console.log(user.value);

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


</script>