'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

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
//# sourceMappingURL=plugin.cjs.js.map
