import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destino: DestinoViaje;
  @Input() position: number;
  @HostBinding('attr.class') cssClassc = 'col-md-4';
  @Output() clicked: EventEmitter<DestinoViaje>;

  constructor() { 
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ir(){

    //accion del evento
    this.clicked.emit(this.destino);

    return false;
  }

}
