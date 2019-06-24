import React from 'react'
import {
	Text,
	TouchableOpacity,
	TouchableHighlight,
	StyleSheet
} from 'react-native'

const Button = (props) => {
	return (
		<TouchableOpacity style={styles.button}>
			<Text style={styles.buttonText}>{props.children}</Text>
		</TouchableOpacity>
	)
}

export default Button

const styles = StyleSheet.create({
	button: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 6,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},
	buttonText: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
})
