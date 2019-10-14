import React from "react";
import { Button, Confirm } from 'semantic-ui-react'

import "./Footer.style.scss";

class Footer extends React.Component {

    state = { showModal: false }

    showModal = () => this.setState({ showModal: true })

    confirmModal = () => {
        this.props.clearHistory()
        this.setState({ showModal: false })
    }

    render() {
        return (
            <div className="footer">
                {
                    this.props.currentUser.searchHistory.length > 0 ?
                        <span>
                            {this.props.currentUser.username}'s Last Searches:
                {this.props.currentUser.searchHistory.filter((search, idx)=>idx<=3).map((search,idx) => {
                                return <span key={idx} className="history-item">{search}</span>
                            })}
                            <Button onClick={this.showModal}>Clear History</Button>
                        </span> : <span>{`${this.props.currentUser.username} has no searches yet`}</span>
                }

                <Confirm
                    open={this.state.showModal}
                    content='Are you sure you want to delete all search history?'
                    onCancel={()=>  this.setState({ showModal: false })}
                    onConfirm={this.confirmModal}
                />


            </div>
        );
    }
};


export default Footer;
