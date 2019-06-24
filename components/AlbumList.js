import React, { Component } from 'react'
import {
	ScrollView,
	StyleSheet,
	ActivityIndicator,
	RefreshControl
} from 'react-native'
import Axios from 'axios'
import AlbumDetails from './AlbumDetails'

export default class AlbumList extends Component {
	constructor() {
		super()
		this.state = {
			albums: [],
			refreshing: false
		}
	}

	componentDidMount = async () => {
		await this.fetchAlbums()
	}

	fetchAlbums = async () => {
		try {
			this.setState({ refreshing: true })
			const url = await Axios.get(
				'https://rallycoding.herokuapp.com/api/music_albums'
			)
			await this.setState({ albums: url.data, refreshing: false })
		} catch (error) {
			throw error
		}
	}

	renderAlbums = () => {
		return this.state.albums.map((album, index) => {
			return <AlbumDetails key={index} album={album} />
		})
	}

	render() {
		return (
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this.fetchAlbums}
					/>
				}
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
