import React from 'react';
import { View, Text } from 'react-native';
import{StyleSheet} from 'react-native';

const MyApp = () => {
    return (

        <View>
            <Text style = {{fontSize: 24}}>RP Values</Text>
            <Text style = {{color:'green'}}>Excellence</Text>
            <Text style = {{backgroundColor:'yellow'}}>Customer-Centric</Text>
            <Text style = {{fontStyle: 'italic'}}>Integrity</Text>
            <Text style = {{textAlign:'center'}}>Teamwork</Text>
            <Text style = {{color:'white', backgroundColor: 'black'}}>Enterprising</Text>
        </View>
    )
}

const MyApp2 = () => {
    return (
        <View style={styles1.container}>
            <View style={styles1.greenBox}>
                <Text style={styles1.boxText}>Who We Are</Text>
            </View>

            <View style={styles1.greenBox}>
                <Text style={styles1.boxText}>Our People</Text>
            </View>

            <View style={styles1.greenBox}>
                <Text style={styles1.boxText}>Our Campus</Text>
            </View>
        </View>
    );
};

const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxText: {
        textAlign: 'center',
        color: 'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
});


const MyApp3 = () => {
    return (
        <View style={styles2.parent}>
            <View style={[styles2.child, { backgroundColor: 'powderblue' }]}>
                <Text style={styles2.childText}>Child 1</Text>
            </View>

            <View style={[styles2.child, { backgroundColor: 'skyblue' }]}>
                <Text style={styles2.childText}>Child 2</Text>
            </View>

            <View style={[styles2.child, { backgroundColor: 'steelblue' }]}>
                <Text style={styles2.childText}>Child 3</Text>
            </View>
        </View>
    );
};

const styles2 = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
    },
    child: {
        flex: 1,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    childText: {
        textAlign: 'center',
        fontSize: 24,
    },
});

const MyApp4 = () => {
    return (
        <View style={styles3.parent}>
            <View style={[styles3.child, { backgroundColor: 'skyblue' }]}>
                <Text>Square 1</Text>
            </View>
            <View style={[styles3.child, { backgroundColor: 'mediumaquamarine' }]}>
                <Text>Square 2</Text>
            </View>
            <View style={[styles3.child, { backgroundColor: 'lightcoral' }]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
}

const styles3 = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        justifyContent: 'center',   // centers vertically
        alignItems: 'center',       // centers horizontally
        flexDirection: 'row',       // arrange squares side by side
    },
    child: {
        width: 80,
        height: 80,
        marginHorizontal: 10,       // space between squares
        justifyContent: 'center',   // center text vertically
        alignItems: 'center',       // center text horizontally
    },
});

export default MyApp4;