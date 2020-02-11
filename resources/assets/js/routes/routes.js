import AllComponents from '../main_component.js';

const routes = [
  {
      name: 'home',
      path: '/laravelvue/',
      component: AllComponents['HomeComponent'],
      meta: {
        requireAuth: true
      }
  },
  {
      name: 'create',
      path: '/laravelvue/create',
      component: AllComponents['CreateComponent'],
      meta: {
        requireAuth: true
      }
  },
  {
      name: 'posts',
      path: '/laravelvue/posts',
      component: AllComponents['IndexComponent'],
      meta: {
        requireAuth: true
      }
  },
  {
      name: 'datatable',
      path: '/laravelvue/datatable',
      component: AllComponents['DatatableComponent'],
      meta: {
        requireAuth: true
      }
  },
  {
      name: 'edit',
      path: '/laravelvue/edit/:id',
      component: AllComponents['EditComponent'],
      meta: {
        requireAuth: true
      }
  },
  {
      name: 'login',
      path: '/projects/mps_erp/login',
      component: AllComponents['LoginComponent']
  }
  ,
  {
    name: 'division',
    path: '/projects/mps_erp/division',
    component: AllComponents['DivisionComponent'],
    meta: {
        requireAuth: true
      }
  }
,
 {
    name: 'department',
    path: '/projects/mps_erp/department',
    component: AllComponents['DepartmentComponent']
  }
,
{
    name: 'designation',
    path: '/projects/mps_erp/designation',
    component: AllComponents['DesignationComponent']
  }
,
  {
      name: 'chart',
      path: '/laravelvue/chart',
      component: AllComponents['ChartComponent']
  }
];

export default routes;
