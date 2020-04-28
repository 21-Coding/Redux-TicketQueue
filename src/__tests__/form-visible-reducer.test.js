import formVisibleReducer from '../../reducers/from-form-visible-reducer';

describe("formVisibleReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });
});