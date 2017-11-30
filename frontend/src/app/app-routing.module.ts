import { NgModule }					from "@angular/core";
import { RouterModule, Routes }     from "@angular/router";
import { RacePageComponent } from "./race-page/race-page.component";
// haha
const routes: Routes = [
{path: "races", component: RacePageComponent },
{path: "", redirectTo: "/races", pathMatch: "full"},
// {path: "**", component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes
            // , { enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
export const routingComponents = [RacePageComponent];
