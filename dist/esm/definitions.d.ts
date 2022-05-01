export interface MitekPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
