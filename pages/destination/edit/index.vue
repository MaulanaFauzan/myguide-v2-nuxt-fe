<template>
    <div class="container">
        <div class="card mt-5">
            <div class="card-header">
                <h4 class="card-title">Edit Destinasi</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="onSubmit" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nama Destinasi</label>
                        <input v-model="destination.data.name" type="text" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Masukkan Nama">
                        <small id="emailHelp" class="form-text text-muted">Ini akan mengubah Nama Destinasi.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Harga Tiket</label>
                        <input v-model="destination.data.price" type="number" class="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Masukkan Nama">
                        <small id="emailHelp" class="form-text text-muted">Ini akan mengubah Harga Tiket.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Alamat</label>
                        <input v-model="destination.data.alamat" type="text" class="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Masukkan Nama">
                        <small id="emailHelp" class="form-text text-muted">Ini akan mengubah Alamat Destinasi.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Deskripsi</label>
                        <textarea v-model="destination.data.description" class="form-control"
                            id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlFile1">Example file input</label>
                        <br />
                        <input @change="handleFileChange($event)" type="file" class="form-control-file"
                            id="exampleFormControlFile1">
                    </div>

                    <br />
                    <div class="buttons">
                        <button class="btn btn-primary">Save</button>

                    </div>
                </form>
                <div class="buttons">
                    <nuxt-link to="/destination"><button class="btn btn-danger btn-nm">Cancel</button></nuxt-link>
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
    title: 'GAMA - Edit Destination',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ]
})
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import axios from 'axios';

const destination = ref({
    data: []
});

const loading = ref(false);

onMounted(() => {
    fetchdestinationData();
});

const handleFileChange = (e) => {
    destination.value.data.image = e.target.files[0];

}

const fetchdestinationData = async () => {
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
        const response = await axios.get('https://api.portodev.my.id/api/wisata/' + route.query.id, {
            headers: {
                Authorization: `Bearer ${token.value}`,

            },
        });

        destination.value.data = response.data.data;
        // me.value.destination = response.data.data.destination;
        Swal.close();

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
            const destinationPost = ref({

                name: destination.value.data.name,
                price: destination.value.data.price,
                alamat: destination.value.data.alamat,
                description: destination.value.data.description,
                image: destination.value.data.image,
            });

            const token = useCookie('token');
            await axios.post(`https://api.portodev.my.id/api/wisata/` + destination.value.data.id, destinationPost.value, {
                headers: {
                    Authorization: `Bearer ${token.value}`,
                    'Content-Type': 'multipart/form-data'
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
        console.error('Error updating destination profile:', error);
        loading.value = false;
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to update profile. Please try again later.',
        });
    }
};
</script>