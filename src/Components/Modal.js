import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="modal" id="timesupModal" style="display: none">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header myModalHeader">
                    <h5 class="modal-title">Times up!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
                </div>
                <div class="modal-body myModalBody">
                    <p>If you are not covered all questions, then those will be saved as "Not answered".</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary myModalButton" data-dismiss="modal">Close</button>
                </div>
                </div>
                </div>
            </div> 
        );
    }
}
