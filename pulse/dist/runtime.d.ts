import Pulse, { State } from './';
import { SubscriptionContainer } from './sub';
export interface Job {
    state: State;
    newState?: any;
}
export default class Runtime {
    private instance;
    private current;
    private queue;
    private complete;
    private tasksOnceComplete;
    trackState: boolean;
    foundState: Set<State>;
    constructor(instance: () => Pulse);
    ingest(state: State, newState?: any, perform?: boolean): void;
    private perform;
    private sideEffects;
    private updateSubscribers;
    getFoundState(): Set<State<any>>;
    nextPulse(callback: () => any): void;
    static assembleUpdatedValues(cC: SubscriptionContainer): any;
}
