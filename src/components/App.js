import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {

    state = { 
        videos: [],
        selectedVideo: null
    }
    //default search on load
    componentDidMount(){
        this.onSearchSubmit('Fame')
    }
    //search call to youtube API
    onSearchSubmit = async searchString => {
        const response = await youtube.get('/search',{
           params:{
            q: searchString
           } 
        })

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }
    //update video detail component on video selection
    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render(){
        return (
        <div className="ui container">
            <SearchBar 
                onFormSubmit = { this.onSearchSubmit}
            />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail 
                            video = {this.state.selectedVideo}
                        />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            videos = {this.state.videos}
                            onVideoSelect = {this.onVideoSelect}
                        />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App