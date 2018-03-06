import { Component, OnInit } from '@angular/core';
import { GrupoService } from '../shared/grupo.service';
import { Grupo } from '../shared/grupo.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grupos-list',
  templateUrl: './grupos-list.component.html',
  styleUrls: ['./grupos-list.component.css']
})
export class GruposListComponent implements OnInit {
  grupoList: Grupo[];
  constructor(private grupoService: GrupoService, private tostr: ToastrService) { }

  ngOnInit() {
      var x = this.grupoService.getData();
      x.snapshotChanges().subscribe(item => {
          this.grupoList = [];
          item.forEach(element => {
              var y = element.payload.toJSON();
              y["$key"] = element.key;
              this.grupoList.push(y as Grupo);
          });
      });
  }
  onEdit(gru: Grupo) {
    this.grupoService.selectedGrupo = Object.assign({}, gru);
  }
  onDelete(key: string) {
      if (confirm('Are you sure to delete this record ?') === true) {
          this.grupoService.deleteGrupo(key);
          this.tostr.warning("Deleted Successfully", "Employee register");
      }
  }
}
