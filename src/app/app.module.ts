import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardTransportComponent } from './modules/dashboard-transport/dashboard-transport.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { GridPorDiaComponent } from './shared/components/grid-por-dia/grid-por-dia.component';
import { TransportService } from './core/services/transport.service';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { GridPorDiaNoAnoComponent } from './shared/components/grid-por-dia-no-ano/grid-por-dia-no-ano.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GridPorDiaSemanaComponent } from './shared/components/grid-por-dia-semana/grid-por-dia-semana.component';
import { GridPorDiaSemanaDividoAnoMesComponent } from './shared/components/grid-por-dia-semana-divido-ano-mes/grid-por-dia-semana-divido-ano-mes.component';
import { GridPorMesDividoPorAnoComponent } from './shared/components/grid-por-mes-divido-por-ano/grid-por-mes-divido-por-ano.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { GridItinerariosComponent } from './shared/components/grid-itinerarios/grid-itinerarios.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardTransportComponent,
    GridPorDiaComponent,
    GridPorDiaNoAnoComponent,
    GridPorDiaSemanaComponent,
    GridPorDiaSemanaDividoAnoMesComponent,
    GridPorMesDividoPorAnoComponent,
    GridItinerariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule
  ],
  providers: [
    TransportService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
