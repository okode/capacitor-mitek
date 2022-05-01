var capacitorMitek = (function (exports, core) {
    'use strict';

    const Mitek = core.registerPlugin('Mitek', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.MitekWeb()),
    });

    class MitekWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        MitekWeb: MitekWeb
    });

    exports.Mitek = Mitek;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
