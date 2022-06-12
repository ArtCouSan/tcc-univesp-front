import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itinerary } from '../models/Itinerary';
import { PerDayInYear } from '../models/PerDayInYear';
import { PerDayWeek } from '../models/PerDayWeek';
import { PerDayWeekByMonthAndYear } from '../models/PerDayWeekByMonthAndYear';
import { PerMonthByYear } from '../models/PerMonthByYear';

const URL_ENDPOINT = "http://localhost:8080/transport/737A-10";

@Injectable()
export class TransportService {

  constructor(private http: HttpClient) { }

  listarItinerarios(): Observable<Array<Itinerary>> {
    return this.http.get<Array<Itinerary>>(URL_ENDPOINT + "/listar-itinerarios");
  }

  listarPorDia(dt: any): Observable<Number> {
    return this.http.get<Number>(URL_ENDPOINT + "/listar-por-dia?dt=" + dt);
  }

  listarPorDiaNoAno(year: Number): Observable<Array<PerDayInYear>> {
    return this.http.get<Array<PerDayInYear>>(URL_ENDPOINT + "/listar-por-dia-no-ano?year=" + year);
  }

  listarPorDiaDaSemana(dtBegin: any, dtEnd: any): Observable<Array<PerDayWeek>> {
    return this.http.get<Array<PerDayWeek>>(`${URL_ENDPOINT}/listar-por-dia-semana?dtBegin=${dtBegin}&dtEnd=${dtEnd}`);
  }

  listarPorDiaDaSemanaDividoPorAnoMes(): Observable<Array<PerDayWeekByMonthAndYear>> {
    return this.http.get<Array<PerDayWeekByMonthAndYear>>(URL_ENDPOINT + "/listar-por-dia-semana-divido-ano-mes");
  }

  listarPorMesDividoPorAno(): Observable<Array<PerMonthByYear>> {
    return this.http.get<Array<PerMonthByYear>>(URL_ENDPOINT + "/listar-por-mes-divido-por-ano");
  }

}