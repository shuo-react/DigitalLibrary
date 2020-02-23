import React from 'react';

import axios from 'axios';

import classes from './book.module.css';

class Book extends React.Component {
    state = {
        author: null,
        name: null,
        publishedYear: null,
        description: null,
        hasNoData: true
    }

    componentDidMount() {
        const bookId = this.props.match.params.bookId;

        axios.get('https://digitallibrary-f9733.firebaseio.com/book/' + bookId + '.json')
            .then(res => {
                if (res.data) {
                    this.setState({
                        author: res.data.author,
                        name: res.data.name,
                        publishedYear: res.data.publishedYear,
                        description: res.data.description,
                        hasNoData: false
                    })
                } else {
                    this.setState({
                        hasNoData: true
                    })
                }

            })
            .catch(err => {
                this.setState({
                    hasNoData: true
                })
            })
    }

    render() {
        let book = this.state;
        let panel = null;
        if (this.state.hasNoData) {
            panel = (
                <div className={classes.wrapper}>
                    <p>there is no such book yet</p>
                </div>)
        } else {
            panel = (<div className={classes.wrapper}>
                <h1 className={classes.header}>{book.name}</h1>
                <h4>{book.author}</h4>
                <span>{book.publishedYear}</span>
                <div className={classes.description}>
                    <p>{book.description}</p>
                </div>
            </div>);
        }
        return (
            <React.Fragment>
                {panel}
            </React.Fragment>
        )
    }
}

export default Book;