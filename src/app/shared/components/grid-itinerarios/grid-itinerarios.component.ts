import { Component, OnInit } from '@angular/core';
import { Itinerary } from 'src/app/core/models/Itinerary';
import { TransportService } from 'src/app/core/services/transport.service';

@Component({
  selector: 'app-grid-itinerarios',
  templateUrl: './grid-itinerarios.component.html',
  styleUrls: ['./grid-itinerarios.component.scss']
})
export class GridItinerariosComponent implements OnInit {

  listaItinerarios: Array<Itinerary> = [];

  constructor(private transportService: TransportService) { }

  ngOnInit(): void {
    this.transportService.listarItinerarios().subscribe(itinerarios => {
      this.listaItinerarios = itinerarios;
    })
  }

}
