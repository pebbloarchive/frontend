import { State } from './';
export declare type SubscriptionContainer = ComponentContainer | CallbackContainer;
export interface SubscribingComponentObject {
    componentUUID: string;
    keys: Array<string>;
}
export declare class ComponentContainer {
    instance: any;
    subs?: Set<State>;
    keysChanged: Array<string>;
    ready: boolean;
    passProps: boolean;
    mappedStates?: {
        [key: string]: State;
    };
    constructor(instance: any, subs?: Set<State>);
}
export declare class CallbackContainer extends ComponentContainer {
    callback: Function;
    subs?: Set<State>;
    constructor(callback: Function, subs?: Set<State>);
}
export default class SubController {
    components: Set<ComponentContainer>;
    callbacks: Set<CallbackContainer>;
    constructor();
    /**
     * Subscribe to Pulse state WITH return object
     */
    mapToProps(instance: any, subs?: {
        [key: string]: State;
    }): {
        [key: string]: State['value'];
    };
    /**
     * Subscribe to Pulse state WITHOUT return object
     */
    subscribe(instance: any, subs?: Array<State>): SubscriptionContainer;
    registerComponent(instance: any, subs?: any): SubscriptionContainer;
    mount(instance: any): void;
    /**
     * Unsubscribe a component or callback
     * @param instance - Either a CallbackContainer or a bound component instance
     */
    unsubscribe(instance: any): void;
}
