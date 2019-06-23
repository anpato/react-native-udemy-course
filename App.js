import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from './components/Header'

export default function App() {
	return <Header />
}

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#f8f8f8'
	},
	textStyle: {
		fontSize: 20
	}
})
