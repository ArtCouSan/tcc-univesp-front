import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TransportService } from 'src/app/core/services/transport.service';

interface Grafico {
  name: string,
  value: number
}

@Component({
  selector: 'app-grid-por-itinerario',
  templateUrl: './grid-por-itinerario.component.html',
  styleUrls: ['./grid-por-itinerario.component.scss']
})
export class GridPorItinerarioComponent implements OnInit {

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
      this.transportService.listarPorItinerario(dtBegin, dtEnd).subscribe(listaPorItinerario => {
        listaPorItinerario.forEach(itinerario => {
          graficoDadosTemp.push({
            name: itinerario.rota,
            value: itinerario.qtn
          })
        });
        this.graficoDados = [...graficoDadosTemp];
      });
    }
  }

}
