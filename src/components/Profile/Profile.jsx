import css from './Profile.module.css'
import clsx from "clsx";

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.profileBox}>
            <div className={css.userInfo}>
                <img className={css.userImage} src={image} alt="User avatar" />
                <p className={clsx(
                    css.text,
                    css.name
                )}>{name}</p>
                <p className={css.text}>{tag}</p>
                <p className={css.text}>{location}</p>
            </div>
            <ul className={css.statsList}>
                <li className={css.statsItem}><span>Followers</span><span className={css.statsItemNum}>{stats.followers}</span></li>
                <li className={css.statsItem}><span>Views</span><span className={css.statsItemNum}>{stats.views}</span></li>
                <li className={css.statsItem}> <span>Likes</span><span className={css.statsItemNum}>{stats.likes}</span></li>
            </ul>
        </div>
    )    
}