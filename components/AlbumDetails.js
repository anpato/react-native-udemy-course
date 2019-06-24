import React from 'react'
import { Text, Image, View, StyleSheet, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetails = ({ album }) => {
	const { title, artist, image, thumbnail_image, url } = album
	return (
		<Card>
			<CardSection>
				<View style={styles.thumbnailContainer}>
					<Image style={styles.thumbnail} source={{ uri: thumbnail_image }} />
				</View>
				<View style={styles.headerContent}>
					<Text>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image style={styles.albumCover} source={{ uri: image }} />
			</CardSection>
			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
			</CardSection>
		</Card>
	)
}

export default AlbumDetails

const styles = StyleSheet.create({
	headerContent: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbnail: {
		height: 50,
		width: 50
	},
	thumbnailContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	albumCover: {
		height: 300,
		flex: 1,
		width: null
	}
})
