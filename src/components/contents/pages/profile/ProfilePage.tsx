import React from "react";
import style from "./Profile.module.css"
export const Profile = () => {
    return (
        <div className={style.profileBlock}>
            <div>
                main content with picture (background-picture)
                and avatar
                (timeline, about, friends, photos)
            </div>
            <div>
                <div>create new post</div>
                <div>post/stories</div>
            </div>
            <div>groups</div>
            <div>friends</div>
            <div>recent chats</div>
        </div>
    )
}