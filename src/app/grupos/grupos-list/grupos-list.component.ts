import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../shared/grupo.service';

@Component({
  selector: 'app-grupos-list',
  templateUrl: './grupos-list.component.html',
  styleUrls: ['./grupos-list.component.css']
})
export class GruposListComponent implements OnInit {

  constructor(private grupoService: GrupoService) { }

  ngOnInit() {
  }

}
