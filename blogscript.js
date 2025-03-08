// script.js
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    const postContainer = document.createElement('div');
    postContainer.classList.add('post');
    
    const postTitle = document.createElement('h3');
    postTitle.textContent = title;
    postContainer.appendChild(postTitle);
    
    const postContent = document.createElement('p');
    postContent.textContent = content;
    postContainer.appendChild(postContent);
    
    const socialSharing = document.createElement('div');
    socialSharing.classList.add('social-sharing');
    socialSharing.innerHTML = `
        <button onclick="sharePost('${title}')">Share</button>
    `;
    postContainer.appendChild(socialSharing);
    
    const commentsSection = document.createElement('div');
    commentsSection.classList.add('comments-section');
    commentsSection.innerHTML = `
        <h3>Comments</h3>
        <form onsubmit="addComment(event, '${title}')">
            <input type="text" placeholder="Your comment" required>
            <button type="submit">Add Comment</button>
        </form>
        <div class="comments"></div>
    `;
    postContainer.appendChild(commentsSection);
    
    document.getElementById('posts').appendChild(postContainer);
    
    document.getElementById('post-form').reset();
});

function sharePost(title) {
    const shareUrl = `https://your-blog-url.com/posts/${title}`;
    alert(`Share this post: ${shareUrl}`);
}

function addComment(event, postTitle) {
    event.preventDefault();
    const commentInput = event.target.querySelector('input');
    const commentText = commentInput.value;
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment');
    commentContainer.textContent = commentText;
    
    const commentsDiv = event.target.parentElement.querySelector('.comments');
    commentsDiv.appendChild(commentContainer);
    
    commentInput.value = '';
}
