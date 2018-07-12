import React, {Component} from 'react';
import observer from '../../api/observer';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {username: null};

        observer.subscribe(observer.events.loginUser, this.userLoggedIn);
        observer.subscribe(observer.events.loggedOut, this.userLoggedOut);
        observer.subscribe(observer.events.articleCreated, this.articleCreated);
    }
    static propTypes = {
        history: PropTypes.object.isRequired
    };

    articleCreated = () => {
        const { history } = this.props;
        this.props.history.push('/MyArticles');
    };

    userLoggedIn = username => {
        const { history } = this.props;
        this.setState({username});
        this.props.history.push('/blog');
    };

    userLoggedOut = () =>
        this.setState({username: null});

    render = () => {

        const loggedInSection =
            <div id="profile">
                <span id="username">Hello, {this.state.username}!</span> |
                <Link to="/logout">[logout]</Link>
            </div>;

        return (
            <header>
                <span className="header">
        <header className="App-header">
          <h1 className="App-title">
              <div className='text-info'>
              Welcome to my React Blog
              </div>
          </h1>
        </header>
                    {this.state.username ? loggedInSection : null}
                    </span>
            </header>
        )
    }
}

export default withRouter(Header);