import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingComponent } from './building/building.component';
import { EarthComponent } from './earth/earth.component';
import { OuterSpaceComponent } from './outer-space/outer-space.component';
import { MoonComponent } from './moon/moon.component';
import { ReturnComponent } from './return/return.component';

const routes: Routes = [
  { path: 'building', component:  BuildingComponent },
  { path: 'launch', component:  EarthComponent },
  { path: 'outer-space', component:  OuterSpaceComponent },
  { path: 'landing', component:  MoonComponent },
  { path: 'return', component: ReturnComponent },
  { path: '', redirectTo: '/launch', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
