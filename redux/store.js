import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

const makeStore = () => createStore(rootReducer);

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;