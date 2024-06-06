<style media="screen">
body {
    /* background-image: url("~/assets/img/background.png"); */
    background-repeat: no-repeat;
    background-size: cover;
}

.background {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
}

.formLogin {
    height: 520px;
    width: 430px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
}

form * {
    font-family: "Poppins", sans-serif;
    color: #000000;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

form h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label {
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}

input {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}

::placeholder {
    color: #000000;
}

button {
    margin-top: 50px;
    width: 100%;
    background-color: #131ba4;
    color: #FFFF;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}

.social {
    margin-top: 30px;
    display: flex;
}

.social div {
    background: red;
    width: 150px;
    border-radius: 3px;
    padding: 5px 10px 10px 5px;
    background-color: rgba(255, 255, 255, 0.27);
    color: #eaf0fb;
    text-align: center;
}

.social div:hover {
    background-color: rgba(255, 255, 255, 0.47);
}

.social .fb {
    margin-left: 25px;
}

.social i {
    margin-right: 4px;
}
</style>
<template>
    <div>
        <div>
            <div>
                <div class="bg"></div>

                <div class="main">
                    <div class="container-scroller">
                        <form @submit.prevent="login" class="formLogin">
                            <h3>Login Here</h3>

                            <label for="username">Email</label>
                            <input type="text" placeholder="Email" id="Email" v-model="user.email" />

                            <label for="password">Password</label>
                            <input type="password" placeholder="Password" v-model="user.password" id="password" />
                            <div>
                                <button>Log In</button>
                                Don't have account? <nuxt-link to="/register"><u>register here</u></nuxt-link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
// /// <reference types='google.accounts' />
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";
import Swal from "sweetalert2";
useHead({
    title: 'GAMA - Login',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ]
})
definePageMeta({
    layout: 'noauth',
})
const { authenticateUser } = useAuthStore();

const { authenticated } = storeToRefs(useAuthStore());

const user: any = ref({
    email: "",
    password: "",
});
const router = useRouter();

const login = async () => {
    await authenticateUser(user.value);




};


</script>
