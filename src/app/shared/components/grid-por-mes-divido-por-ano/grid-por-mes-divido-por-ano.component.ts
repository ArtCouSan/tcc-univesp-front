import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/core/services/transport.service';

interface Grafico {
  name: string,
  value: number
}

@Component({
  selector: 'app-grid-por-mes-divido-por-ano',
  templateUrl: './grid-por-mes-divido-por-ano.component.html',
  styleUrls: ['./grid-por-mes-divido-por-ano.component.scss']
})
export class GridPorMesDividoPorAnoComponent implements OnInit {

  constructor(private transportService: TransportService) { }

  graficoDados: Array<Grafico> = [];

  ngOnInit(): void {
    let graficoDadosTemp: Array<Grafico> = [];
    this.transportService.listarPorMesDividoPorAno().subscribe(listaAno => {
      listaAno.forEach(ano => {
        let tempTitle = ano.year.toString().concat("/");
        let tempQtn = 0;
        ano.months.forEach(mes => {
          tempTitle = ano.year.toString().concat("/");
          const tempTitleMonth = tempTitle.concat(this.getMonth(mes.nameMonth));
          graficoDadosTemp.push({
            name: tempTitleMonth,
            value: mes.qtn
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
