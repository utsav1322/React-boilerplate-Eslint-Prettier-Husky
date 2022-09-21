import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the stpl state domain
 */

const selectStplDomain = state => state.stpl || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Stpl
 */

const makeSelectStpl = () =>
  createSelector(
    selectStplDomain,
    substate => substate,
  );

export default makeSelectStpl;
export { selectStplDomain };
