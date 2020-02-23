import React from 'react';

import BookCard from './components/bookCard';

import axios from 'axios';

import classes from './books.module.css';

// stateful class vs stateless function
// react class -> life cycle

class Books extends React.Component {
    state = {
        books: []
    }

    componentDidMount(){
        axios.get('https://digitallibrary-f9733.firebaseio.com/books.json')
        .then(res => {
            this.setState({
                books: res.data
            })
        })
        .catch(err => {
            console.log("err", err);
        })
    }

    handleOnClick = (bookId)=> {
        this.props.history.push('/books/'+ bookId);
    }

    render() {
        return (
            <div className={classes.wrapper}>
                {this.state.books.map(book => 
                    <BookCard 
                        key={book.id}
                        name={book.name}
                        author={book.author}
                        handleOnClick={() => this.handleOnClick(book.id)}
                        />
                )}
            </div>
        );
    }
}

export default Books;