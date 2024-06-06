import { defineStore } from "pinia";
import Swal from "sweetalert2";

interface UserPayloadInterface {
  email: string;
  name: string;
  password: string;
  address: string;
  confirmPassword: string;
  role: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    setLoggedIn(authenticated: boolean): void {
      this.authenticated = authenticated;
    },

    async authenticateUser({ email, password }: UserPayloadInterface) {
      Swal.fire({
        title: "Checking credentials!",
        html: "Please wait...",
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });
      const { data, pending }: any = await useFetch(
        "https://api.portodev.my.id/api/login",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            email,
            password,
          },
        }
      );

      const token = useCookie("token");
      const user = useCookie("user");
      this.loading = pending;
      const router = useRouter();
      Swal.close();

      if (data.value != null) {
        user.value = data.value.data.user;
        token.value = data.value.data.token;
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Wrong email or password!",
          icon: "error",
          confirmButtonText: "Try Again!",
        }).then((result) => {
          if (result.isConfirmed) {
            router.push("/login");
          }
        });
      }

      if (data.value != null) {
        Swal.fire({
          title: "Success",
          text: "Login Success!",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          router.push("/");
        });
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        const user = useCookie("user"); // useCookie new hook in nuxt 3
        user.value = data.value.data.user;
        token.value = data.value.data.token; // set token to cookie
        if (token.value) {
          this.authenticated = true; // set authenticated  state value to true
        }
      }
    },

    logUserOut() {
      Swal.fire({
        icon: "question",
        title: "Confirmation",
        text: "Are you sure you want to logout?",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          this.authenticated = false; // set authenticated  state value to false
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Logout successfully!",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              const token = useCookie("token");
              const user = useCookie("user");
              user.value = null;
              token.value = null;
              const router = useRouter();
              router.push("/login");
            }
          });
        }
      });
    },
  },
});
