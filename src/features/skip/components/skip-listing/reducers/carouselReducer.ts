import type { CarouselAction, CarouselState } from "../../interfaces";

export function carouselReducer(state: CarouselState, action: CarouselAction): CarouselState {
  switch (action.type) {
    case 'NEXT':
      return {
        activeStep: Math.min(state.activeStep + 1, action.maxSteps - 1)
      };
    case 'PREV':
      return {
        activeStep: Math.max(state.activeStep - 1, 0)
      };
    case 'GO_TO':
      return {
        activeStep: action.step
      };
    default:
      return state;
  }
}

export const carouselActions = {
  next: (maxSteps: number): CarouselAction => ({ type: 'NEXT', maxSteps }),
  prev: (): CarouselAction => ({ type: 'PREV' }),
  goTo: (step: number): CarouselAction => ({ type: 'GO_TO', step })
};