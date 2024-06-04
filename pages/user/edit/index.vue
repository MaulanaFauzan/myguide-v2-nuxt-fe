<script lang="ts" setup>
definePageMeta({
    layout: '1-column'
})
</script>
<template>
    <div class="container">
        <div class="card mt-5">
            <div class="card-header">
                <h4 class="card-title">Edit User</h4>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nama</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Masukkan Nama">
                        <small id="emailHelp" class="form-text text-muted">Ini akan mengubah Nama User.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Masukkan Nama">
                        <small id="emailHelp" class="form-text text-muted">Ini akan mengubah Email User.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Role User</label>
                        <br />
                        <div class="btn-group dropdown me-1 mb-1">
                            <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                data-reference="parent">
                                <span class="sr-only">Toggle Dropdown</span>
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Admin</a>
                                <a class="dropdown-item" href="#">TourGuide</a>
                                <a class="dropdown-item" href="#">Guest</a>
                                <div class="dropdown-divider"></div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <br />
                    <div class="buttons">
                        <button class="btn btn-primary">Save</button>
                        <button class="btn btn-danger">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>