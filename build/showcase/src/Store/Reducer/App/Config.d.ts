import IAppConfig from '../../../../../Setup/IAppConfig';
declare namespace Config {
    type State = {
        config: IAppConfig;
    };
}
declare const Config: import("typesafe-actions").Reducer<Config.State, any> & {
    handlers: Record<any, (state: Config.State, action: any) => Config.State>;
};
export default Config;
