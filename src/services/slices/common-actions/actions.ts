import { Action } from '@reduxjs/toolkit';

interface RejectedAction extends Action {
  error: Error;
}

export function isRejectedAction(action: Action): action is RejectedAction {
  return action.type.endsWith('rejected');
}
