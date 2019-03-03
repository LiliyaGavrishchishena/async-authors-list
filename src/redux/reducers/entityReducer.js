export default function entityReducer(state = {}, { payload }) {
  if (payload && payload.entities) {
    const newState = { ...state };

    Object.keys(payload.entities).forEach(
      // eslint-disable-next-line no-return-assign
      entitiesKey =>
        (newState[entitiesKey] = {
          ...state[entitiesKey],
          ...payload.entities[entitiesKey],
        }),
    );

    return newState;
  }
  return state;
}
