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
        divisions:[]
	},
	mutations: {

		login(state){

			state.loading = true;
			state.auth_error = null;

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
        divisionAdd(state,payload){

            state.divisions.push(payload);


        },
        divisionEdit(state,payload){
            state.divisions.pop();
            state.divisions.push(payload);
        },
        divisionSet(state,payload){
            console.log('payload '+JSON.stringify(payload));
            // console.log('divisions '+state.divisions);
            state.divisions=payload;
            console.log(state.divisions);

        // state.divisions = payload;

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
        }

	},
	actions: {
		login(context){
			context.commit("login");
		}
	}

}
