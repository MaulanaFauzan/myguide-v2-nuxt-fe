<!-- <script setup lang="ts">
const optionsVisitorsProfile = {
  series: [70, 30],
  labels: ['Male', 'Female'],
  colors: ['#435ebe', '#55c6e8'],
  chart: {
    type: 'donut'
  },
  legend: {
    position: 'bottom'
  },
  plotOptions: {
    pie: {
      donut: {
        size: '30%'
      }
    }
  }
}

const optionsProfileVisit = {
  annotations: {
    position: 'back'
  },
  dataLabels: {
    enabled: false
  },
  chart: {
    type: 'bar'
  },
  fill: {
    opacity: 1
  },
  plotOptions: {
  },
  series: [{
    name: 'sales',
    data: [9, 20, 30, 20, 10, 20, 30, 20, 10, 20, 30, 20]
  }],
  colors: '#435ebe',
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
}

const optionsEurope = {
  series: [{
    name: 'series1',
    data: [310, 800, 600, 430, 540, 340, 605, 805, 430, 540, 340, 605]
  }],
  chart: {
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z", "2018-09-19T09:30:00.000Z", "2018-09-19T10:30:00.000Z", "2018-09-19T11:30:00.000Z"],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
    }
  },
  show: false,
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  colors: ['#5350e9'],
}

const optionsAmerica = {
  series: [{
    name: 'series1',
    data: [310, 800, 600, 430, 540, 340, 605, 805, 430, 540, 340, 605]
  }],
  chart: {
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z", "2018-09-19T09:30:00.000Z", "2018-09-19T10:30:00.000Z", "2018-09-19T11:30:00.000Z"],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
    }
  },
  show: false,
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  colors: ['#008b75'],
}

