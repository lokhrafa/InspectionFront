import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection/inspection.component';
import { AddEditInspectionComponent } from './inspection/inspection/add-edit-inspection/add-edit-inspection/add-edit-inspection.component';
import { ShowInspectionComponent } from './inspection/show-inspection/show-inspection.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    AddEditInspectionComponent,
    ShowInspectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
