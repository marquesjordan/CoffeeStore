import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Context as TicketContext} from '../contexts/TicketContext';

import moment from 'moment';


export default TicketScreen = () => {
    const { state, getTickets } = useContext(TicketContext); 

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
            <View style={styles.container}>
                <View style={styles.ticket}>
                    <Text style={{fontWeight: 'bold', color: isCompleted(item.completeTime) ? 'green' : 'red' }}>
                        {isCompleted(item.completeTime) 
                            ? 'Completed' : 'Brewing'
                        }
                    </Text>
                    <Text style={{fontWeight: 'bold', color: isCompleted(item.completeTime) ? 'green' : 'red' }}>                        
                        {isCompleted(item.pickedupTime) 
                            ? 'Picked Up' : 'Ready'
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
        <View style={styles.screen}>
            <FlatList 
                data={state.tickets}
                renderItem={renderTickets}
                keyExtractor={(item, index)=> `-${index.toString()}`}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        borderWidth: 1, 
        marginHorizontal: 10, 
        padding: 10
    },
    ticket: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingVertical: 10
    }
})