import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/core/services/transport.service';

interface Grafico {
  name: string,
  value: number
}

interface Year {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-grid-por-dia-no-ano',
  templateUrl: './grid-por-dia-no-ano.component.html',
  styleUrls: ['./grid-por-dia-no-ano.component.scss']
})
export class GridPorDiaNoAnoComponent implements OnInit {

  constructor(private transportService: TransportService) {
  }

  years: Array<Year> = [
    {value: '2020', viewValue: '2020'},
    {value: '2021', viewValue: '2021'},
    {value: '2022', viewValue: '2022'},
  ];

  graficoDados: Array<Grafico> = [];

  anoAlterado($event: any) {
    let graficoDadosTemp: Array<Grafico> = [];
    this.transportService.listarPorDiaNoAno($event.value).subscribe(listaDia => {
      listaDia.forEach(dia => {
        graficoDadosTemp.push({
          name: dia.title,
          value: dia.qtn
        })
      });
      this.graficoDados = [...graficoDadosTemp];
    });
  }

  ngOnInit(): void {
  }
}
