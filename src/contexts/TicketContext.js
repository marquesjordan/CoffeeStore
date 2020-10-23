import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from '../contexts/createDataContext';
import Moment from 'react-moment';
import moment from 'moment';

const ticketReducer = (state, action) => {
    switch (action.type) {
        case 'get_tickets':
            return { tickets: state.tickets, timestamp: Date.now()}
        case 'add_ticket':
            return { ...state, tickets: action.payload, timestamp: Date.now()}
        default:
            return state
    }
}

const getTickets = (dispatch) => {
    return async (callback) => {
        dispatch({type:'get_tickets', payload: []});
    }
}

const addTicket = (dispatch) => {
    return async (tickets, ticket, callback) => {
        let item = {};
        let totalAddedTime = 0;
        
        for (var x = 0; x < ticket.length - 1; x++ ) {
            totalAddedTime += ticket[x].time;
        }

        item.ticket = ticket;

        item.createdTime = moment();
        item.completeTime = moment().add(totalAddedTime, 'seconds');
        item.pickedupTime = moment().add(totalAddedTime + 3, 'seconds');

        tickets.push(item)

        dispatch({type:'add_ticket', payload: tickets.reverse()});

        if (callback) {
            callback();
        }
    }
}

export const { Provider, Context } = createDataContext(
    ticketReducer,
    {addTicket, getTickets},
    { tickets: []}
)