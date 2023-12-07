import { Route, RouterModule } from "@angular/router"
import { CurdFormComponent } from "./curd-form/curd-form.component"
import { MainComponent } from "./main/main.component"
import { NgModule } from "@angular/core"
import { HomeComponent } from "./home/home.component"

const routes:Route[]=[
    {path:"main",component:MainComponent},
    {path:"curdform",component:CurdFormComponent},
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {
        path: 'home', loadChildren: () => import('./home/home.component').then(m => m.HomeComponent),
    },
    
]

@NgModule ({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{ }