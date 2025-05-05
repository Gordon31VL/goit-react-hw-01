import FriendCss from "./Friend.module.css";

export default function Friends({ friends }) {
  return (
    <ul className={FriendCss.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={FriendCss.friendItem}>
          <img src={friend.avatar} alt="Avatar" width="48" />
          <p>{friend.name}</p>
          <p className={friend.isOnline ? FriendCss.Online : FriendCss.Offline}>
            {friend.isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
}