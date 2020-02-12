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
    }

];

export default routes;


