import ticketListReducer from '../../reducers/ticket-list-reducer';
import * as c from './../../actions';
import Moment from 'moment';
//variable = ticketListReducer
//ticketListReducer takes 2 arguments (1: current state, 2: an action being applied to the current state)
describe('ticketListReducer', () => {

  const currentState = {
    1: {
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: 1
    },
    2: {
      names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: 2
    }
  }

  let action;
  const ticketData = {
    names: "Ryan and Aimen",
    location: "4b",
    issue: "Redux action is not working correctly, cause I suck at it.",
    timeOpen: 0,
    formattedWaitTime: "4 minutes",
    id: 1
  };

  test('Should add a formatted wait time to ticket entry', () => {
    const { names, location, issue, timeOpen, id } = ticketData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(ticketListReducer({ [id]: ticketData }, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  // test('Should successfully add a ticket list that includes Moment-formatted wait times', () => {
  //   const { names, location, issue, timeOpen, id } = ticketData;
  //   action = {
  //     type: 'ADD_TICKET',
  //     names: names,
  //     location: location,
  //     issue: issue,
  //     timeOpen: timeOpen,
  //     id: id,
  //     formattedWaitTime: new Moment().fromNow(true)
  //   };

  //   expect(ticketListReducer({}, action)).toEqual({
  //     [id]: {
  //       names: names,
  //       location: location,
  //       issue: issue,
  //       timeOpen: timeOpen,
  //       id: id,
  //       formattedWaitTime: 'a few seconds'
  //     }
  //   });
  // });

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_TICKET',
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2
      }
    });
  });
});