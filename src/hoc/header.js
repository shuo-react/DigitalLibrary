import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Nav } from 'react-bootstrap';

import classes from './header.module.css';

export class header extends Component {
    handleOnSelect = (eventKey) => {
        this.props.history.push('/' + eventKey);
    }

    render() {
        let pathname = this.props.location.pathname;

        let activeKey = null;
        if (pathname.includes('/musics')) {
            activeKey = 'musics';
        } else if (pathname.includes('/movies')) {
            activeKey = 'movies';
        } else if (pathname.includes('/books')) {
            activeKey = 'books';
        }

        return (
            <Nav variant="tabs"
                activeKey={activeKey}
                className={classes.header}
                onSelect={this.handleOnSelect}>
                <Nav.Item>
                    <Nav.Link eventKey="books">
                        Books
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="musics">
                        Musics
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="movies">
                        Movies
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}

export default withRouter(header);
