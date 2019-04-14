<template>
  <div class="container-fluid pl-0 pr-0 ml-0 mr-0 mt-5 pt-2 animated fadeInUpBig faster">
    <div class="row">
      <div class="col-sm-12 col-med-2 col-lg-2 w-100" id="navColumn">
        <nav class="navbar navbar-expand-lg navbar-light bg-light pl-1 pr-1">
          <button
            class="navbar-toggler w-100"
            type="button"
            data-toggle="collapse"
            data-target="#sideBarSample"
            aria-controls="sideBarSample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" ref="navbarDrop" id="sideBarSample">
            <ul class="nav flex-column">
              <li class="nav-item mt-3">
                <span class="nav-link">Samples</span>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Register Users</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Update">Select & Update Users</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Delete">Select & Delete Users</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#JWT">Generate JWT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#ProtectedRegister">Protected Register Users</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#ProtectedUpdate">Protected Select & Update Users</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#ProtectedDelete">Protected Select & Delete Users</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div
        class="col-sm-12 col-med-10 col-lg-10 d-flex justify-content-center mt-4"
        id="sampleContainer"
      >
        <div class="container-fluid w-75" id="mainView">
          <h3>Registering a User</h3>
          <p
            style="font-size:15px"
          >In this sample, we will register a user to our MongoDB through ExpressJS API's on cloud.</p>
          <div class="container p-0">
            <form id="formElements" class="sample p-4" @submit.prevent>
              <div class="form-group">
                <label for="Register_First_NameInput">First Name:</label>
                <input
                  v-model="reg_user.first_name"
                  type="text"
                  ref="registerFirstName"
                  class="form-control w-100"
                  id="Register_First_NameInput"
                  placeholder="Enter First Name"
                  required
                >
              </div>
              <div class="form-group">
                <label for="Register_LastName_Input">Last Name:</label>
                <input
                  v-model="reg_user.last_name"
                  type="text"
                  class="form-control"
                  ref="registerLastName"
                  id="Register_LastName_Input"
                  placeholder="Enter Last Name"
                  required
                >
              </div>
              <div class="form-group">
                <label for="Register_Age_Input">Age:</label>
                <input
                  v-model="reg_user.age"
                  type="number"
                  class="form-control"
                  id="Age_Input"
                  placeholder="Enter Age"
                >
              </div>
              <div class="form-group">
                <label for="Register_City_Input">City:</label>
                <input
                  v-model="reg_user.city"
                  type="text"
                  class="form-control"
                  id="Register_City_Input"
                  placeholder="Enter City"
                >
              </div>
              <div class="form-group">
                <label for="Register_State_Input">State:</label>
                <input
                  v-model="reg_user.state"
                  type="text"
                  class="form-control"
                  id="Register_State_Input"
                  placeholder="Enter State"
                >
              </div>
              <button
                type="submit"
                @click="regUser($event)"
                class="btn btn-outline-primary"
              >Register</button>
              <b-alert
                class="mt-2"
                variant="success"
                dismissible
                ref="registerSuccessAlert"
              >Registered user successfully!</b-alert>
              <b-alert
                class="mt-2"
                variant="danger"
                dismissible
                ref="registerFailureAlert"
              >Something went wrong!</b-alert>
              <span id="Update"/>
            </form>
          </div>
          <br>
          <h3>Updating a User</h3>
          <p style="font-size:15px">
            In this sample, we will update an user to in MongoDB through ExpressJS API's on cloud. To do that, we will select an existing user from the table,
            and initialize it to the fields with clicking the user's row.
          </p>
          <div class="container p-0">
            <b-table
              class="table-responsive-lg"
              hover
              selectable
              select-mode="single"
              selectedVariant="success"
              :items="select_users"
              @row-selected="rowSelected_Update"
            />
            <form id="formElements" class="sample p-4" @submit.prevent>
              <div class="form-group">
                <label for="Update_First_NameInput">First Name:</label>
                <input
                  v-model="update_user.first_name"
                  type="text"
                  class="form-control"
                  id="Update_First_NameInput"
                  aria-describedby="First Name Enter"
                  placeholder="Enter First Name"
                >
              </div>
              <div class="form-group">
                <label for="Update_LastName_Input">Last Name:</label>
                <input
                  v-model="update_user.last_name"
                  type="text"
                  class="form-control"
                  id="Update_LastName_Input"
                  placeholder="Enter Last Name"
                >
              </div>
              <div class="form-group">
                <label for="Update_Age_Input">Age:</label>
                <input
                  v-model="update_user.age"
                  type="number"
                  class="form-control"
                  id="Update_Age_Input"
                  placeholder="Enter Age"
                >
              </div>
              <div class="form-group">
                <label for="Update_City_Input">City:</label>
                <input
                  v-model="update_user.city"
                  type="text"
                  class="form-control"
                  id="Update_City_Input"
                  placeholder="Enter City"
                >
              </div>
              <div class="form-group">
                <label for="Update_State_Input">State:</label>
                <input
                  v-model="update_user.state"
                  type="text"
                  class="form-control"
                  id="Update_State_Input"
                  placeholder="Enter State"
                >
              </div>
              <button type="button" @click="updateUser" class="btn btn-outline-primary">Update</button>
              <b-alert
                class="mt-2"
                variant="success"
                dismissible
                ref="updateSuccessAlert"
              >Updated user successfully!</b-alert>
              <b-alert
                class="mt-2"
                variant="danger"
                dismissible
                ref="updateFailureAlert"
              >Something went wrong!</b-alert>
              <span id="Delete"/>
            </form>
          </div>
          <br>
          <h3>Deleting a User</h3>
          <p style="font-size:15px">
            In this sample, we will delete an user to in MongoDB through ExpressJS API's on cloud. To do that, we will select an existing user from the table,
            and initialize it to the fields with clicking the user's row.
          </p>
          <div class="container p-0">
            <b-table
              class="table-responsive-lg"
              hover
              selectable
              select-mode="single"
              selectedVariant="success"
              :items="select_users"
              @row-selected="rowSelected_Delete"
            />
            <form id="formElements" class="sample p-4" @submit.prevent>
              <div class="form-group">
                <label for="Delete_First_NameInput">First Name:</label>
                <input
                  v-model="delete_user.first_name"
                  type="text"
                  class="form-control"
                  id="Delete_First_NameInput"
                  placeholder="Enter First Name"
                  readonly
                >
              </div>
              <div class="form-group">
                <label for="Delete_LastName_Input">Last Name:</label>
                <input
                  v-model="delete_user.last_name"
                  type="text"
                  class="form-control"
                  id="Delete_LastName_Input"
                  placeholder="Enter Last Name"
                  readonly
                >
              </div>
              <div class="form-group">
                <label for="Delete_Age_Input">Age:</label>
                <input
                  v-model="delete_user.age"
                  type="number"
                  class="form-control"
                  id="Delete_Age_Input"
                  placeholder="Enter Age"
                  readonly
                >
              </div>
              <div class="form-group">
                <label for="Delete_City_Input">City:</label>
                <input
                  v-model="delete_user.city"
                  type="text"
                  class="form-control"
                  id="Delete_City_Input"
                  placeholder="Enter City"
                  readonly
                >
              </div>
              <div class="form-group">
                <label for="Delete_State_Input">State:</label>
                <input
                  v-model="delete_user.state"
                  type="text"
                  class="form-control"
                  id="Delete_State_Input"
                  placeholder="Enter State"
                  readonly
                >
              </div>
              <button type="button" @click="deleteUser" class="btn btn-outline-primary">Delete</button>
              <b-alert
                class="mt-2"
                variant="success"
                dismissible
                ref="deleteSuccessAlert"
              >Deleted user successfully!</b-alert>
              <b-alert
                class="mt-2"
                variant="danger"
                dismissible
                ref="deleteFailureAlert"
              >Something went wrong!</b-alert>
              <span id="JWT"/>
            </form>
          </div>
          <br>
          <h3>Generate a JWT Token</h3>
          <p
            style="font-size:15px"
          >In this sample, we will generate a JWT token from the API. We will use this token to do operations below.</p>
          <div class="container p-0">
            <form id="formElements" class="sample p-4" @submit.prevent>
              <div class="form-group">
                <label for="JWT_Input">Token:</label>
                <input
                  v-model="jwt_token"
                  type="text"
                  class="form-control"
                  id="JWT_Input"
                  placeholder="Generate a JWT"
                  readonly
                >
                <b-alert
                  class="mt-2"
                  variant="success"
                  dismissible
                  ref="tokenSuccessAlert"
                >Token is generated!</b-alert>
                <b-alert
                  class="mt-2"
                  variant="danger"
                  dismissible
                  ref="tokenFailureAlert"
                >Something went wrong!</b-alert>
              </div>
              <button type="button" @click="generateJWT" class="btn btn-outline-primary">Generate</button>
              <span id="ProtectedRegister"/>
            </form>
          </div>
          <br>
          <h3>Protected Registering a User</h3>
          <p style="font-size:15px">
            In this sample, we will register an user to our MongoDB through ExpressJS API, and we will submit our request to the API with a valid token. Furthermore, this will
            simulate a scenerio, where we are validated from the API server to access to our database in order to register a user.
          </p>
          <div class="container p-0">
            <form id="formElements" class="sample p-4" @submit.prevent>
              <div class="form-group">
                <label for="ProtectedRegister_Token">Token:</label>
                <input
                  v-model="prot_reg_jwt_token"
                  type="text"
                  class="form-control"
                  id="ProtectedRegister_Token"
                  placeholder="Enter Token"
                >
              </div>
              <div class="form-group">
                <label for="ProtectedRegisterFirst_NameInput">First Name:</label>
                <input
                  v-model="prot_reg_user.first_name"
                  type="text"
                  class="form-control w-100"
                  ref="protRegisterFirstName"
                  id="ProtectedRegisterFirst_NameInput"
                  aria-describedby="First Name Enter"
                  placeholder="Enter First Name"
                  required
                >
              </div>
              <div class="form-group">
                <label for="ProtectedRegisterLastName_Input">Last Name:</label>
                <input
                  v-model="prot_reg_user.last_name"
                  type="text"
                  class="form-control"
                  ref="protRegisterLastName"
                  id="ProtectedRegisterLastName_Input"
                  placeholder="Enter Last Name"
                  required
                >
              </div>
              <div class="form-group">
                <label for="ProtectedRegisterAge_Input">Age:</label>
                <input
                  v-model="prot_reg_user.age"
                  type="number"
                  class="form-control"
                  id="ProtectedRegisterAge_Input"
                  placeholder="Enter Age"
                >
              </div>
              <div class="form-group">
                <label for="ProtectedRegisterCity_Input">City:</label>
                <input
                  v-model="prot_reg_user.city"
                  type="text"
                  class="form-control"
                  id="ProtectedRegisterCity_Input"
                  placeholder="Enter City"
                >
              </div>
              <div class="form-group">
                <label for="ProtectedRegister_State_Input">State:</label>
                <input
                  v-model="prot_reg_user.state"
                  type="text"
                  class="form-control"
                  id="ProtectedRegister_State_Input"
                  placeholder="Enter State"
                >
              </div>
              <button
                type="submit"
                @click="protected_regUser($event)"
                class="btn btn-outline-primary"
              >Register</button>
              <b-alert
                class="mt-2"
                variant="success"
                dismissible
                ref="protRegisterSuccessAlert"
              >Registered user successfully!</b-alert>
              <b-alert
                class="mt-2"
                variant="danger"
                dismissible
                ref="protRegisterFailureAlert"
              >Something went wrong!</b-alert>
              <span id="ProtectedUpdate"/>
            </form>
          </div>
          <br>
          <h3>Protected Updating a User</h3>
          <p style="font-size:15px">
            In this sample, we will register an user to our MongoDB through ExpressJS API, and we will submit our request to the API with a valid token. Furthermore, this will
            simulate a scenerio, where we are validated from the API server to access to our database in order to update a user.
          </p>
          <div class="container p-0">
            <b-table
              class="table-responsive-lg"
              hover
              selectable
              select-mode="single"
              selectedVariant="success"
              :items="select_users"
              @row-selected="rowSelected_ProtectedUpdate"
            />
            <form id="formElements" class="sample p-4" @submit.prevent>
              <div class="form-group">
                <label for="ProtectedUpdate_Token">Token:</label>
                <input
                  v-model="prot_update_jwt_token"
                  type="text"
                  class="form-control"
                  id="ProtectedUpdate_Token"
                  placeholder="Enter Token"
                >
              </div>
              <div class="form-group">
                <label for="ProtectedUpdate_First_NameInput">First Name:</label>
                <input
                  v-model="prot_update_user.first_name"
                  type="text"
                  class="form-control"
                  id="ProtectedUpdate_First_NameInput"
                  placeholder="Enter First Name"
                >
              </div>
              <div class="form-group">
                <label for="ProtectedUpdate_LastName_Input">Last Name:</label>
                <input
                  v-model="prot_update_user.last_name"
                  type="text"
                  class="form-control"
                  id="ProtectedUpdate_LastName_Input"
                  placeholder="Enter Last Name"
                >
              </div>
              <div class="form-group">
                <label for="ProtectedUpdate_Age_Input">Age:</label>
                <input
                  v-model="prot_update_user.age"
                  type="number"
                  class="form-control"
                  id="ProtectedUpdate_Age_Input"
                  placeholder="Enter Age"
                >
              </div>
              <div class="form-group">
                <label for="ProtectedUpdate_City_Input">City:</label>
                <input
                  v-model="prot_update_user.city"
                  type="text"
                  class="form-control"
                  id="ProtectedUpdate_City_Input"
                  placeholder="Enter City"
                >
              </div>
              <div class="form-group">
                <label for="ProtectedUpdate_State_Input">State:</label>
                <input
                  v-model="prot_update_user.state"
                  type="text"
                  class="form-control"
                  id="ProtectedUpdate_State_Input"
                  placeholder="Enter State"
                >
              </div>
              <button
                type="button"
                @click="protected_updateUser"
                class="btn btn-outline-primary"
              >Update</button>
              <b-alert
                class="mt-2"
                variant="success"
                dismissible
                ref="protUpdateSuccessAlert"
              >Updated user successfully!</b-alert>
              <b-alert
                class="mt-2"
                variant="danger"
                dismissible
                ref="protUpdateFailureAlert"
              >Something went wrong!</b-alert>
              <span id="ProtectedDelete"/>
            </form>
          </div>
          <br>
          <h3>Protected Deleting a User</h3>
          <p style="font-size:15px">
            In this sample, we will register an user to our MongoDB through ExpressJS API, and we will submit our request to the API with a valid token. Furthermore, this will
            simulate a scenerio, where we are validated from the API server to access to our database in order to delete a user.
          </p>
          <div class="container p-0">
            <b-table
              class="table-responsive-lg"
              hover
              selectable
              select-mode="single"
              selectedVariant="success"
              :items="select_users"
              @row-selected="rowSelected_ProtectedDelete"
            />
            <form id="formElements" class="sample p-4" @submit.prevent>
              <div class="form-group">
                <label for="ProtectedDelete_Token">Token:</label>
                <input
                  v-model="prot_delete_jwt_token"
                  type="text"
                  class="form-control"
                  id="ProtectedDelete_Token"
                  placeholder="Enter Token"
                >
              </div>
              <div class="form-group">
                <label for="ProtectedDelete_First_NameInput">First Name:</label>
                <input
                  v-model="prot_delete_user.first_name"
                  type="text"
                  class="form-control"
                  id="ProtectedDelete_First_NameInput"
                  placeholder="Enter First Name"
                  readonly
                >
              </div>
              <div class="form-group">
                <label for="ProtectedDelete_LastName_Input">Last Name:</label>
                <input
                  v-model="prot_delete_user.last_name"
                  type="text"
                  class="form-control"
                  id="ProtectedDelete_LastName_Input"
                  placeholder="Enter Last Name"
                  readonly
                >
              </div>
              <div class="form-group">
                <label for="ProtectedDelete_Age_Input">Age:</label>
                <input
                  v-model="prot_delete_user.age"
                  type="number"
                  class="form-control"
                  id="ProtectedDelete_Age_Input"
                  placeholder="Enter Age"
                  readonly
                >
              </div>
              <div class="form-group">
                <label for="ProtectedDelete_City_Input">City:</label>
                <input
                  v-model="prot_delete_user.city"
                  type="text"
                  class="form-control"
                  id="ProtectedDelete_City_Input"
                  placeholder="Enter City"
                  readonly
                >
              </div>
              <div class="form-group">
                <label for="ProtectedDelete_State_Input">State:</label>
                <input
                  v-model="prot_delete_user.state"
                  type="text"
                  class="form-control"
                  id="ProtectedDelete_State_Input"
                  placeholder="Enter State"
                  readonly
                >
              </div>
              <button
                type="button"
                @click="protected_deleteUser"
                class="btn btn-outline-primary"
              >Delete</button>
              <b-alert
                class="mt-2"
                variant="success"
                dismissible
                ref="protDeleteSuccessAlert"
              >Deleted user successfully!</b-alert>
              <b-alert
                class="mt-2"
                variant="danger"
                dismissible
                ref="protDeleteFailureAlert"
              >Something went wrong!</b-alert>
            </form>
          </div>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../API/User";

