<template>
    <div class="page-heading">
        <div class="page-title">
            <div class="row">

                <div class="row">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><nuxt-link to="/">Dashboard</nuxt-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Destination</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <section class="section">
            <div class="card">
                <div class="card-header">

                    <h4 class="card-title">List User Aktif</h4>
                    <div style="width: 10%;" class="buttons mt-4">
                        <button class="btn btn-primary btn-nm">Add User</button>
                    </div>
                    <div class="row mt-4">

                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" style="width: 1%">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col" style="width: 7%;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Edit | Delete</td>
                                </tr>


                            </tbody>
                        </table>


                    </div>
                    <div>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination pagination-primary">
                                <li class="page-item"><a class="page-link" href="#">Prev</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>

        </section>
    </div>
</template>