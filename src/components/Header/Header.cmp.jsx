import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.style.scss";
import { Dropdown } from "semantic-ui-react";
import { setTheme } from "../../store/actions/appActions";
import { connect } from "react-redux";
import userService from "../../services/userService";
import { handleLogin } from "../../store/actions/appActions";
import UtilService from "../../services/utilService";



class Header extends React.Component {

    async componentDidMount() {
        const theme = UtilService.load('theme')
        const user = await userService.getCurrentUser()
        const { dispatch } = this.props
        if (user) dispatch(handleLogin(user));
        if (theme) dispatch(setTheme(theme));

    }

    setTheme = (theme) => {
        const { dispatch } = this.props
        dispatch(setTheme(theme));
        UtilService.store('theme', theme)
    }

    handleLogout = () => {
        const { dispatch } = this.props
        dispatch(handleLogin(''));
    }


    render() {
        return (
            <div className="header">
                <NavLink to="/">
                    <img
                        src="https://www.coding-academy.org/images/ca-logo@2x.png"
                        className="brand brand-logo left"
                        alt=""
                    />
                </NavLink>
                <ul className="links-container">


                    {this.props.currentUser ?
                        <li>
                            <a className="link">{this.props.currentUser.username.toUpperCase()}</a>
                        </li> : ''
                    }
                    {
                        this.props.currentUser ?
                            <li>
                                <img src={`https://avatars.dicebear.com/v2/avataaars/${this.props.currentUser.username}.svg`} alt="" />
                            </li> : ''
                    }
                    <li>
                        <Dropdown item text='Change Theme'>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => this.setTheme('dark')} className="theme-item">Dark</Dropdown.Item>
                                <Dropdown.Item onClick={() => this.setTheme('')} className="theme-item">Classic</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>

                    <li>
                        {!this.props.currentUser ?
                            <NavLink className="link" to="/login">
                                LOGIN/SIGNUP
              </NavLink> : <a className="link" onClick={this.handleLogout}>LOGOUT</a>

                        }
                    </li>
                    <li>
                        <NavLink className="link" to="/">
                            HOME
              </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}


const mapStateToProps = ({ appReducer }) => {

    const { currentUser } = appReducer

    return {
        currentUser
    };
};

export default connect(mapStateToProps)(Header);
