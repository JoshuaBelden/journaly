import React from 'react'
import {
  useCreatePostCommentMutation,
  PostCommentFragmentFragment as PostCommentType,
  UserWithLanguagesFragmentFragment as UserType,
} from '@generated'
import Button, { ButtonVariant } from '@elements/Button'
import PostComment from './PostComment'
import theme from '@theme'

type PostCommentsProps = {
  postId: number
  comments: PostCommentType[]
  currentUser: UserType | null
  onNewComment: () => void
  onUpdateComment: () => void
  onDeleteComment: () => void
}

const PostComments: React.FC<PostCommentsProps> = ({
  postId,
  comments,
  onNewComment,
  onUpdateComment,
  onDeleteComment,
  currentUser,
}) => {
  const [postCommentBody, setPostCommentBody] = React.useState<string>('')
  const [createPostComment, { loading }] = useCreatePostCommentMutation({
    onCompleted: () => {
      onNewComment()
      setPostCommentBody('')
    },
  })

  const createNewPostComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    createPostComment({
      variables: {
        postId,
        body: postCommentBody,
      },
    })
  }

  return (
    <div className="container">
      <h1>Comments</h1>
      <div className="post-comments">
        {!comments.length && <div>No comments... yet!</div>}
        {comments.map((comment, idx) => {
          const canEdit = currentUser?.id === comment.author.id
          return (
            <PostComment
              comment={comment}
              canEdit={canEdit}
              onUpdateComment={onUpdateComment}
              onDeleteComment={onDeleteComment}
              key={idx}
            />
          )
        })}
      </div>
      {currentUser && (
        <form onSubmit={createNewPostComment}>
          <div className="new-comment-block">
            <textarea
              placeholder="Add a comment..."
              value={postCommentBody}
              onChange={(e) => setPostCommentBody(e.target.value)}
              disabled={loading}
              rows={4}
            />
            <Button
              type="submit"
              loading={loading}
              className="submit-btn"
              variant={ButtonVariant.PrimaryDark}
            >
              Submit
            </Button>
          </div>
        </form>
      )}
      <style jsx>{`
        .container {
          background-color: ${theme.colors.white};
          box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
          width: 100%;
          height: 100%;
          padding: 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          max-height: 100%;
        }

        @media (min-width: ${theme.breakpoints.XS}) {
          .container {
            width: 58%;
          }
        }

        h1 {
          ${theme.typography.headingLG};
          margin-bottom: 20px;
        }

        .post-comments {
          margin-bottom: 5px;
        }

        .comments {
          padding: 5px 0;
        }

        .empty-notice {
          text-align: center;
          padding: 20px;
          font-style: italic;
        }

        .new-comment-block {
          border-top: 1px solid ${theme.colors.gray400};
          margin-top: 5px;
        }

        .new-comment-block textarea {
          min-height: 4em;
          width: 100%;
          padding: 5px;
          background-color: transparent;
          margin-top: 10px;
          margin-right: 10px;
          resize: vertical;
        }

        .new-comment-block textarea:focus {
          outline: none;
        }
      `}</style>
    </div>
  )
}

export default PostComments
