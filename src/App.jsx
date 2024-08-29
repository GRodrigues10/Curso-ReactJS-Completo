import UserProfile from "./Components/UserProfile";

export default function App() {
    const callMe = () => {
        console.log('Hello There!');
    }

    return (
        <>
            <div><h1>Root Component</h1></div>
            <UserProfile 
                age='22 anos' 
                isLoginIn={true} 
                favoriteFoods={[{ name: 'Pizza' }, { name: 'Hambúrger' }, { name: 'Cocunut' }]} 
                callMe={callMe} // Passando a função callMe como uma prop
            />
        </>
    );
}