import UserFavoriteFoods from "./UserFavoriteFoods";
import { UserUserName } from "./UserUserName";
import PropTypes from 'prop-types';

export default function UserProfile(props) {
    // Chamando a função callMe que foi passada como prop
    props.callMe();

    return (
        <>
            <div id="user-profile">
                <UserUserName username={props.username} />
                <b>Age</b>
                <span>{props.age}</span>
                <UserFavoriteFoods foods={props.favoriteFoods} /> {/* Passando os alimentos favoritos */}
                <div>Logged in: {String(props.isLoginIn)}</div>
            </div>
        </>
    );
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age:PropTypes.string.isRequired,
    favoriteFoods:PropTypes.arrayOf(
        PropTypes.shape({
            name:PropTypes.string.isRequired,
            id:PropTypes.string.isRequired,
        })
    ).isRequired,
    isLoginIn:PropTypes.bool,//A ausência do isRequired não torna isso obrigatório
    callMe:PropTypes.func//A ausência do isRequired não torna isso obrigatório
}