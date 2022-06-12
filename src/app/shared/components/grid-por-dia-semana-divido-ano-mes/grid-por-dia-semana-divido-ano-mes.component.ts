import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/core/services/transport.service';

interface Grafico {
  name: string,
  value: number
}

@Component({
  selector: 'app-grid-por-dia-semana-divido-ano-mes',
  templateUrl: './grid-por-dia-semana-divido-ano-mes.component.html',
  styleUrls: ['./grid-por-dia-semana-divido-ano-mes.component.scss']
})
export class GridPorDiaSemanaDividoAnoMesComponent implements OnInit {

  constructor(private transportService: TransportService) { }

  graficoDados: Array<Grafico> = [];

  ngOnInit(): void {
    let graficoDadosTemp: Array<Grafico> = [];
    this.transportService.listarPorDiaDaSemanaDividoPorAnoMes().subscribe(listaAno => {
      listaAno.forEach(ano => {
        let tempTitle = ano.year.toString().concat("/");
        let tempQtn = 0;
        ano.months.forEach(mes => {
          tempTitle = ano.year.toString().concat("/");
          const tempTitleMonth = tempTitle.concat(this.getMonth(mes.nameMonth)).concat("/");
          mes.perDayWeek.forEach(dia => {
            const tempTitle2 = tempTitleMonth.concat(this.getDayWeek(dia.nameDayWeek)).concat();
            tempQtn = dia.qtn;
            graficoDadosTemp.push({
              name: tempTitle2,
              value: tempQtn
            });
          });
        });
      });
      this.graficoDados = [...graficoDadosTemp];
    });
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

  getMonth(month: string) {
    switch (month) {
      case "1":
        return "Jan."
      case "2":
        return "Fev.";
      case "3":
        return "Mar.";
      case "4":
        return "Abr.";
      case "5":
        return "Mai.";
      case "6":
        return "Jun.";
      case "7":
        return "Jul.";
      case "8":
        return "Ago.";
      case "9":
        return "Set.";
      case "10":
        return "Out.";
      case "11":
        return "Nov.";
      case "12":
        return "Dez.";
      default:
        return ""
    }
  }

}
