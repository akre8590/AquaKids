import { Component, OnInit } from '@angular/core';
import { GrupoService } from './shared/grupo.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
    providers: [GrupoService]
})
export class GruposComponent implements OnInit {

  constructor(private grupoService: GrupoService) { }

  ngOnInit() {
  }

}
