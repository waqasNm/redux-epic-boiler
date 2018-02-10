import { combineEpics } from 'redux-observable';

import AuthEpic from './authEpic';
import FireEpic from './fireEpic';

const rootEpic = combineEpics(
    AuthEpic.signupEpic,
    AuthEpic.signinEpic,
    
    FireEpic.signinEpic,
    FireEpic.signupEpic
);

export default rootEpic;