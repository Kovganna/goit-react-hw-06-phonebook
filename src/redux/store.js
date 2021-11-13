import { createStore } from 'redux';
import { contactReducer } from './contacts/reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(contactReducer, composeWithDevTools());

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

// store.subscribe(() => console.log(store.getState()));

// // The only way to mutate the internal state is to dispatch an action.
// // The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'counter/incremented' });
// // {value: 1}
// store.dispatch({ type: 'counter/incremented' });
// // {value: 2}
// store.dispatch({ type: 'counter/decremented' });
// // {value: 1}
