type CountStateFunction = (val?: MouseEvent) => void

export interface CountState {
  increment: CountStateFunction
  decrement: CountStateFunction
  reset: CountStateFunction
  count: number
}
