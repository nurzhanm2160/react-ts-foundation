import React, {FC} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";
import {useNavigate} from "react-router-dom";

interface UserListProps {
    users: IUser[]
}

const UserLIst:FC<UserListProps> = ({users}) => {
    const history = useNavigate()
    return (
        <div>
            {users.map(user =>
                <UserItem onClick={(user) => history('/users/' + user.id)} key={user.id} user={user} />
            )}
        </div>
    );
};

export default UserLIst;