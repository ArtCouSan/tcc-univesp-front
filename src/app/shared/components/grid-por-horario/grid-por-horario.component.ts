import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TransportService } from 'src/app/core/services/transport.service';

interface Grafico {
  name: string,
  value: number
}

@Component({
  selector: 'app-grid-por-horario',
  templateUrl: './grid-por-horario.component.html',
  styleUrls: ['./grid-por-horario.component.scss']
})
export class GridPorHorarioComponent implements OnInit {

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
      this.transportService.listarPorHorario(dtBegin, dtEnd).subscribe(listaPorHorario => {
        listaPorHorario.forEach(horario => {
          graficoDadosTemp.push({
            name: horario.horario,
            value: horario.qtn
          })
        });
        this.graficoDados = [...graficoDadosTemp];
      });
    }
  }

}
