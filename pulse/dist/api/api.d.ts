interface PulseResponse extends Response {
    data?: any;
    timedout?: boolean;
}
export interface apiConfig {
    options: RequestInit;
    baseURL?: string;
    timeout?: number;
    requestIntercept?: Function;
    responseIntercept?: Function;
}
export default class API {
    config: apiConfig;
    constructor(config?: apiConfig);
    /**
     * Override API config and request options. Returns a modified instance this API with overrides applied.
     * @param config - O
     */
    with(config: apiConfig): API;
    get(endpoint: string): Promise<PulseResponse>;
    post(endpoint: string, payload?: any): Promise<PulseResponse>;
    put(endpoint: string, payload?: any): Promise<PulseResponse>;
    patch(endpoint: string, payload?: any): Promise<PulseResponse>;
    delete(endpoint: string, payload?: any): Promise<PulseResponse>;
    private send;
}
export declare const getChannel: (channelId: any) => Promise<PulseResponse>;
export {};
