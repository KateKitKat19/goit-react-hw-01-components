import PropTypes from 'prop-types';
import {
  Wrapper,
  Info,
  Image,
  UserName,
  UserInfo,
  StatsList,
  ListItem,
  ItemName,
  ItemValue,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Info>
        <Image src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Info>

      <StatsList>
        <ListItem>
          <ItemName>Followers</ItemName>
          <ItemValue>{stats.followers}</ItemValue>
        </ListItem>
        <ListItem>
          <ItemName>Views</ItemName>
          <ItemValue>{stats.views}</ItemValue>
        </ListItem>
        <ListItem>
          <ItemName>Likes</ItemName>
          <ItemValue>{stats.likes}</ItemValue>
        </ListItem>
      </StatsList>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
