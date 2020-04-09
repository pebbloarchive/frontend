"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("../state");
const utils_1 = require("../utils");
function PulseHOC(ReactComponent, deps, pulseInstance) {
    if (!pulseInstance)
        pulseInstance = utils_1.getInstance(deps[0]);
    let React = pulseInstance.config.frameworkConstructor;
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.props = props;
            // is array of deps
            if (Array.isArray(deps)) {
                pulseInstance.subController.subscribe(this, deps);
                // keyed object of deps, map to props
            }
            else if (typeof deps === 'object') {
                // keyed object of deps, map to props
                const x = pulseInstance.subController.mapToProps(this, deps);
                props = Object.assign(Object.assign({}, props), x.props);
                this.pulseComponentContainer = x.cC;
            }
        }
        componentDidMount() {
            if (pulseInstance.config.waitForMount)
                pulseInstance.subController.mount(this);
        }
        componentWillUnmount() {
            pulseInstance.subController.unsubscribe(this);
        }
        render() {
            return React.createElement(ReactComponent, this.props);
        }
    };
}
exports.PulseHOC = PulseHOC;
function usePulse(deps, pulseInstance) {
    let depsArray = utils_1.normalizeDeps(deps);
    if (!pulseInstance)
        pulseInstance = utils_1.getInstance(depsArray[0]);
    let depsArrayFinal = [];
    // this allows you to pass in a keyed object of States and subscribe to all  State within the first level of the object. Useful if you wish to subscribe a component to several State instances at the same time.
    depsArray.forEach(dep => {
        if (dep instanceof state_1.default)
            depsArrayFinal.push(dep);
        else if (typeof dep === 'object')
            for (let d in dep) {
                if (dep[d] instanceof state_1.default)
                    depsArrayFinal.push(dep[d]);
            }
    });
    // get React constructor
    const React = pulseInstance.intergration.frameworkConstructor;
    if (!React)
        return;
    // this is a trigger state used to force the component to re-render
    const [_, set_] = React.useState({});
    React.useEffect(function () {
        // create a callback based subscription, callback invokes re-render trigger
        const cC = pulseInstance.subController.subscribe(() => {
            set_({});
        }, depsArray);
        // unsubscribe on unmount
        return () => pulseInstance.subController.unsubscribe(cC);
    }, []);
    return depsArray.map(dep => {
        if (dep instanceof state_1.default)
            return dep.getPublicValue();
        return dep;
    });
}
exports.usePulse = usePulse;
exports.default = {
    name: 'react',
    bind(pulseInstance) {
        //
        // pulseInstance.React = (instance: any, deps: Array<State>) =>
        //   PulseHOC(instance, deps, pulseInstance);
        // // usePulse is able to get its context from the state passed in, below is redundant
        // pulseInstance.usePulse = (deps: Array<State>) => usePulse(deps, pulseInstance);
    },
    updateMethod(componentInstance, updatedData) {
        if (updatedData) {
            componentInstance.setState(updatedData);
        }
        else {
            componentInstance.forceUpdate();
        }
    },
    onReady(pulseInstance) {
        //
        pulseInstance.usePulse = (deps) => usePulse(deps, pulseInstance);
    }
};
