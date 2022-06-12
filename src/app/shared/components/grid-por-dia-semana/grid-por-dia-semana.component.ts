import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TransportService } from 'src/app/core/services/transport.service';

interface Grafico {
  name: string,
  value: number
}

@Component({
  selector: 'app-grid-por-dia-semana',
  templateUrl: './grid-por-dia-semana.component.html',
  styleUrls: ['./grid-por-dia-semana.component.scss']
})
export class GridPorDiaSemanaComponent implements OnInit {

  constructor(private transportService: TransportService, private datePipe: DatePipe) { }

  graficoDados: Array<Grafico> = [];
  dateRange = new FormGroup({
    start: new FormControl(""),
    end: new FormControl("")
  });

  ngOnInit(): void {
  }

  onChangeDt($event: any) {
    let dtBegin = this.datePipe.transform(this.dateRange.controls["start"].value, "yyyy-MM-dd")?.concat("T00:00:00");
    let dtEnd = this.datePipe.transform(this.dateRange.controls["end"].value, "yyyy-MM-dd")?.concat("T00:00:00");

    if (dtBegin && dtEnd) {
      let graficoDadosTemp: Array<Grafico> = [];
      this.transportService.listarPorDiaDaSemana(dtBegin, dtEnd).subscribe(listaDia => {
        listaDia.forEach(dia => {
          graficoDadosTemp.push({
            name: this.getDayWeek(dia.nameDayWeek),
            value: dia.qtn
          })
        });
        this.graficoDados = [...graficoDadosTemp];
      });
    }

  }

  getDayWeek(dayWeek: string) {
    switch (dayWeek) {
      case "1":
        return "Segunda"
      case "2":
        return "Terça";
      case "3":
        return "Quarta";
      case "4":
        return "Quinta";
      case "5":
        return "Sexta";
      case "6":
        return "Sábado";
      case "7":
        return "Domingo";
      default:
        return ""
    }
  }
}
