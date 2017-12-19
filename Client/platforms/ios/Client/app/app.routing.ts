import { LoginComponent } from "./pages/login/login.component"
import { MainPageComponent } from "./pages/mainPage/mainpage.component"

export const routes = [
    {path:"",component:LoginComponent},
    {path:"mainpage",component:MainPageComponent}
];

export const navigatableComponents = [
    LoginComponent,
    MainPageComponent
];