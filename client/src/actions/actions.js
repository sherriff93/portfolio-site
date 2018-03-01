import * as types from './action-types'

export function addWord(values, name) {
  return {
    type: types.ADD_WORD,
    values,
    name
  }
}

export function deleteWord(value) {
  return {
    type: types.DELETE_WORD,
    value
  }
}

export function addDictionary(value) {
  return {
    type: types.ADD_DICTIONARY,
    value
  }
}

export function deleteDictionary(value) {
  return {
    type: types.DELETE_DICTIONARY,
    value
  }
}

export function questionAnswered(english, isCorrect) {
  return {
    type: types.QUESTION_ANSWERED,
    english,
    isCorrect
  }
}

export function setItems(items) {
  return {
    type: types.SET_ITEMS,
    items
  }
}

export function resetScore() {
  return {
    type: types.RESET_SCORE
  }
}

export function fetchData() {
  return {
    type: types.FETCH_DATA
  }
}

export function fetchSuccess(data) {
  return {
    type: types.FETCH_SUCCESS,
    data
  }
}

export function fetchFail() {
  return {
    type: types.FETCH_FAIL
  }
}
