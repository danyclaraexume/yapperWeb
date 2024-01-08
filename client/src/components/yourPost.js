import React from 'react';

const YourPost = () => {
    return(
        <form>
        <div>
          <label htmlFor="postContent">Post Content:</label>
          <textarea
            id="postContent"
            name="postContent"
            // value={postContent}
            // onChange={handlePostContentChange}
            rows="4"
            cols="50"
            placeholder="Write your post here..."
            required
          />
        </div>
  
        <div>
          <button type="submit">Publish</button>
        </div>
      </form>  
    );
}

export default YourPost;