import React, {useState, useContext} from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Button} from 'react-native';
import {Context as TicketContext} from '../contexts/TicketContext';

const MENU = [
    {
        id: '1',
        name: 'Cafe Au Lait',
        time: 4
    },
    {
        id: '2',
        name: 'Cappuccino',
        time: 10
    },
    {
        id: '3',
        name: 'Expresso',
        time: 15
    },
]

export default MenuScreen = () => {

    const { state, addTicket } = useContext(TicketContext); 

    const [orders, setOrders] = useState([]);

    const menuItem = ({item, index}) => {
        return (
            <TouchableOpacity key={`${item.id}-${index}`} onPress={ () => setOrders(orders.concat(item))  }>
                <View style={styles.itemContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>
                    <View style={{marginLeft: 10}}>
                         <Text style={styles.menuItem}>{item.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const submitOrder = (ticket) => {
        if (ticket.length) {
            addTicket(state.tickets, ticket)

            setOrders([]);
        }

        return
    }


    return (

        <View style={styles.body}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Place Order
                </Text>
            </View>
            
            <View>
                <FlatList
                    data={MENU}
                    renderItem={menuItem}
                    keyExtractor={item => item.id}
                />
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Current Order
                </Text>
            </View>

            <FlatList
                style={styles.order}
                data={orders}
                renderItem={({item, index}) => {
                    return (
                        <View>
                        <Text>{index + 1}. {item.name}</Text>
                    </View>
                    )
                }}
                keyExtractor={(item, index)=> `${item.id.toString()}-${index.toString()}`}
            />
            <View style={{paddingVertical: 15, marginVertical: 20, marginHorizontal: 10}}>
                <Button
                    title="Submit Order"
                    onPress={() => submitOrder(orders)}
                />
                <Button
                    title="Clear Order"
                    onPress={() => setOrders([])}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    titleContainer: {
        marginBottom: 10, 
        marginTop: 15
    },
    title: {
        fontWeight: 'bold', 
        fontSize: 25
    },
    button: {
        borderRadius: 50,
        height: 25,
        width: 25,
        borderWidth: 1,
        alignContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    itemContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        margin: 10,
        paddingVertical: 15,
        paddingHorizontal: 10
    },  
    menuItem: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    order: {
        borderWidth: 1, 
        marginHorizontal: 10, 
        padding: 10
    }
})