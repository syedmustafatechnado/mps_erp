import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';
import LoginComponent from './components/auth/login.vue';
import DatatableComponent from './components/DatatableComponent.vue';
import ChartComponent from './components/ChartComponent.vue';
import LoginFooter from './components/auth/LoginFooter.vue';
import Footer from './components/layouts/Footer.vue';
import LeftSidebar from './components/layouts/LeftSidebar.vue';
import RightSidebar from './components/layouts/RightSidebar.vue';
import Top from './components/layouts/Top.vue';
import DivisionComponent from  './components/divisions/DivisionComponent.vue';
import DepartmentComponent from  './components/departments/DepartmentComponent.vue';
import DesignationComponent from  './components/designations/DesignationComponent.vue';



const components = {
	HomeComponent: HomeComponent,
	CreateComponent: CreateComponent,
	IndexComponent: IndexComponent,
	EditComponent: EditComponent,
	DatatableComponent: DatatableComponent,
	LoginComponent: LoginComponent,
    ChartComponent: ChartComponent,
    LoginFooter: LoginFooter,
    Footer:Footer,
    LeftSidebar:LeftSidebar,
    RightSidebar:RightSidebar,
    Top:Top,
    DivisionComponent:DivisionComponent,
    DepartmentComponent:DepartmentComponent,
    DesignationComponent:DesignationComponent
}

export default components;
