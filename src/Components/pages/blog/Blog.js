import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import PageWrapper from '../../Layout/PageWrapper'
import PostCard from '../../PostCard'
import BlogSingle from './BlogSingle'
import dateToString from '../../../functions/dateToString'

class PageBlog extends React.Component {
  render(){

    const { posts, match } = this.props

    if (!posts.length) {
      return null;
    }

    const single = {
      id: posts[0].id,
      image: posts[0]._embedded['wp:featuredmedia'] && 'http://theordainedbarista.com' + posts[0]._embedded['wp:featuredmedia'][0].source_url,
      slug: `${match.url}/${posts[0].slug}`,
      title: posts[0].title.rendered,
      excerpt: posts[0].acf.excerpt,
      pre: dateToString(new Date(posts[0].date))
    }

    const BlogIndex = () => (
      <section className="section">
        <div className="container">
          <div className="row">
            <p className="text-center">categories?</p>
          </div>
          <div className="row py-5">
            <div className="col-lg-8 col-12 mx-auto">
              <PostCard
                size="feature"
                image={single.image}
                slug={single.slug}
                title={single.title}
                pre={single.pre}
                excerpt={single.excerpt}
              />
            </div>
          </div>
          <div className="row">
            <div className="blog-grid">
              {
                posts.map(i => (
                  <PostCard
                    key={i.id}
                    image={i._embedded['wp:featuredmedia'] && 'http://theordainedbarista.com' + i._embedded['wp:featuredmedia'][0].source_url}
                    slug={`${match.url}/${i.slug}`}
                    title={i.title.rendered}
                    pre={dateToString(new Date(i.date))}
                    excerpt={i.acf.excerpt}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </section>
    )

    return (
      <PageWrapper>
        <Route exact path={match.url} component={BlogIndex} />
        <Route path={`${match.url}/:slug`} component={BlogSingle} />
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.page.posts
})

export default connect( mapStateToProps )(PageBlog)