const optionsIndonesia = {
  series: [{
    name: 'series1',
    data: [310, 800, 600, 430, 540, 340, 605, 805, 430, 540, 340, 605]
  }],
  chart: {
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z", "2018-09-19T07:30:00.000Z", "2018-09-19T08:30:00.000Z", "2018-09-19T09:30:00.000Z", "2018-09-19T10:30:00.000Z", "2018-09-19T11:30:00.000Z"],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
    }
  },
  show: false,
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  colors: ['#dc3545'],
}
</script> -->
<template>
  <div>
    <div class="page-heading">
      <h3>Profile Statistics</h3>
    </div>
    <div class="page-content">
      <section class="row d-flex">
        <div class="col-12 col-lg-9">
          <div class="row d-flex">
            <div v-if="me.user.roles_id == 1" class="col-6 col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body px-3 py-4-5">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="stats-icon purple">
                        <i class="iconly-boldShow"></i>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <h6 class="text-muted font-semibold">Jumlah User Aktif</h6>
                      <h6 class="font-extrabold mb-0">{{ me.countUser }}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-6 col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body px-3 py-4-5">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="stats-icon blue">
                                            <i class="iconly-boldProfile"></i>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <h6 class="text-muted font-semibold">Followers</h6>
                                        <h6 class="font-extrabold mb-0">183.000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
            <div class="col-6 col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body px-3 py-4-5">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="stats-icon green">
                        <i class="iconly-boldAdd-User"></i>
                      </div>
                    </div>
                    <div v-if="me.user.roles_id == 1 || me.user.roles_id == 3" class="col-md-8">
                      <h6 class="text-muted font-semibold">Jumlah Wisata Aktif</h6>
                      <h6 class="font-extrabold mb-0">{{ me.countWisata }}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-6 col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body px-3 py-4-5">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="stats-icon red">
                        <i class="iconly-boldBookmark"></i>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <h6 class="text-muted font-semibold">Saved Post</h6>
                      <h6 class="font-extrabold mb-0">112</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
          <!-- <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h4>Profile Visit</h4>
                </div>
                <div class="card-body">
                  <client-only>
                    <apexchart height="300" :options="optionsProfileVisit" :series="optionsProfileVisit.series">
                    </apexchart>
                  </client-only>
                </div>
              </div>
            </div>
          </div> -->
          <div class="row">
            <!-- <div class="col-12 col-xl-4">
              <div class="card">
                <div class="card-header">
                  <h4>Profile Visit</h4>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-6">
                      <div class="d-flex align-items-center">
                        <i class="bi bi-circle-fill text-primary fs-8"></i>
                        <h5 class="mb-0 ms-3">Europe</h5>
                      </div>
                    </div>
                    <div class="col-6">
                      <h5 class="mb-0">862</h5>
                    </div>
                    <div class="col-12">
                      <client-only>
                        <apexchart height="80" :options="optionsEurope" :series="optionsEurope.series"></apexchart>
                      </client-only>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="d-flex align-items-center">
                        <i class="bi bi-circle-fill text-primary fs-8"></i>
                        <h5 class="mb-0 ms-3">America</h5>
                      </div>
                    </div>
                    <div class="col-6">
                      <h5 class="mb-0">375</h5>
                    </div>
                    <div class="col-12">
                      <client-only>
                        <apexchart height="80" :options="optionsAmerica" :series="optionsAmerica.series"></apexchart>
                      </client-only>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="d-flex align-items-center">
                        <i class="bi bi-circle-fill text-primary fs-8"></i>
                        <h5 class="mb-0 ms-3">Indonesia</h5>
                      </div>
                    </div>
                    <div class="col-6">
                      <h5 class="mb-0">1025</h5>
                    </div>
                    <div class="col-12">
                      <client-only>
                        <apexchart height="80" :options="optionsIndonesia" :series="optionsIndonesia.series">
                        </apexchart>
                      </client-only>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
            <div v-if="me.user.roles_id == 1" class="col-12 col-xl-8">
              <div class="card">
                <div class="card-header">
                  <h4>Last User Register</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover table-lg">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Register at</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in me.lastuser" :key="index">
                          <td class="col-3">
                            <div class="d-flex align-items-center">

                              <p class="font-bold ms-3 mb-0">{{ item.name }}</p>
                            </div>
                          </td>
                          <td class="col-auto">
                            <p class=" mb-0">{{ item.created_at }}</p>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="me.user.roles_id == 1 || me.user.roles_id == 3" class="col-12 col-xl-8">
              <div class="card">
                <div class="card-header">
                  <h4>Latest Destination Registered</h4>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover table-lg">
                      <thead>
                        <tr>
                          <th>Destination</th>
                          <th>Register at</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in me.lastwisata" :key="index">
                          <td class="col-3">
                            <div class="d-flex align-items-center">

                              <p class="font-bold ms-3 mb-0">{{ item.name }}</p>
                            </div>
                          </td>
                          <td class="col-auto">
                            <p class=" mb-0">{{ item.created_at }}</p>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-12 col-lg-3">

          <div class="card">
            <div class="card-header">
              <h4>Recent Messages</h4>
            </div>
            <div class="card-content pb-4">
              <div class="recent-message d-flex px-4 py-3">
                <div class="avatar avatar-lg">
                  <img src="~assets/images/faces/4.jpg" alt="Face 2">
                </div>
                <div class="name ms-4">
                  <h5 class="mb-1">Hank Schrader</h5>
                  <h6 class="text-muted mb-0">@johnducky</h6>
                </div>
              </div>
              <div class="recent-message d-flex px-4 py-3">
                <div class="avatar avatar-lg">
                  <img src="~assets/images/faces/5.jpg" alt="Face 3">
                </div>
                <div class="name ms-4">
                  <h5 class="mb-1">Dean Winchester</h5>
                  <h6 class="text-muted mb-0">@imdean</h6>
                </div>
              </div>
              <div class="recent-message d-flex px-4 py-3">
                <div class="avatar avatar-lg">
                  <img src="~assets/images/faces/1.jpg" alt="Face 4">
                </div>
                <div class="name ms-4">
                  <h5 class="mb-1">John Dodol</h5>
                  <h6 class="text-muted mb-0">@dodoljohn</h6>
                </div>
              </div>
              <div class="px-4">
                <button class='btn btn-block btn-xl btn-light-primary font-bold mt-3'>Start
                  Conversation</button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h4>Visitors Profile</h4>
            </div>
            <div class="card-body">
              <client-only>
                <apexchart height="350" :options="optionsVisitorsProfile" :series="optionsVisitorsProfile.series">
                </apexchart>
              </client-only>
            </div>
          </div>
        </div> -->
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';
import axios from 'axios';

const me = ref({
  countUser: '',
  countwisata: '',
  user: {},
  lastuser: [{
    id: '',
    name: '',
    created_at: ''
  }],
  lastwisata: [{
    id: '',
    name: '',
    created_at: ''
  }],
});



const loading = ref(false);

onMounted(() => {
  fetchUserData();
});

const fetchUserData = async () => {
  try {
    loading.value = true;


    const token = useCookie('token');
    const response = await axios.get('http://127.0.0.1:8000/api/me', {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    me.value = response.data.data;
    me.value.lastuser = response.data.data.lastuser;
    // me.value.user = response.data.data.user;

    console.log(me.value.user);

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

const changePhoto = async () => {
  try {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', async (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const shouldUpdate = await Swal.fire({
          title: 'Confirmation',
          text: 'Are you sure you want to change your photo?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
        });

        if (shouldUpdate.isConfirmed) {
          const reader = new FileReader();
          reader.onload = () => {
            user.value.pathFoto = reader.result as string; // Update the user's pathFoto with base64 data
          };
          reader.readAsDataURL(file);
          Swal.fire('success', 'Success Update Foto Profile!', 'success')
        }
      }
    });

    fileInput.click();
  } catch (error) {
    console.error('Error changing user photo:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Failed to change user photo. Please try again later.',
    });
  }
};



const onSubmit = async () => {
  try {
    const update = await Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to change your photo?',
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
        id: user.value.id,
        name: user.value.name,
        address: user.value.address,
        email: user.value.email,
        pathFoto: user.value.pathFoto,
      });
      const token = useCookie('token');
      await axios.post(`http://localhost:9090/user/update`, userPost.value, {
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