"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var alumno_service_1 = require("./alumno.service");
describe('AlumnoService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [alumno_service_1.AlumnoService]
        });
    });
    it('should be created', testing_1.inject([alumno_service_1.AlumnoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=alumno.service.spec.js.map