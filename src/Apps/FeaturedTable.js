import React from 'react';

import { connect } from 'react-redux';

import UserTable from '../Components/UserTable';
import Pagination from '../Components/Pagination';

import './FeaturedTable.css';

const changePage = (value) => console.log(value);

class FeaturedTable extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            currentPage: 0,
        }
        this.changePage = this.changePage.bind(this);
    }
    changePage (pageNo) {
        this.setState({
            currentPage: pageNo,
        });
    }
    componentWillMount () {
        this.scrollable = false;
    }
    render () {
        let limit = 5;
        let start = this.state.currentPage * limit;
        let end = (start + limit) <= this.props.length ? (start + limit) : this.props.length;
        let users = this.props.users.slice(start, end);
        return (
            <div className={'table-container' + (this.scrollable ? ' scrollable' : '')} >
                <UserTable users={this.scrollable ? this.props.users : users} />
                {!this.scrollable && <Pagination changePage={this.changePage} length={this.props.length} />}
            </div>
        );
    }
}

export default connect (
    state => ({
        length: state.users.length,
        users: state.users,
    }),
) (FeaturedTable);
