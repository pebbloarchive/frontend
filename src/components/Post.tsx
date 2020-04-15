const Post = (props) => {
    return (
        <div className="feed-post">
            <div className="feed-profile">
                <a href=""><img src="hello" alt="" className="feed-avatar" />
                    <div className="feed-profile-info">
                        <h1 className="feed-profile-username"> name </h1>
                        <span className="feed-profile-timeStamp"> date </span>
                    </div></a>
            </div>
            <p className="feed-caption">
                description
            </p>
        </div>
    )
}

export default Post;