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

definePageMeta({
    layout: 'noauth',
})
const { authenticateUser } = useAuthStore(); // use auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const user: any = ref({
    email: "",
    password: "",
});
const router = useRouter();

const login = async () => {
    await authenticateUser(user.value);
    // redirect to homepage if user is authenticated
    console.log("auth", authenticated);
    if (authenticated.value) {
        Swal.fire({
            title: "Success",
            text: "Login Success!",
            icon: "success",
            confirmButtonText: "OK",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //Swal.fire("Saved!", "", "success");
                router.push("/");
            }
        });
    } else if (!authenticated.value) {
        Swal.fire({
            title: "Failed!",
            text: "Wrong email or password!",
            icon: "error",
            confirmButtonText: "Try Again!",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //Swal.fire("Saved!", "", "success");
                router.push("/login");
            }
        });
    }
};

// import {
//     GoogleSignInButton,
//     type CredentialResponse,
// } from "vue3-google-signin";
// import { decodeCredential } from "vue3-google-signin";
// // handle success event
// const handleLoginSuccess = async (response: CredentialResponse) => {
//     let { credential } = response;
//     credential = credential !== undefined ? credential : "false";
//     if (credential != "false") {
//         const decodedCredential = decodeCredential(credential);
//         console.log(decodedCredential);
//         const url = `http://localhost:9090/user/OAuthGoogle?${getQueryParams(
//             decodedCredential
//         )}`;
//         window.location.href = url;
//     }
// };

// const getQueryParams = (obj: any) => {
//     const params = new URLSearchParams();
//     for (const key in obj) {
//         params.append(key, obj[key]);
//     }
//     return params.toString();
// };
// // handle an error event
// const handleLoginError = () => {
//     console.error("Login failed");
// };
</script>
