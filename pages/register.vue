<template>
    <div class="container">
        <div class="card mt-5">
            <div class="card-header">
                <h4 class="card-title">Register User</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nama</label>
                        <input v-model="user.data.name" type="text" class="form-control" id="InputNama"
                            placeholder="Masukkan Nama">
                        <small id="emailHelp" class="form-text text-muted">Ini akan mengubah Nama User.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input v-model="user.data.email" type="email" class="form-control" id="InputEmail"
                            placeholder="Masukkan Nama">
                        <small id="emailHelp" class="form-text text-muted">Ini akan mengubah Email User.</small>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">password</label>
                        <input v-model="user.data.password" type="password" class="form-control" id="InputPass"
                            placeholder="Masukkan Password">

                        <small id="emailHelp" class="form-text text-muted">Gunakan kombinasi huruf kapital.</small>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">confirm password</label>
                        <input v-model="user.data.password_confirmation" type="password" class="form-control"
                            id="InputPassConfirm" placeholder="Masukkan Password">

                        <small id="emailHelp" class="form-text text-muted">Gunakan kombinasi huruf kapital.</small>
                    </div>



                    <br />
                    <br />
                    <div class="buttons">
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                </form>

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

const loading = ref(false);
const onSubmit = async () => {
    try {
        const update = await Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want add this user?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        });
        if (update.isConfirmed) {
            loading.value = true;
            Swal.fire({
                title: 'Saving User',
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
                password_confirmation: user.value.data.password_confirmation,
                roles_id: '2',
            });
            const token = useCookie('token');
            await axios.post(`https://api.portodev.my.id/api/register`, userPost.value);

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
