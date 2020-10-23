import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Context as TicketContext} from '../contexts/TicketContext';

import moment from 'moment';


export default TicketScreen = () => {
    const { state, getTickets } = useContext(TicketContext); 
    const [tickets, setTickets] = useState(state.tickets);

    useEffect(() => {
        const interval = setInterval(() => {
            getTickets(); 
        }, 1000);

        return () => clearInterval(interval);  
    }, [])

    const isCompleted = (time) => {
        var a = moment()
        return time.isBefore(a);
    }

    const renderTickets = ({item}) => {

        return (
            <View style={{borderWidth: 1, marginHorizontal: 10, padding: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
                    <Text style={{fontWeight: 'bold', color: isCompleted(item.completeTime) ? 'green' : 'red' }}>
                        {isCompleted(item.completeTime) 
                            ? 'Completed' : 'Brewing'
                        }
                    </Text>
                    <Text style={{fontWeight: 'bold'}}>                        
                        {isCompleted(item.pickedupTime) 
                            ? 'Picked Up' : ''
                        }
                    </Text>
                </View>
                {item.ticket.map( (val, index) => 
                    <View key={`${val.id}-${index}`}>
                        <Text>{`${index + 1}. ${val.name}`}</Text>
                    </View>
                )}
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            <FlatList 
                data={state.tickets}
                renderItem={renderTickets}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}