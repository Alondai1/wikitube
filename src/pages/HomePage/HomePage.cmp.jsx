import React from 'react';
import './HomePage.style.scss'
import SearchBar from '../../components/SearchBar/SearchBar.cmp'
import WikiInfo from '../../components/WikiInfo/WikiInfo.cmp'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.cmp'
import YoutubeResultsList from '../../components/YoutubeResultsList/YoutubeResultsList.cmp'
import { getYoutubeResults, getwikiInfo } from "../../store/actions/mediaActions";
import { setCurrentVideo } from "../../store/actions/appActions";
import { connect } from "react-redux";
import { Loader } from 'semantic-ui-react'





class HomePage extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props
        if (!this.props.youtubeResults) {
            try {
                dispatch(getYoutubeResults('ringo star'));
                dispatch(getwikiInfo('ringo star'));
            } catch (err) {
                console.log(err);
            }
        }
    }

    handleSearchSubmit = (res) => {
        try {
            const { dispatch } = this.props
            dispatch(getYoutubeResults(res));
            dispatch(getwikiInfo(res));
            dispatch(setCurrentVideo(''));
        } catch (err) {
            console.log(err);
        }
    }

    setCurrentVideo = (videoId) => {
        const { dispatch } = this.props
        dispatch(setCurrentVideo(videoId));
    }


    render() {
        return (
            <div className="home-page">
                <SearchBar handleSearchSubmit={this.handleSearchSubmit} />
                {
                    (this.props.wikiInfo && this.props.youtubeResults) ?
                        <div className="content-container">
                            <div className="youtube-results">
                                <YoutubeResultsList
                                    theme={this.props.currentTheme}
                                    setCurrentVideo={this.setCurrentVideo}
                                    results={this.props.youtubeResults.items.filter(result => result.id.videoId)} />

                            </div>
                            <div className="media-container">
                                <VideoPlayer videoId={this.props.currentVideo} />


                                <WikiInfo theme={this.props.currentTheme} info={this.props.wikiInfo} />
                            </div>
                        </div> : <Loader active content='Loading'></Loader>
                }
            </div>
        )
    }

}

const mapStateToProps = ({ mediaReducer, appReducer }) => {
    const { youtubeResults, wikiInfo } = mediaReducer;
    const { currentVideo, currentTheme } = appReducer

    return {
        youtubeResults,
        wikiInfo,
        currentVideo,
        currentTheme
    };
};

export default connect(mapStateToProps)(HomePage);
