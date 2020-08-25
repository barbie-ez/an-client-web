export const asyncActionName = (baseName) => ({
  loading: `${baseName}_LOADING`,
  failure: `${baseName}_FAILURE`,
  success: `${baseName}_SUCCESS`,
});

export const asyncActions = (actionName) => ({
  loading: (bool) => ({
    type: asyncActionName(actionName).loading,
    payload: bool,
  }),
  success: (payload) => ({
    type: asyncActionName(actionName).success,
    payload,
  }),
  failure: (bool, error) => ({
    type: asyncActionName(actionName).failure,
    payload: { error, status: bool },
  }),
});
