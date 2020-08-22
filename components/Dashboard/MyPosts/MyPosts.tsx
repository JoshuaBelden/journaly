import React from 'react'
import {
  PostStatus as PostStatusType,
  Post as PostType,
  User as UserType,
  usePostsQuery,
} from '@generated'
import LoadingSpinner from '@components/Icons/LoadingSpinner'
import PostCard from '@components/Dashboard/PostCard'
import theme from '@theme'

type Props = {
  currentUser: UserType
  status: PostStatusType
}

const MyPosts: React.FC<Props> = ({ currentUser, status }) => {
  const { loading, data, error } = usePostsQuery({
    variables: {
      status,
      authorId: currentUser.id,
    },
  })

  let posts = (data?.posts as PostType[]) || []

  return (
    <div className="my-posts-container">
      {error && <p>There was an error retrieving your posts.</p>}

      {loading ? (
        <LoadingSpinner size={60} />
      ) : (
        <div className="my-posts">
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} status={status} />
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .my-posts {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 50px;
          animation: 150ms fadeIn ease-in;
        }

        @media (min-width: ${theme.breakpoints.SM}) {
          .my-posts {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: ${theme.breakpoints.MD}) {
          .my-posts {
            grid-template-columns: 1fr;
          }

          .my-posts :global(.post-card-container) {
            max-width: 768px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  )
}

export default MyPosts
