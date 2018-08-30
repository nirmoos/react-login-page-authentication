import React from 'react';
import { withRouter } from 'react-router-dom';

let globalHistory = null;

class Spy extends React.Component {
    componentWillMount() {
        const { history } = this.props;
        globalHistory = history;
    }
    
    componentWillReceiveProps(nextProps) {
        globalHistory = nextProps.history;
    }

    render() {
        return null;
    }
}

export const GlobalHistory = withRouter(Spy);

export default function getHistory() {
    return globalHistory;
}
