import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { User as UserType, useFeedQuery } from '@generated'
import Select from '@elements/Select'
import Pagination from '@components/Pagination'
import PostCard from '@components/Dashboard/PostCard'
import LoadingWrapper from '@components/LoadingWrapper'
import theme from '@theme'

const NUM_POSTS_PER_PAGE = 9

type Props = {
  currentUser: UserType
}

const MyFeed: React.FC<Props> = () => {
  const [topic, setTopic] = useState('')
  const [language, setLanguage] = useState('')
  // Pull query params off the router instance
  const { query } = useRouter()
  const currentPage = query.page ? Math.max(1, parseInt(query.page as string, 10)) : 1

  // fetch posts for the feed!
  const { loading, error, data } = useFeedQuery({
    variables: {
      first: NUM_POSTS_PER_PAGE,
      skip: (currentPage - 1) * NUM_POSTS_PER_PAGE,
    },
  })

  const posts = data?.feed?.posts
  const count = data?.feed?.count || 0
  const showPagination = count > NUM_POSTS_PER_PAGE
  const pageTitle = 'My Feed'

  const topicOptions = [
    { value: 'rock_climbing', displayName: 'Rock climbing' },
    { value: 'cooking', displayName: 'Cooking' },
    { value: 'drawing', displayName: 'Drawing' },
    { value: 'history', displayName: 'History' },
  ]

  const handleTopicChange = (value: string): void => {
    setTopic(value)
  }

  const handleLanguageChange = (value: string): void => {
    setLanguage(value)
  }

  return (
    <div className="my-feed-wrapper">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h1>My Feed</h1>
      <div className="my-feed-search">
        <input type="text" placeholder="Search..." className="search-box" />

        <div className="my-feed-select">
          <Select
            options={topicOptions}
            value={topic}
            placeholder="Topic"
            name="topic"
            onChange={handleTopicChange}
          />

          <Select
            options={[]}
            value={language}
            placeholder="Language"
            name="langauge"
            onChange={handleLanguageChange}
          />
        </div>
      </div>
      <LoadingWrapper loading={loading} error={error}>
        <div className="my-feed-container">
          {posts && posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} stacked avatar />)
          ) : (
            <p>Nothing to see yet...</p>
          )}
        </div>

        {showPagination && (
          <Pagination
            currentPage={currentPage}
            total={count}
            numPerPage={NUM_POSTS_PER_PAGE}
            title={pageTitle}
          />
        )}
      </LoadingWrapper>

      <style jsx>{`
        .my-feed-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        h1 {
          margin: 50px auto;
          text-align: center;
          ${theme.typography.headingXL};
        }

        .my-feed-search {
          width: 100%;
          max-width: 700px;
        }

        .my-feed-search input {
          border-radius: 5px;
          height: 50px;
          box-shadow: 0px 8px 10px #00000029;
          font-size: 16px;
          background: white;
          padding: 10px;
          width: 100%;
        }

        .search-box {
          margin-bottom: 20px;
          width: 100%;
        }

        .my-feed-select {
          display: grid;
          grid-gap: 20px;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .my-feed-container {
          display: grid;
          grid-gap: 20px;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          justify-items: center;
          width: 100%;
          margin-top: 50px;
        }
        @media (min-width: 1600px) {
          .my-feed-container {
            grid-template-columns: repeat(3, 400px);
            grid-gap: 40px;
            justify-content: center;
          }
        }

        .my-feed-container :global(.post-card-container) {
          max-width: 400px;
        }

        :global(.pagination-wrapper) {
          margin: 40px 0;
        }
      `}</style>
    </div>
  )
}

export default MyFeed
