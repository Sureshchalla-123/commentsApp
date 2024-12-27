import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    userName: '',
    comment: '',
  }

  onChangeUsername = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangeComment = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {userName, comment} = this.state

    const randomColorIndex = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const randomColor = initialContainerBackgroundClassNames[randomColorIndex]

    const newComment = {
      id: uuidv4(),
      userName,
      comment,
      color: randomColor,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      userName: '',
      comment: '',
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id !== id)
    this.setState({
      commentsList: [...filteredList],
    })
  }

  render() {
    const {commentsList} = this.state
    const {userName, comment} = this.state
    return (
      <>
        <div className="comments-page-background-container">
          <div className="input-section">
            <form className="comments-form" onSubmit={this.onSubmitForm}>
              <h1 className="form-heading">Comments</h1>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="name-input-element"
                placeholder="your name"
                value={userName}
                onChange={this.onChangeUsername}
              />
              <textarea
                name="comments"
                rows="4"
                cols="50"
                placeholder="Enter your comments"
                className="comment-input-element"
                value={comment}
                onChange={this.onChangeComment}
              />
              <button type="submit" className="form-submit-button">
                Add Comment
              </button>
            </form>
          </div>
          <div className="banner-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="banner-image"
              alt="comments"
            />
          </div>
        </div>
        <div className="hr-row-container">
          <hr />
        </div>
        <div className="comments-count-section">
          <p>
            <span className="comments-count-element">
              {commentsList.length}
            </span>
            comments
          </p>
        </div>
        <ul className="comments-container">
          {commentsList.map(each => (
            <li key={each.id} className="list-item">
              <CommentItem
                details={each}
                color={
                  initialContainerBackgroundClassNames[commentsList.length]
                }
                deleteComment={this.deleteComment}
              />
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default Comments
