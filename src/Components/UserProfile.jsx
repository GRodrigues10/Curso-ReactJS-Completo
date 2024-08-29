import UserFavoriteFoods from "./UserFavoriteFoods";
import { UserUserName } from "./UserUserName";
import PropTypes from 'prop-types';

export default function UserProfile(props) {
    // Chamando a função callMe que foi passada como prop
    props.callMe();

    return (
        <>
            <div id="user-profile">
                <UserUserName username='Bobby Charlton' />
                <b>Age</b>
                <span>{props.age}</span>
                <UserFavoriteFoods foods={props.favoriteFoods} /> {/* Passando os alimentos favoritos */}
                <div>Logged in: {String(props.isLoginIn)}</div>
            </div>
        </>
    );
}