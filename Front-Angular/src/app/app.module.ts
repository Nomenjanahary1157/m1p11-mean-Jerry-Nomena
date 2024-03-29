import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from "angular-datatables";
import { AcceuilComponent } from './acceuil/acceuil.component';
import { GestionPersonnelleComponent } from './gestion-personnelle/gestion-personnelle.component';
import { GestionServiceComponent } from './gestion-service/gestion-service.component';
import { RendezvousComponent } from './historiquerendezvous/rendezvous.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { RendezvousEmployerComponent } from './rendezvous-employer/rendezvous-employer.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragdropPedicureComponent } from './dragdrop-pedicure/dragdrop-pedicure.component';
import { DragdropCheveuxComponent } from './dragdrop-cheveux/dragdrop-cheveux.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { NgChartsModule } from 'ng2-charts';
import { UpdatePersComponent } from './update-pers/update-pers.component';
import { DeletePersComponent } from './delete-pers/delete-pers.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    GestionPersonnelleComponent,
    GestionServiceComponent,
    RendezvousComponent,
    InscriptionComponent,
    LoginComponent,
    RendezvousEmployerComponent,
    DragdropComponent,
    DragdropPedicureComponent,
    DragdropCheveuxComponent,
    AdminLoginComponent,
    DeleteComponent,
    UpdateComponent,
    StatistiqueComponent,
    UpdatePersComponent,
    DeletePersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    NgbModule,
    DataTablesModule,
    DragDropModule,
    MatDialogModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export const base_url="https://api-garages.onrender.com/api";
export const base_url="http://localhost:2024/api";
