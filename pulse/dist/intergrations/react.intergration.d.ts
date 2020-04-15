import Pulse from '..';
import State from '../state';
import { SubscriptionContainer } from '../sub';
declare type keyedState = {
    [key: string]: State;
};
export declare function PulseHOC(ReactComponent: any, deps?: Array<State> | {
    [key: string]: State;
}, pulseInstance?: Pulse): {
    new (props: any): {
        [x: string]: any;
        pulseComponentContainer: SubscriptionContainer;
        props: any;
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): any;
    };
    [x: string]: any;
};
export declare function usePulse(deps: Array<State | keyedState> | State, pulseInstance?: Pulse): any[];
declare const _default: {
    name: string;
    bind(pulseInstance: Pulse): void;
    updateMethod(componentInstance: any, updatedData: Object): void;
    onReady(pulseInstance: any): void;
};
export default _default;
