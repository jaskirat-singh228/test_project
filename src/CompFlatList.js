import { StyleSheet, Text, FlatList } from 'react-native'
import React from 'react'

const CompFlatList = () => {
    const friendList = [
        { name: 'Friend #1', age: 11 },
        { name: 'Friend #2', age: 12 },
        { name: 'Friend #3', age: 13 },
        { name: 'Friend #4', age: 14 },
        { name: 'Friend #5', age: 15 },
        { name: 'Friend #6', age: 16 },
        { name: 'Friend #7', age: 17 },
        { name: 'Friend #8', age: 18 },
        { name: 'Friend #9', age: 19 },
        { name: 'Friend #10', age: 20 }
    ]
    return (
        <FlatList
            data={friendList}
            renderItem={({ item }) => {
                return <Text style={styles.Style}>Name: {item.name}, Age: {item.age}</Text>
            }}
            keyExtractor={(item) => {
                item.name
            }}
            // horizontal
            // showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true} //or false
        />
    )
}

export default CompFlatList

const styles = StyleSheet.create({
    Style: {
        marginVertical: 50,
        fontSize: 20,
        fontWeight: 'bold'
    }
})