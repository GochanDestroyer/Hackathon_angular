import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuterSpaceComponent } from './outer-space/outer-space.component';
import { BuildingComponent } from './building/building.component';
import { EarthComponent } from './earth/earth.component';
import { MoonComponent } from './moon/moon.component';
import { ReturnComponent } from './return/return.component';


@NgModule({
  declarations: [
    AppComponent,
    OuterSpaceComponent,
    BuildingComponent,
    EarthComponent,
    MoonComponent,
    ReturnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
