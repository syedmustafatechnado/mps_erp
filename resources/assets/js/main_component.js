
import LoginComponent from './components/auth/login.vue';
import LoginFooter from './components/auth/LoginFooter.vue';
import Footer from './components/layouts/Footer.vue';
import LeftSidebar from './components/layouts/LeftSidebar.vue';
import RightSidebar from './components/layouts/RightSidebar.vue';
import Top from './components/layouts/Top.vue';
import DivisionComponent from  './components/divisions/DivisionComponent.vue';
import DepartmentComponent from  './components/departments/DepartmentComponent.vue';
import DesignationComponent from  './components/designations/DesignationComponent.vue';
import UpdateUser from './components/users/UpdateUser.vue';
import UserComponent from './components/users/UserComponent.vue';
import PermissionComponent from './components/permissions/PermissionComponent.vue';



const components = {

	LoginComponent: LoginComponent,
    LoginFooter: LoginFooter,
    Footer:Footer,
    LeftSidebar:LeftSidebar,
    RightSidebar:RightSidebar,
    Top:Top,
    DivisionComponent:DivisionComponent,
    DepartmentComponent:DepartmentComponent,
    DesignationComponent:DesignationComponent,
    UpdateUser:UpdateUser,
    UserComponent:UserComponent,
    PermissionComponent:PermissionComponent
}

export default components;
