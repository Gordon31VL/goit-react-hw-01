import FriendListItem from "../FriendListItem/FriendListItem";
import FriendCss from "./FriendList.module.css";

export default function Friends({ friends }) {
  return (
    <ul className={FriendCss.friendList}>
      {friends.map(({id, avatar, isOnline, name}) => (
        <li key={id} className={FriendCss.friendItem}>
          <FriendListItem avatar={avatar} isOnline={isOnline} name={name}/>
        </li>
        ))}
    </ul>
  );
}