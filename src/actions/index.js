import formVisibleReducer from "../reducers/form-visible-reducer";

export const deleteTicket = id => ({
  type: 'DELETE_TICKET',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

// export const addTicket = (ticket) => {
//   const { names, location, issue, formattedWaitTime, timeOpen, id } = ticket;
//   return {
//     type: 'ADD_TICKET',
//     names: names,
//     location: location,
//     issue: issue,
//     formattedWaitTime,
//     timeOpen: timeOpen,
//     id: id
//   }
// }

export const updateTime = (id, formattedWaitTime) => ({
  type: 'UPDATE_TIME',
  id: id,
  formattedWaitTime: formattedWaitTime
});