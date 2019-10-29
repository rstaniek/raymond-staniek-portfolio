import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { PhotographyComponent } from "./pages/photography/photography.component";
import { ShellComponent } from "./shell/shell.component";
import { ProgrammingComponent } from './pages/programming/programming.component';
import { ConsoleComponent } from './pages/programming/console/console.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "prefix",
    component: ShellComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "contact", component: ContactComponent },
      {
        path: "programming",
        component: ProgrammingComponent,
        children: [
          { path: "dot-net", component: NotFoundComponent },
          { path: "python", component: NotFoundComponent }
        ]
      },
      { path: "photography", component: PhotographyComponent, children: [] },
      { path: 'dev-console', component: ConsoleComponent },

      //default:
      { path: "", pathMatch: "full", redirectTo: "home" }
    ]
  },

  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
