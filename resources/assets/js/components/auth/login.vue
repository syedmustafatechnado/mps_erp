

<template>

    <div class="account-pages mt-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-12 col-xl-12 login-card">
                    <div class="card bg-pattern">
                        <div class="card-left-side">
                            <div class="card-left-side-inner">
                                <div class="card-left-side-text">
                                    <p>Hello, Friends!</p>
                                    <p>Enter your personal details
                                        and start journey with us</p>
                                    <p>- Suspendisse porta vehicula risus.</p>
                                    <p>- Fermentum. Integer quis justo.</p>
                                    <p>- Mentum, auctor erat id</p>
                                    <button class="btn get-started-button mt-2 waves-effect waves-light" type="submit"> GET STARTED </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-4">

                            <div class="login-card-head">
                                <a href="index.html">
                                    <span><img src="assets/images/updates/mps-logo.png" alt="" class="img-fluid"></span>
                                </a>
                                <p class="mb-2.5 mt-0.5">Log In</p>
                            </div>

                            <form @submit.prevent='authentication'>

                                <input type="hidden" >

                                <div class="form-group mb-3">
                                    <i class="fe-user noti-icon"></i>
                                    <input class="form-control" type="email" v-model="form.email" placeholder="Email Address" size="50"  value="">

                                    <div class="help-block"></div>
                                </div>

                                <div class="form-group mb-3">
                                    <i class="fe-lock noti-icon"></i>
                                    <input class="form-control" type="password" required="" name="password" v-model="form.password" id="password" placeholder="Password" size="50" value="">

                                    <div class="help-block"></div>
                                </div>

                                <div class="form-group mb-3">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" value="yes" class="custom-control-input" name="remember" id="checkbox-signin" checked>
                                        <label class="custom-control-label" for="checkbox-signin">Remember me</label>
                                    </div>
                                </div>

                                <div class="form-group mb-0">
                                    <button class="btn btn-primary btn-block login-button waves-effect waves-light" type="submit"> Sign In </button>
                                </div>
                            </form>

                            <div class="text-left">
                                <h5 class="mt-3 text-muted"><a href="" class="forgot-password">Forgot Password?</a></h5>
                            </div>

                        </div> <!-- end card-body -->
                    </div>
                    <!-- end card -->


                    <!-- end row -->

                </div> <!-- end col -->
            </div>
            <!-- end row -->
            <p class="copyright-text">Copyright © 2019 My Project Status. All rights reserved.</p>
        </div>
        <!-- end container -->
    </div>
    <!-- end page -->



</template>
<script>
	import {login} from '../../helpers/auth';
	export default{
		name:"login",
		beforeMount(){
			this.$store.state.welcomeMessage = "Hello world";
		console.log(this.$store.getters.welcome);
		},
		data(){
			return {
				form:{
					email:null,
					password:null
				},
				error:null
			};
		},
		methods:{
			authentication(){

			this.$store.dispatch('login');

            console.log(this.$data.form);
			login(this.$data.form)
			.then((res)=>{

				if(res.status){
					this.$store.commit('loginSuccess',res);
					this.$router.push({path:'/projects/mps/'});
				}else{
					alert(res.message);
				}

			})
			.catch((error)=>{

				this.$store.commit('loginFailed',{error});
			})
		}
	}
}

</script>



