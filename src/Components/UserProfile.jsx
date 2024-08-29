import UserFavoriteFoods from "./UserFavoriteFoods";

export function UserProfile(){
    return(<>
           
                <div id="user-profile">
                    <p>Username: Bob Charlton</p>
                    <div>
                        <span>Email:</span>
                        <span>Bobby@gmail.com</span>
                    </div>
                    <UserFavoriteFoods/>
                </div>
        
           </>)
}