var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { GrupoService } from '../shared/grupo.service';
import { ToastrService } from 'ngx-toastr';
var GruposListComponent = (function () {
    function GruposListComponent(grupoService, tostr) {
        this.grupoService = grupoService;
        this.tostr = tostr;
    }
    GruposListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.grupoService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.grupoList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["$key"] = element.key;
                _this.grupoList.push(y);
            });
        });
    };
    GruposListComponent.prototype.onEdit = function (gru) {
        this.grupoService.selectedGrupo = Object.assign({}, gru);
    };
    GruposListComponent.prototype.onDelete = function (key) {
        if (confirm('Are you sure to delete this record ?') === true) {
            this.grupoService.deleteGrupo(key);
            this.tostr.warning("Deleted Successfully", "Employee register");
        }
    };
    GruposListComponent = __decorate([
        Component({
            selector: 'app-grupos-list',
            templateUrl: './grupos-list.component.html',
            styleUrls: ['./grupos-list.component.css']
        }),
        __metadata("design:paramtypes", [GrupoService, ToastrService])
    ], GruposListComponent);
    return GruposListComponent;
}());
export { GruposListComponent };
//# sourceMappingURL=grupos-list.component.js.map