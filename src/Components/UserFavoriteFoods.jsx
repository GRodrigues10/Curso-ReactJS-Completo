import PropTypes from 'prop-types';

export default function UserFavoriteFoods(props) {
    return (
        <section>
            <span>Favorite Food</span>
            <ul>
                {props.foods.map((food, index) => (
                    <li key={index}>{food.name}</li>
                ))}
            </ul>
        </section>
    );
}
