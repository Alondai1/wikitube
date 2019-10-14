import React from 'react';
import { connect } from "react-redux";
import { List } from 'semantic-ui-react'
import './AdminPage.style.scss'
import { getUserDB } from "../../store/actions/appActions";


class AdminPage extends React.Component {

    componentDidMount() {
        if (!this.props.currentUser || !this.props.currentUser.isAdmin) this.props.history.push("/");
        try {
            const { dispatch } = this.props
            dispatch(getUserDB());
        } catch (err) {
            console.log(err);
        }
    }


    render() {
        return (
            <div className="admin-page">
                <List divided relaxed>
                    {
                        this.props.userDB &&
                        this.props.userDB.map((user, idx) => {
                            return (
                                <List.Item key={idx}>
                                    <List.Icon name='user' size='large' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header as='a'>{user.username}</List.Header>
                                        {
                                            user.searchHistory.length > 0 ?
                                                <List.Description as='a'>
                                                    {user.username}'s Searches:
                                      {user.searchHistory.filter((search, idx) => idx <= 3).map((search, idx) => {
                                                        return <span key={idx} className="history-item">{search}</span>
                                                    })}
                                                </List.Description> : <List.Description as='a'>{`${user.username} has no searches yet`}</List.Description>
                                        }

                                    </List.Content>
                                </List.Item>
                            )
                        })
                    }
                </List>


            </div>
        )
    }
}
const mapStateToProps = ({ appReducer }) => {
    const { currentUser, userDB } = appReducer

    return {
        currentUser,
        userDB
    };
};

export default connect(mapStateToProps)(AdminPage);