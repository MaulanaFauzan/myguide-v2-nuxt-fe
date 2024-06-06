<template>
    <div class="container">
        <div class="card mt-5">
            <div class="card-header">
                <h4 class="card-title">Edit User</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nama</label>
                        <input v-model="user.data.name" type="text" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Masukkan Nama">
                        <small id="emailHelp" class="form-text text-muted">Ini akan mengubah Nama User.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input v-model="user.data.email" type="email" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Masukkan Nama">
                        <small id="emailHelp" class="form-text text-muted">Ini akan mengubah Email User.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">password</label>
                        <input v-model="user.data.password" type="password" class="form-control" id="InputPass"
                            placeholder="Masukkan Password">

                        <small id="emailHelp" class="form-text text-muted">Gunakan kombinasi huruf kapital.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Role User</label>
                        <br />
                        <div class="btn-group dropdown me-1 mb-1">

                            <select v-model="user.data.roles_id" class="form-select"
                                aria-label="Disabled select example">
                                <option disabled selected hidden>Please select a role</option>
                                <option value="1">Admin</option>
                                <option value="3">TourGuide</option>
                                <option value="2">User</option>
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
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import axios from 'axios';

const user = ref({
    data: []
});
useHead({
    title: 'GAMA - Edit User',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ]
})






const loading = ref(false);

onMounted(() => {
    fetchUserData();
});

const fetchUserData = async () => {
    try {
        const route = useRoute();


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
        const token = useCookie('token');
        const response = await axios.get('https://api.portodev.my.id/api/user/edit/' + route.query.id, {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });

        user.value.data = response.data.data;
        // me.value.user = response.data.data.user;


        loading.value = false;

        Swal.close();


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



const onSubmit = async () => {
    try {
        const update = await Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want to change your data?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        });
        if (update.isConfirmed) {
            loading.value = true;
            Swal.fire({
                title: 'Updating Profile',
                html: 'Please wait...',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });
            const userPost = ref({

                name: user.value.data.name,
                email: user.value.data.email,
                password: user.value.data.password,
                roles_id: user.value.data.roles_id,
            });

            const token = useCookie('token');
            await axios.post(`https://api.portodev.my.id/api/user/edit/` + user.value.data.id, userPost.value, {
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
                    text: 'Profile updated successfully.',
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