function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~specialties-specialties-module~team-team-module"], {
  /***/
  "./src/app/shared/services/general.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/general.service.ts ***!
    \****************************************************/

  /*! exports provided: GeneralService */

  /***/
  function srcAppSharedServicesGeneralServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralService", function () {
      return GeneralService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var GeneralService =
    /*#__PURE__*/
    function () {
      function GeneralService() {
        _classCallCheck(this, GeneralService);

        this.teamMembers = [{
          id: 1,
          nameIdentifier: 'josefina-queiroz',
          fullName: 'Josefina Queiroz',
          role: 'Psicóloga Clínica',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices. Non blandit massa enim nec dui nunc. Libero volutpat sed cras ornare arcu dui vivamus arcu. Sed arcu non odio euismod. Sit amet dictum sit amet justo donec enim diam. Semper viverra nam libero justo laoreet. At elementum eu facilisis sed odio morbi quis commodo. Lectus nulla at volutpat diam ut venenatis. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Augue eget arcu dictum varius. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Augue neque gravida in fermentum et. Nibh sed pulvinar proin gravida hendrerit lectus. Amet volutpat consequat mauris nunc.',
          photo: 'PhotoTest1',
          academicPath: ['Licenciatura', 'Mestrado', 'Pós-graduação'],
          aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices',
          linkedIn: null,
          facebook: null,
          instagram: null
        }, {
          id: 2,
          nameIdentifier: 'ermelinda-cruz-dos-santos',
          fullName: 'Ermelinda Cruz dos Santos',
          role: 'Psicóloga Clínica',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices. Non blandit massa enim nec dui nunc. Libero volutpat sed cras ornare arcu dui vivamus arcu. Sed arcu non odio euismod. Sit amet dictum sit amet justo donec enim diam. Semper viverra nam libero justo laoreet. At elementum eu facilisis sed odio morbi quis commodo. Lectus nulla at volutpat diam ut venenatis. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Augue eget arcu dictum varius. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Augue neque gravida in fermentum et. Nibh sed pulvinar proin gravida hendrerit lectus. Amet volutpat consequat mauris nunc.',
          photo: 'PhotoTest2',
          academicPath: ['Licenciatura', 'Mestrado', 'Pós-graduação'],
          aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices',
          linkedIn: null,
          facebook: null,
          instagram: null
        }, {
          id: 3,
          nameIdentifier: 'vitorina-jesus-da-silva-do-o',
          fullName: 'Vitorina Jesus da Silva do Ó',
          role: 'Psicoterapeuta',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices. Non blandit massa enim nec dui nunc. Libero volutpat sed cras ornare arcu dui vivamus arcu. Sed arcu non odio euismod. Sit amet dictum sit amet justo donec enim diam. Semper viverra nam libero justo laoreet. At elementum eu facilisis sed odio morbi quis commodo. Lectus nulla at volutpat diam ut venenatis. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Augue eget arcu dictum varius. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Augue neque gravida in fermentum et. Nibh sed pulvinar proin gravida hendrerit lectus. Amet volutpat consequat mauris nunc.',
          photo: 'PhotoTest3',
          academicPath: ['Licenciatura', 'Mestrado', 'Pós-graduação'],
          aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi. Volutpat est velit egestas dui id ornare. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nec ullamcorper sit amet risus nullam. Eu ultrices vitae auctor eu augue ut lectus arcu. Ac placerat vestibulum lectus mauris ultrices',
          linkedIn: null,
          facebook: null,
          instagram: null
        }];
        this.specialties = [{
          id: 1,
          nameIdentifier: 'psicoterapia-1',
          title: 'Psicoterapia 1',
          description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
          bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
          bulletPoints2: null
        }, {
          id: 2,
          nameIdentifier: 'psicoterapia-2',
          title: 'Psicoterapia 2',
          description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
          bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
          bulletPoints2: null
        }, {
          id: 3,
          nameIdentifier: 'psicoterapia-3',
          title: 'Psicoterapia 3',
          description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
          bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
          bulletPoints2: null
        }, {
          id: 4,
          nameIdentifier: 'psicoterapia-4',
          title: 'Psicoterapia 4',
          description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
          bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
          bulletPoints2: null
        }, {
          id: 5,
          nameIdentifier: 'psicoterapia-5',
          title: 'Psicoterapia 5',
          description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
          bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
          bulletPoints2: null
        }, {
          id: 6,
          nameIdentifier: 'psicoterapia-6',
          title: 'Psicoterapia 6',
          description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
          bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
          bulletPoints2: null
        }, {
          id: 7,
          nameIdentifier: 'psicoterapia-7',
          title: 'Psicoterapia 7',
          description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
          bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
          bulletPoints2: null
        }, {
          id: 8,
          nameIdentifier: 'psicoterapia-8',
          title: 'Psicoterapia 8',
          description: 'Bacon ipsum dolor amet filet mignon kevin cow short loin, beef pork ball tip turducken pastrami tail fatback pork loin short ribs jerky. Pork loin ball tip bacon turducken porchetta tri-tip. Rump kevin jowl venison meatball biltong, shankle doner turducken brisket tail shoulder. Tongue tenderloin venison, pork chop leberkas ball tip boudin tri-tip salami short loin filet mignon ground round drumstick.',
          bulletPoints1: ['Um ponto', 'Outro ponto', 'Ainda outro ponto'],
          bulletPoints2: null
        }];
      } // TEAM


      _createClass(GeneralService, [{
        key: "getTeamMembers",
        value: function getTeamMembers() {
          return this.teamMembers.map(function (x) {
            return {
              id: x.id,
              nameIdentifier: x.nameIdentifier,
              fullName: x.fullName,
              role: x.role
            };
          });
        }
      }, {
        key: "getTeamDetails",
        value: function getTeamDetails(nameIdentifier) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.teamMembers.find(function (x) {
            return x.nameIdentifier === nameIdentifier;
          }));
        } // SPECIALTIES

      }, {
        key: "getSpecialties",
        value: function getSpecialties() {
          return this.specialties.map(function (x) {
            return {
              id: x.id,
              nameIdentifier: x.nameIdentifier,
              title: x.title,
              description: x.description
            };
          });
        }
      }, {
        key: "getSpecialtiesDetails",
        value: function getSpecialtiesDetails(nameIdentifier) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.specialties.find(function (x) {
            return x.nameIdentifier === nameIdentifier;
          }));
        }
      }]);

      return GeneralService;
    }();

    GeneralService.ɵfac = function GeneralService_Factory(t) {
      return new (t || GeneralService)();
    };

    GeneralService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GeneralService,
      factory: GeneralService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~home-home-module~specialties-specialties-module~team-team-module-es5.js.map