export default {
  data() {
    return {
      select_users: [],
      reg_user: {
        first_name: "",
        last_name: "",
        age: "",
        city: "",
        state: ""
      },
      update_user: {
        id: "",
        first_name: "",
        last_name: "",
        age: "",
        city: "",
        state: ""
      },
      delete_user: {
        id: "",
        first_name: "",
        last_name: "",
        age: "",
        city: "",
        state: ""
      },
      jwt_token: "",
      prot_reg_jwt_token: "",
      prot_update_jwt_token: "",
      prot_delete_jwt_token: "",
      prot_reg_user: {
        first_name: "",
        last_name: "",
        age: "",
        city: "",
        state: ""
      },
      prot_update_user: {
        id: "",
        first_name: "",
        last_name: "",
        age: "",
        city: "",
        state: ""
      },
      prot_delete_user: {
        id: "",
        first_name: "",
        last_name: "",
        age: "",
        city: "",
        state: ""
      }
    };
  },
  async mounted() {
    this.select_users = await this.getUserList();
  },
  methods: {
    rowSelected_Update(item) {
      this.update_user.id = item[0].id;
      this.update_user.first_name = item[0].first_name;
      this.update_user.last_name = item[0].last_name;
      this.update_user.age = item[0].age;
      this.update_user.city = item[0].city;
      this.update_user.state = item[0].state;
    },
    rowSelected_Delete(item) {
      this.delete_user.id = item[0].id;
      this.delete_user.first_name = item[0].first_name;
      this.delete_user.last_name = item[0].last_name;
      this.delete_user.age = item[0].age;
      this.delete_user.city = item[0].city;
      this.delete_user.state = item[0].state;
    },
    rowSelected_ProtectedUpdate(item) {
      this.prot_update_user.id = item[0].id;
      this.prot_update_user.first_name = item[0].first_name;
      this.prot_update_user.last_name = item[0].last_name;
      this.prot_update_user.age = item[0].age;
      this.prot_update_user.city = item[0].city;
      this.prot_update_user.state = item[0].state;
    },
    rowSelected_ProtectedDelete(item) {
      this.prot_delete_user.id = item[0].id;
      this.prot_delete_user.first_name = item[0].first_name;
      this.prot_delete_user.last_name = item[0].last_name;
      this.prot_delete_user.age = item[0].age;
      this.prot_delete_user.city = item[0].city;
      this.prot_delete_user.state = item[0].state;
    },
    async getUserList() {
      let temp_user_select = [];
      const response = await UserService.getUser();
      await Object.keys(response.data.doc).forEach(function(item) {
        temp_user_select.push({
          id: response.data.doc[item]._id,
          first_name: response.data.doc[item].first_name,
          last_name: response.data.doc[item].last_name,
          age: response.data.doc[item].age,
          city: response.data.doc[item].city,
          state: response.data.doc[item].state
        });
      });
      return temp_user_select;
    },
    regUser: async function() {
      this.clearAllAlerts();
      if (this.reg_user.first_name === "" || this.reg_user.last_name === "") {
        return;
      } else {
        const response = await UserService.postUser(this.reg_user).catch(() => {
          this.$refs.registerFailureAlert.show = true;
        });
        if (response.status === 201) {
          this.$refs.registerSuccessAlert.show = true;
        } else {
          this.$refs.registerFailureAlert.show = true;
        }
      }
      this.select_users = await this.getUserList();
    },
    updateUser: async function() {
      this.clearAllAlerts();
      if (this.update_user.id === "") {
        return;
      } else {
        const response = await UserService.patchUser(this.update_user).catch(
          () => {
            this.$refs.updateFailureAlert.show = true;
          }
        );
        if (response.status === 200) {
          this.$refs.updateSuccessAlert.show = true;
        } else {
          this.$refs.updateFailureAlert.show = true;
        }
      }
      this.select_users = await this.getUserList();
    },
    deleteUser: async function() {
      this.clearAllAlerts();
      if (this.delete_user.id === "") {
        return;
      } else {
        const response = await UserService.deleteUser(
          this.delete_user.id
        ).catch(() => {
          this.$refs.deleteFailureAlert.show = true;
        });
        if (response.status === 200) {
          this.$refs.deleteSuccessAlert.show = true;
        } else {
          this.$refs.deleteFailureAlert.show = true;
        }
      }
      this.select_users = await this.getUserList();
    },
    generateJWT: async function() {
      const response = await UserService.getJWT();
      if (response.data.token !== "") {
        this.$refs.tokenSuccessAlert.show = true;
        this.jwt_token = response.data.token;
      } else {
        this.$refs.tokenFailureAlert.show = true;
      }
    },
    protected_regUser: async function() {
      this.clearAllAlerts();
      if (
        this.prot_reg_user.first_name === "" ||
        this.prot_reg_user.last_name === "" ||
        this.prot_reg_jwt_token === ""
      ) {
        return;
      } else {
        const response = await UserService.protected_postUser(
          this.prot_reg_user,
          this.prot_reg_jwt_token
        ).catch(() => {
          this.$refs.protRegisterFailureAlert.show = true;
        });
        if (response.status === 201) {
          this.$refs.protRegisterSuccessAlert.show = true;
        } else {
          this.$refs.protRegisterFailureAlert.show = true;
        }
      }
      this.select_users = await this.getUserList();
    },
    protected_updateUser: async function() {
      this.clearAllAlerts();
      if (this.prot_update_user.id === "") {
        return;
      } else {
        const response = await UserService.protected_patchUser(
          this.prot_update_user,
          this.prot_update_jwt_token
        ).catch(() => {
          this.$refs.protUpdateFailureAlert.show = true;
        });
        if (response.status === 200) {
          this.$refs.protUpdateSuccessAlert.show = true;
        } else {
          this.$refs.protUpdateFailureAlert.show = true;
        }
      }
      this.select_users = await this.getUserList();
    },
    protected_deleteUser: async function() {
      this.clearAllAlerts();
      if (this.prot_delete_user.id === "") {
        return;
      } else {
        const response = await UserService.protected_deleteUser(
          this.prot_delete_user.id,
          this.prot_delete_jwt_token
        ).catch(() => {
          this.$refs.protDeleteFailureAlert.show = true;
        });
        if (response.status === 200) {
          this.$refs.protDeleteSuccessAlert.show = true;
        } else {
          this.$refs.protDeleteFailureAlert.show = true;
        }
      }
      this.select_users = await this.getUserList();
    },
    clearAllAlerts() {
      this.$refs.registerSuccessAlert.show = false;
      this.$refs.registerFailureAlert.show = false;
      this.$refs.updateSuccessAlert.show = false;
      this.$refs.updateFailureAlert.show = false;
      this.$refs.deleteSuccessAlert.show = false;
      this.$refs.deleteFailureAlert.show = false;
      this.$refs.tokenSuccessAlert.show = false;
      this.$refs.tokenFailureAlert.show = false;
      this.$refs.protRegisterSuccessAlert.show = false;
      this.$refs.protRegisterFailureAlert.show = false;
      this.$refs.protUpdateSuccessAlert.show = false;
      this.$refs.protUpdateFailureAlert.show = false;
      this.$refs.protDeleteSuccessAlert.show = false;
      this.$refs.protDeleteFailureAlert.show = false;
    }
  },
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  overflow: hidden;
}
@media (min-width: 576px) {
  #formElements {
    position: inherit;
    left: 20%;
    min-width: 4in;
  }
  .nav {
    min-width: 10%;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  #mainView {
    width: 50%;
  }
  #formElements {
    position: inherit;
    left: 20%;
    min-width: 4in;
  }
  .nav {
    min-width: 10%;
  }
}
@media (min-width: 992px) {
  #sampleContainer {
    margin-left: 20%;
  }
  #navColumn {
    background-color: #f8f9fa;
    height: 100%;
    position: fixed;
    z-index: 1;
  }
  #formElements {
    position: inherit;
    left: 20%;
    min-width: 4in;
  }
  .nav {
    min-width: 10%;
  }
}
.sample {
  border: 2px solid #e3f2fd;
  border-radius: 5px;
}
</style>