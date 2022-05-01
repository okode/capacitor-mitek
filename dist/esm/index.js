import { registerPlugin } from '@capacitor/core';
const Mitek = registerPlugin('Mitek', {
    web: () => import('./web').then(m => new m.MitekWeb()),
});
export * from './definitions';
export { Mitek };
//# sourceMappingURL=index.js.map