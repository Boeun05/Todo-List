import {
    useNewKeyword,
    useArrayState,
    checkTarget,
    checkTypes,
} from './validation.js'
    

// DOM 접근을 최소화
// DOM을 변경하는 곳은 하나의 패턴으로만 해야할 것
export default function TodoList($target, initalState) {
  this.state = initalState;
  this.$target = $target;

  this.validation = (state) => {
    useNewKeyword(this)
    useArrayState(state)
    checkTarget(this.$target)
    checkTypes(
      state,
      ({ text, isCompleted }) =>
        typeof text === 'string' && typeof isCompleted === 'boolean'
    )
  }

  this.render = () => {
    const htmlString =
      this.state.length > 0
        ? `<ul>${this.state
            .map(({ text, isCompleted }) =>
              isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
            )
            .join('')}</ul>`
        : ''
    this.$target.innerHTML = htmlString
  }

  this.setState = (nextState) => {
    this.validation(nextState)
    this.state = nextState
    this.render()
  }
  this.validation(this.state)
  this.render()
}