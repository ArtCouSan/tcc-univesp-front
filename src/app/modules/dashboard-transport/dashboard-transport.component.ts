import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-transport',
  templateUrl: './dashboard-transport.component.html',
  styleUrls: ['./dashboard-transport.component.scss']
})
export class DashboardTransportComponent implements OnInit {

  constructor() { }

  listComponents = new Array<any>();

  gridPorDiaEspecifico = false;
  gridPorDiaDoAno = false;
  gridPorDiaDaSemana = false;
  gridPorDiaDaSemanaDividoAnoMes = false;
  gridPorMesDividoAno= false;
  gridItinerarios = false;
  gridPorItinerario = false;
  gridPorHorario = false;

  showFiller = false;

  ngOnInit(): void {
  }

  public gridItinerariosChange() {
    this.gridItinerarios = !this.gridItinerarios;
  }

  public gridPorItinerarioChange() {
    this.gridPorItinerario = !this.gridPorItinerario;
  }

  public gridPorHorarioChange() {
    this.gridPorHorario = !this.gridPorHorario;
  }

  public gridPorDiaEspecificoChange() {
    this.gridPorDiaEspecifico = !this.gridPorDiaEspecifico;
  }

  public gridPorDiaDoAnoChange() {
    this.gridPorDiaDoAno = !this.gridPorDiaDoAno;
  }

  public gridPorDiaDaSemanaChange() {
    this.gridPorDiaDaSemana = !this.gridPorDiaDaSemana;
  }

  public gridPorDiaDaSemanaDividoAnoMesChange() {
    this.gridPorDiaDaSemanaDividoAnoMes = !this.gridPorDiaDaSemanaDividoAnoMes;
  }

  public gridPorMesDividoAnoChange() {
    this.gridPorMesDividoAno = !this.gridPorMesDividoAno;
  }

}
