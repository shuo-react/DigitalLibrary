import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Books from './books/books';
import Book from './book/book';
import NewBook from './newbook/newbook';

const bookPageContainer = () => {
    return (
        <div>
            <Switch>
                <Route path="/books" exact component={Books} />
                <Route path="/books/create" component={NewBook} />
                <Route path="/books/:bookId" component={Book} />
            </Switch>
        </div>
    );
}

export default bookPageContainer;
