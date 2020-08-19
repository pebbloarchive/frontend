import Pulse from 'pulse-framework';
import React from 'react';

export const App = new Pulse({
  framework: React,
  storagePrefix: 'pblo_'
});

import auth from './controllers/auth';
import profiles from './controllers/profiles';

const core = {
    auth,
    profiles
}

export default App.Core(core);
export type ICore = typeof core;