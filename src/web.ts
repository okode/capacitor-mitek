import { WebPlugin } from '@capacitor/core';

import type { MitekPlugin } from './definitions';

export class MitekWeb extends WebPlugin implements MitekPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
