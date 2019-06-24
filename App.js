import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from './components/Header'
import AlbumList from './components/AlbumList'

export default function App() {
	return (
		<View style={styles.container}>
			<Header headerText={'Albums'} />
			<AlbumList />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10,
		justifyContent: 'center'
	}
})
