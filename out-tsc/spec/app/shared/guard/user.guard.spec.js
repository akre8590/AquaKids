"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var user_guard_1 = require("./user.guard");
describe('UserGuard', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [user_guard_1.UserGuard]
        });
    });
    it('should ...', testing_1.inject([user_guard_1.UserGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=user.guard.spec.js.map