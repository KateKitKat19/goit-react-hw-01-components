import PropTypes from 'prop-types';
import { Item, OnlineMarker } from './FriendsItem.styled';
export const FriendsItem = ({ name, avatar, isOnline }) => {
  return (
    <Item>
      <OnlineMarker isOnline={isOnline}></OnlineMarker>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
};

FriendsItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
