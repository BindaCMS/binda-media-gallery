import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'
import rootSaga from './saga/sagas'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    return (
        createStore(
            rootReducer,
            //applyMiddleware(sagaMiddleware)
        )
    )
}

//sagaMiddleware.run(rootSaga)

export default configureStore