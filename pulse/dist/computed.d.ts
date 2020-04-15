import State from './state';
import Pulse from './pulse';
export declare class Computed<ComputedValueType = any> extends State<ComputedValueType> {
    instance: () => Pulse;
    func: Function;
    deps?: Array<State>;
    constructor(instance: () => Pulse, func: Function, deps?: Array<State>);
    recompute(): void;
}
export default Computed;
