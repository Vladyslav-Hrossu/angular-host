import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {
    path: 'edit',
    loadChildren: () => loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe-feature',
        exposedModule: './Module'
      })
      .then(m => m.FeatureModule)
  },
  {
    path: '',
    component: ListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
