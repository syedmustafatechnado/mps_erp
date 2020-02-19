<template>
  <div class="content-page">
    <div class="content">
      <div class="permission-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="page-title-box">
                <div class="page-title-right"></div>
                <h4 class="page-title">
                  <span>Permissions</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <form method="post" action enctype="multipart/form-data">
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Module Name</th>
                  <th>Module Division</th>
                  <th>Module Department</th>
                  <th>Module Create</th>
                  <th>Module Read</th>
                  <th>Module Update</th>
                  <th>Module Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="module in modules" :key="module.id">
                  <th>
                    {{module}}
                  </th>

                  <td>
                    <div class="checkbox checkbox-primary">
                      <input id="PermissionBox1" type="checkbox" value="1" />
                      <label for="PermissionBox1"></label>
                    </div>
                  </td>
                  <td>
                    <div class="checkbox checkbox-primary">
                      <input id="PermissionBox1" type="checkbox" value="1" />
                      <label for="PermissionBox1"></label>
                    </div>
                  </td>
                  <td>
                    <div class="checkbox checkbox-primary">
                      <input id="PermissionBox1" type="checkbox" value="1" />
                      <label for="PermissionBox1"></label>
                    </div>
                  </td>
                  <td>
                    <div class="checkbox checkbox-primary">
                      <input id="PermissionBox1" type="checkbox" value="1" />
                      <label for="PermissionBox1"></label>
                    </div>
                  </td>
                  <td>
                    <div class="checkbox checkbox-primary">
                      <input id="PermissionBox1" type="checkbox" value="1" />
                      <label for="PermissionBox1"></label>
                    </div>
                  </td>
                  <td>
                    <div class="checkbox checkbox-primary">
                      <input id="PermissionBox1" type="checkbox" value="1" />
                      <label for="PermissionBox1"></label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <button type="submit" class="btn btn-info">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

    data(){
        return{
        modules : ["Brands","PPC","Leads","Orders","Invoice","Projects and Tasks","Messages","Users","Division and Departments"]
        };
    }
};
</script>
