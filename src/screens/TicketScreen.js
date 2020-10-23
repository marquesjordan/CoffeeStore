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
        // console.log(a.diff(time))
        return time.diff(a) >= 0
    }

    const renderTickets = ({item}) => {

        return (
            <View style={{borderWidth: 1, marginHorizontal: 10, padding: 10}}>
                {console.log(item)}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
                    {console.log('ddd')}
                    <Text>
                        {isCompleted(item.completeTime) 
                            ? 'Completed' : 'Brewing'
                        }
                    </Text>
                    <Text>Picked Up</Text>
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