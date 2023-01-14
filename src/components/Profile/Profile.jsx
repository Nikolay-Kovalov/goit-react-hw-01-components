import { FaAt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Description, Image, Item, Label, Location, Name, Quantity, Stats, Tag, Wrapper } from "./Profile.styled";
export const Profile = ({ username, tag, location, avatar, stats }) => (
    <Wrapper>
  <Description>
    <Image
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
            <Name>{username}</Name>
            <Tag><FaAt/>{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <Item>
      <Label>Followers</Label>
                <Quantity>{stats.followers}</Quantity>
    </Item>
    <Item>
      <Label>Views</Label>
                <Quantity>{stats.views}</Quantity>
    </Item>
    <Item>
      <Label>Likes</Label>
                <Quantity>{stats.likes}</Quantity>
    </Item>
  </Stats>
  </Wrapper>);


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    fololowers: PropTypes.number,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}