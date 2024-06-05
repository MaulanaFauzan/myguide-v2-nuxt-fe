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
                        <input type="text" class="form-control" id="InputNama" placeholder="Masukkan Nama">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="InputEmail" placeholder="Masukkan Email">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Nama TourGuide</label>
                        <input type="text" class="form-control" id="InputGuide" placeholder=" ">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Tujuan Destinasi</label>
                        <input type="text" class="form-control" id="Destinasi" placeholder=" ">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Tanggal kunjungan</label>
                        <input type="date" class="form-control" id="InputPass" placeholder="Masukkan Password">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Metode pembayaran</label>
                        <br />
                        <div class="btn-group dropdown me-1 mb-1">

                            <select class="form-select" aria-label="Disabled select example">
                                <option disabled selected hidden>Pilih metode pembayaran</option>
                                <option value="1">Tunai</option>
                                <option value="3">NonTunai</option>
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
                roles_id: user.value.data.roles_id,
            });
            const token = useCookie('token');
            await axios.post(`https://api.portodev.my.id/api/user/register`, userPost.value, {
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
