import React from 'react'
import './LoginPage.style.scss'
import { Button, Modal, Form, Grid, Segment, Image, Header } from 'semantic-ui-react'
import { connect } from "react-redux";
import { handleLogin, handleSignup } from "../../store/actions/appActions";




class LoginPage extends React.Component {

    state = {
        username: '',
        password: '',
        showWrongCredsMessege: false
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleLogin = async (e) => {
        e.preventDefault()
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        const { dispatch } = this.props
        await dispatch(handleLogin(user));
        if (this.props.currentUser) this.props.history.push("/");
        else this.setState({ showWrongCredsMessege: true })
    }

    handleSignup = async (e) => {
        e.preventDefault()
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        const { dispatch } = this.props
        await dispatch(handleSignup(user));
        this.props.history.push("/");
    }



    render() {
        return (
            <div className="login-page">
                <Segment placeholder className={this.props.currentTheme}>
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column>
                            <Form onSubmit={this.handleLogin}>
                                <Form.Input
                                    onInput={this.handleInput}
                                    icon='user'
                                    iconPosition='left'
                                    label='Username'
                                    placeholder='Username'
                                    name="username"
                                />
                                <Form.Input
                                    onInput={this.handleInput}
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    type='password'
                                    name="password"
                                    placeholder='Password'
                                />
                                <Button content='Login' primary />
                                {
                                    this.state.showWrongCredsMessege ?
                                        <span className="wrong-creds">Wrong Password Or Username</span> : ''
                                }
                            </Form>
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle'>
                            <Modal trigger={<Button content='Sign up' icon='signup' size='big' />}>
                                <Modal.Header>Sign Up</Modal.Header>
                                <Modal.Content image>
                                    <Form onSubmit={this.handleSignup}>
                                        <Form.Input
                                            onInput={this.handleInput}
                                            icon='user'
                                            iconPosition='left'
                                            label='Username'
                                            placeholder='Username'
                                            name="username"
                                            required
                                        />
                                        <Form.Input
                                            onInput={this.handleInput}
                                            icon='lock'
                                            iconPosition='left'
                                            label='Password'
                                            type='password'
                                            name="password"
                                            placeholder='Password'
                                            required
                                        />
                                        <Button content='SignUp' primary />
                                    </Form>
                                </Modal.Content>
                            </Modal>

                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = ({ appReducer }) => {

    const { currentTheme, currentUser } = appReducer

    return {
        currentTheme,
        currentUser
    };
};

export default connect(mapStateToProps)(LoginPage);



