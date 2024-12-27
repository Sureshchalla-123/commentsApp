import './index.css'

const CommentItem = ({details, color, deleteComment}) => {
  const {id, userName, comment} = details

  const deleteItem = () => {
    deleteComment(id)
  }
  return (
    <div className="comment-section">
      <div className="comment">
        <div className={`avatar ${color}`}>{userName[0]}</div>
        <div className="profile">
          <div className="details">
            <span className="name">{userName}</span>
            <span className="time">less than a minute ago</span>
          </div>
          <div className="text">{comment}</div>
        </div>
      </div>
      <div className="actions">
        <button className="like-button" testId="delete">
          <span className="icon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
            />{' '}
          </span>{' '}
          Like
        </button>
        <button className="delete-btn" onClick={deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete-image"
            className="delete-icon"
          />
        </button>
      </div>
    </div>
  )
}

export default CommentItem
