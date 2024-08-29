import PropTypes from 'prop-types';

export function UserUserName(props){
    return(
        <div>
            <p>
                <b>Username: {props.username}</b>
                <span></span>
            </p>
        </div>
    );
}