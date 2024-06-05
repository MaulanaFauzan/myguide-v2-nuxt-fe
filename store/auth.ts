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
      // useFetch from nuxt 3
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
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      const user = useCookie("user"); // useCookie new hook in nuxt 3
      user.value = data.value.data.user;
      token.value = data.value.data.token;
      this.loading = pending;
      console.log(data);

      if (data.value) {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        const user = useCookie("user"); // useCookie new hook in nuxt 3
        user.value = data.value.data.user;
        token.value = data.value.data.token; // set token to cookie
        if (token.value) {
          this.authenticated = true; // set authenticated  state value to true
        }
      }
    },
    async authenticateUserOauth(userOauth: any) {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      const user = useCookie("user"); // useCookie new hook in nuxt 3
      user.value = userOauth;
      token.value = userOauth._token; // set token to cookie
      if (token.value) {
        this.authenticated = true; // set authenticated  state value to true
      }
    },
    async registerUser({
      email,
      name,
      password,
      address,
      confirmPassword,
      role,
    }: UserPayloadInterface) {
      const config = useRuntimeConfig();
      const { data, pending }: any = await useFetch(
        `http://127.0.0.1/api/register`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            name,
            email,
            address,
            password,
            confirmPassword,
            role,
          },
        }
      );
      this.loading = pending;

      if (data.value.data) {
        const token = useCookie("token");
        token.value = data?.value?.data?.access_token;
        this.authenticated = true;
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
