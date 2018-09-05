import React from 'react';

import './Pagination.css';

class Pagination extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            activePage: 0,
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick (event) {
        let pageNo = Number(event.currentTarget.dataset.id);
        this.setState({
            activePage: pageNo,
        })
        this.props.changePage(pageNo);
    }
    render() {
        let limit = 5;
        let totalPages = this.props.length / limit;
        let style = { backgroundColor: '#00cccc', };
        let pages = [];
        for (let i=0; i<totalPages; i++) {
            let element = <li
                key={i}
                style={this.state.activePage === i ? style : null}
                data-id={i}
                onClick={this.onClick} >
                {i+1} 
            </li>;
            pages.push(element);
        }
        return (
            <div className='pagination'>
                <ul>
                    {pages}
                </ul>
            </div>
        );
    }
}

export default Pagination;
