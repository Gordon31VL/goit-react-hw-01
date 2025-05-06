import FriendListItemCss from "./FriendListItem.module.css"
export default function FriendListItem({ isOnline, avatar, name }) {
    return (
        <>
          <img src={avatar} alt="Avatar" width="48" />
          <p>{name}</p>
          <p className={isOnline ? FriendListItemCss.Online : FriendListItemCss.Offline}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </>
    )
}