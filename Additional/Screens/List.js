import React, {Component} from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';

class ListItem extends Component {
  
    render() {

        const {regularUrl, thumb, authorName, navigate} = this.props;

        return (
            
                <View style={styles.imgContainer}>
                       <TouchableOpacity onPress={() => navigate(regularUrl)}>
                         <View><Image source={{uri: thumb}} style={styles.img}/></View>
                       </TouchableOpacity>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionItem}>Author: {authorName}</Text>
                    </View>
                
                </View>
            
        );
    }
}

const styles = StyleSheet.create({
    img: {
        width: 100, 
        height: 100,
    },
    imgContainer: {
        position: 'relative',
        flexDirection:'row',
        marginBottom:'5%'
    },
    descriptionContainer: {
        position: 'relative',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        opacity: 0.6,
        padding: 5,
        width: '100%',

    },
    descriptionItem: {
        flex: 1,
        color: 'white',
        marginLeft: 10,
    }
})

export default ListItem;