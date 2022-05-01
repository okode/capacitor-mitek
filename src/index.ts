import { registerPlugin } from '@capacitor/core';

import type { MitekPlugin } from './definitions';

const Mitek = registerPlugin<MitekPlugin>('Mitek', {
  web: () => import('./web').then(m => new m.MitekWeb()),
});

export * from './definitions';
export { Mitek };
