import PropTypes from 'prop-types';
import { FriendsItem } from './FriendsItem';
import {List} from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(({id, name, avatar, isOnline}) => (
        <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline}></FriendsItem>
      ))}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
