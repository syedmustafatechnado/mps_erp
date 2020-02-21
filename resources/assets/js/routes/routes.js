import AllComponents from '../main_component.js';

const routes = [

    {
        name: 'login',
        path: '/login',
        component: AllComponents['LoginComponent']
    }
    ,
    {
        name: 'division',
        path: '/division',
        component: AllComponents['DivisionComponent'],
        meta: {
            requireAuth: true
        }
    }
    ,
    {
        name: 'department',
        path: '/department',
        component: AllComponents['DepartmentComponent'],
        meta: {
            requireAuth: true
        }
    }
    ,
    {
        name: 'designation',
        path: '/designation',
        component: AllComponents['DesignationComponent'],
        meta: {
            requireAuth: true
        }
    },
    {
        name:'user',
        path:'/user',
        component:AllComponents['UserComponent'],
        meta:{
            requireAuth:true
        }
    },
    {
        name:'updateuser',
        path:'/updateuser',
        component:AllComponents['UpdateUser'],
        meta:{
            requireAuth:true
        }
    },
    {
        name:'permission',
        path:'/permission',
        component:AllComponents['PermissionComponent'],
        meta:{
            requireAuth:true
        }
    },
    {
        name:'forgotpassword',
        path:'/forgotpassword',
        component:AllComponents['ForgotPassword']
    }

];

export default routes;


