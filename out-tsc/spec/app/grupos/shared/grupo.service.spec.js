"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var grupo_service_1 = require("./grupo.service");
describe('GrupoService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [grupo_service_1.GrupoService]
        });
    });
    it('should be created', testing_1.inject([grupo_service_1.GrupoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=grupo.service.spec.js.map