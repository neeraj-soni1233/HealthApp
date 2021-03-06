import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_TIMERS, ADD_TIMER, addTimerSuccess } from 'app/state/actions'
import { AsyncStorage } from 'react-native'

let DATAKEY = "timers1"
function* getTimers() {
  try {
    const currentStoredValue = yield call(AsyncStorage.getItem, DATAKEY)
    yield put(addTimerSuccess(JSON.parse(currentStoredValue)) || [])
  } catch (err) {
    console.log(err)
  }
}

function* onAddTimer(action) {
  try {
    const { payload: timer } = action
    const currentStoredValue = yield call(AsyncStorage.getItem, DATAKEY)
    const currentTimers = JSON.parse(currentStoredValue) || []
    const newValue = [timer, ...currentTimers]
    yield call(AsyncStorage.setItem, DATAKEY, JSON.stringify(newValue))
    yield put(addTimerSuccess(newValue))
  } catch (err) {
    console.error(err)
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_TIMERS, getTimers)
  yield takeEvery(ADD_TIMER, onAddTimer)
}
