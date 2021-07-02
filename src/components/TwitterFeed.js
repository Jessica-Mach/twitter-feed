import React from 'react';
import Tweet from './Tweet.js'

const TwitterFeed = (props) => {
  const handleReply = () => {
    alert("reply");
  }
  const handleRetweet = () => {
    alert("retweet")
  }
  const handleLike = () => {
    alert("like");
  }
  const handleMore = () => {
    alert("more");
  }
  const tweets = props.data.map(tweet => {
    return <Tweet 
      key={tweet.id_str}
      tweetData={tweet}
      handleReply={handleReply}
      handleRetweet={handleRetweet}
      handleLike={handleLike}
      handleMore={handleMore}
      />
  })
  
  return(
    <div className="feed-container">
      {tweets}
    </div>
  )
};

export default TwitterFeed;
