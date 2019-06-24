import React, { Component } from 'react'
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import Axios from 'axios'
import AlbumDetails from './AlbumDetails'

export default class AlbumList extends Component {
	constructor() {
		super()
		this.state = {
			albums: []
		}
	}

	componentDidMount = async () => {
		try {
			const url = await Axios.get(
				'https://rallycoding.herokuapp.com/api/music_albums'
			)
			this.setState({ albums: url.data })
		} catch (error) {
			throw error
		}
	}

	renderAlbums = () => {
		if (this.state.albums.length < 1) {
			return (
				<ActivityIndicator
					size="large"
					color="blue"
					style={{ marginTop: 300 }}
				/>
			)
		} else {
			return this.state.albums.map((album, index) => {
				return <AlbumDetails key={index} album={album} />
			})
		}
	}

	render() {
		return (
			<ScrollView
				style={{
					alignContent: 'center',
					justifyItems: 'center',
					flex: 1
				}}>
				{this.renderAlbums()}
			</ScrollView>
		)
	}
}
