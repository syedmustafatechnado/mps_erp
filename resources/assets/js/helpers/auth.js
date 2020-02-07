export function login(credential){

	return new Promise((res,rej)=>{
		axios.post('api/login',credential).then((response)=>{
			res(response.data);
		}).catch((error)=>{
			rej('Email or password is incorrect!');
		})
	});
}

export function getLocalUser(){
	const userStr = localStorage.getItem("user");
	if(!userStr){

		return null;
	}

	return JSON.parse(userStr);

}