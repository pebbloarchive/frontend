import { SubscriptionContainer } from './sub';
import State from './state';
export default class Dep {
    deps: Set<any>;
    subs: Set<SubscriptionContainer>;
    dynamic: Set<State>;
    constructor(initialDeps?: Array<Dep>);
    depend(instance: State): void;
}
