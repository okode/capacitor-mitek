import { WebPlugin } from '@capacitor/core';
import type { MitekPlugin } from './definitions';
export declare class MitekWeb extends WebPlugin implements MitekPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
