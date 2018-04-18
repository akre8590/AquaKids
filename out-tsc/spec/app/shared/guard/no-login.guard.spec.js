"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var no_login_guard_1 = require("./no-login.guard");
describe('NoLoginGuard', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [no_login_guard_1.NoLoginGuard]
        });
    });
    it('should ...', testing_1.inject([no_login_guard_1.NoLoginGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=no-login.guard.spec.js.map