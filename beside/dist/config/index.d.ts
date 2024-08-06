import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
interface iConfig {
    env: string;
    port: number;
    database: PostgresConnectionOptions;
    keys: {
        privateKey: string;
        publicKey: string;
    };
}
declare const _default: () => Partial<iConfig>;
export default _default;
