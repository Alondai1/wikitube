import React from 'react';
import './HomePage.style.scss'
import { NavLink } from "react-router-dom";
import SearchBar from '../../components/SearchBar/SearchBar.cmp'
import Footer from '../../components/Footer/Footer.cmp'
import WikiInfo from '../../components/WikiInfo/WikiInfo.cmp'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.cmp'
import YoutubeResultsList from '../../components/YoutubeResultsList/YoutubeResultsList.cmp'
import { getYoutubeResults, getwikiInfo } from "../../store/actions/mediaActions";
import { setCurrentVideo, saveToHistory, clearHistory } from "../../store/actions/appActions";
import { connect } from "react-redux";
import { Loader, Button, Icon } from 'semantic-ui-react'





class HomePage extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props
        if (!this.props.youtubeResults) {
            try {
                dispatch(getYoutubeResults('alan parsons'));
                dispatch(getwikiInfo('alan parsons'));
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
            if (this.props.currentUser) dispatch(saveToHistory(res, this.props.currentUser.username));

        } catch (err) {
            console.log(err);
        }
    }

    setCurrentVideo = (videoId) => {
        const { dispatch } = this.props
        dispatch(setCurrentVideo(videoId));
    }

    clearHistory = () => {
        const { dispatch } = this.props
        console.log('sd');
        dispatch(clearHistory(this.props.currentUser.username));
    }


    render() {
        return (
            <div className="home-page">
                {
                    (this.props.currentUser && this.props.currentUser.isAdmin) &&
                    <NavLink to="/admin">
                    <Button className="admin-button" icon labelPosition='left'>
                        <Icon name='user' />
                        Admin Zone
                  </Button>
                    </NavLink>
                }
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
                {this.props.currentUser && <Footer clearHistory={this.clearHistory}
                    currentUser={this.props.currentUser} />}
            </div>
        )
    }

}

const mapStateToProps = ({ mediaReducer, appReducer }) => {
    const { youtubeResults, wikiInfo } = mediaReducer;
    const { currentVideo, currentTheme, currentUser } = appReducer

    return {
        youtubeResults,
        wikiInfo,
        currentVideo,
        currentTheme,
        currentUser
    };
};

export default connect(mapStateToProps)(HomePage);
