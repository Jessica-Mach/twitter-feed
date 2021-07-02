import React from "react"

const Tweet = props => {
    let mediaUrl
    props.tweetData.entities.media ? mediaUrl = props.tweetData.entities.media[0].media_url : mediaUrl = "";
    let urlToHide
    props.tweetData.entities.media ? urlToHide = props.tweetData.entities.media[0].display_url : urlToHide = null;
    const originalText = props.tweetData.text;
    const indexOfUrl = originalText.indexOf(urlToHide);
    let tweetText = originalText.slice(0, indexOfUrl);
    let retweetStyle
    props.tweetData.retweeted ? retweetStyle = "retweeted icon" : retweetStyle = "understated icon";
    let likeStyle
    props.tweetData.liked ? likeStyle = "like icon" : likeStyle = "understated icon"
    const timeStamp = parseInt(props.tweetData.timestamp_ms);
    const fullDateOfPost = new Date(timeStamp);
    const dateOfPost = fullDateOfPost.toLocaleDateString("default",{month: "short", day: "numeric"});
    return (
        <div className="tweet-container">
            <div className="user-image-container">
                <img 
                    src={props.tweetData.user.profile_image_url}
                    alt="image of user">
                </img>
            </div>
            <div className="tweet-data-container">
                <h6>{props.tweetData.user.name}
                    <span className="understated"> @{props.tweetData.user.screen_name} - {dateOfPost} </span>
                </h6>
                <p>{tweetText}</p>
                <img src={mediaUrl}></img>
                <div className="icons-container">
                <div className="understated icon">
                    <i className="fas fa-reply" onClick={props.handleReply}></i>
                </div>
                <div className={retweetStyle}>
                    <p><i className="fas fa-retweet" onClick={props.handleRetweet}></i> {props.tweetData.retweet_count}</p>
                </div>
                <div className={likeStyle}>
                    <p><i className="fas fa-heart" onClick={props.handleLike}></i> {props.tweetData.favorite_count}</p>
                </div>
                <div className="understated icon" onClick={props.handleMore}>
                    <p><i className="fas fa-ellipsis-h"></i></p>
                </div>
            </div>
            </div>
        </div>
    )
};
export default Tweet;
