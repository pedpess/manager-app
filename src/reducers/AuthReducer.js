const INITIAL_STATE = {
  email: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EmailChanged':
      return state;
    default:
      return state;
  }
};

