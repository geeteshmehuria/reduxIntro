const IncreseByOne = 'INCRESE'
const decreseByOne = 'DECRESE'
const initialStage = { counter: 0 }
export function countReduser(state = initialStage, action) {
  switch (action.type) {
    case IncreseByOne:
      return { ...state, counter: state.counter + 1 }
    case decreseByOne:
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}
