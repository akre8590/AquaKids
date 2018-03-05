import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Grupo } from './grupo.model';

@Injectable()
export class GrupoService {
    grupoList: AngularFireList<any>;
    selectedGrupo: Grupo = new Grupo();
  constructor(private firebase: AngularFireDatabase) { }

    getData() {
        this.grupoList = this.firebase.list('grupos');
        return this.grupoList;
    }

    insertGrupo(grupo: Grupo) {
        this.grupoList.push({
          tipo_grupo: grupo.tipo_grupo,
            horario: grupo.horario,
            alumnos_grupo: grupo.alumnos_grupo
        });
    }

    updateGrupo(grupo: Grupo) {
        this.grupoList.update(grupo.$key,
            {
                tipo_grupo: grupo.tipo_grupo,
                horario: grupo.horario,
                alumnos_grupo: grupo.alumnos_grupo
            });
    }

    deleteGrupo($key: string) {
        this.grupoList.remove($key);
    }
}
