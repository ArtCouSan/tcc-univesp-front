import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/core/services/transport.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-grid-por-dia',
  templateUrl: './grid-por-dia.component.html',
  styleUrls: ['./grid-por-dia.component.scss']
})
export class GridPorDiaComponent implements OnInit {

  qtnDia: Number = 0;
  dt: Date = new Date();

  constructor(private transportService: TransportService, private datePipe: DatePipe) { }

  ngOnInit(): void {

  }

  onChangeDt($event: any) {
    let dt = this.datePipe.transform($event,"yyyy-MM-dd")?.concat("T00:00:00");
    this.transportService.listarPorDia(dt).subscribe(qtn => {
      this.qtnDia = qtn;
    });
  }

}
