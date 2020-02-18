import {getLocalUser} from './helpers/auth';

const user = getLocalUser();

export default {

	state: {
		welcomeMessage : "Welcome to our application",
		currentUser: user,
		isLoggedIn: !!user,
		loading: false,
		users: [],
        auth_error: null,
        divisions:[],
        departments:[],
        designations:[]
	},
	mutations: {

		login(state){

			state.loading = true;
			state.auth_error = null;

        },
        setLoading(state, loading) {
            state.loading = loading
        },
		loginSuccess(state,payload){



			state.loading = false;
			state.auth_error = false;
			state.isLoggedIn = true;
            state.currentUser = Object.assign({},payload.user,{token:payload.token});
            localStorage.setItem('user',JSON.stringify(state.currentUser));



		},
		loginFailed(state,payload){

			state.loading = false;
			state.auth_error = payload.error;
		},
		logout(state){

			localStorage.removeItem("user");
			state.isLoggedIn = false;
			state.currentUser = null;
        },
        /* Division */
        divisionAdd(state,payload){

            state.divisions.push(payload);
        },

        divisionEdit(state,payload){
            state.divisions.pop();
            state.divisions.push(payload);
        },
        divisionSet(state,payload){
            console.log("In div set");
            state.divisions=payload;

        },
         /* Department */
        departmentAdd(state,payload){
            state.departments.push(payload);
        },
        departmentSet(state,payload){

            state.departments = payload;
        },
        departmentEdit(state,payload){
            state.departments.pop();
            state.departments.push(payload);
        },
        /* Designation */
        designationAdd(state,payload){
            state.designations.push(payload);
        },
        designationSet(state,payload){

            state.designations = payload;
        },
        designationEdit(state,payload){
            state.designations.pop();
            state.designations.push(payload);
        },

        /*User */
        userAdd(state,payload){
            state.users.push(payload);
        },
        userSet(state,payload){
            state.users = payload;
        },
        userEdit(state,payload){
            state.users.pop();
            state.users.push(payload);
        }


	},
	getters: {
		welcome(state){
			return state.welcomeMessage;
		},
		isLoading(state){
			return state.isLoading;
		},
		isLoggedIn(state){
			return state.isLoggedIn;
		},
		currentUser(state){
			return state.currentUser;
		},
		auth_error(state){
			return state.auth_error;
		},
		users(state){
			return state.users;
        },
        divisions(state)
        {
            return state.divisions;
        },
        departments(state)
        {
            return state.departments;
        }

	},
	actions: {
		login(context){
			context.commit("login");
        }
	}

}
