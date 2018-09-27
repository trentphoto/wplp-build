import React from 'react'
import { connect } from 'react-redux'
// import dateToString from '../../../functions/dateToString'

const BlogSingle = (props) => {
  const { match, posts } = props

  const cp = posts.filter(i => i.slug === match.params.slug)[0]

  return (
    <section className="py-5 singlePost">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>{cp.title.rendered}</h1>
            <p>{cp.acf.excerpt}</p>
            {
              cp._embedded['wp:featuredmedia'] && (
                <div className="singlePost__image">
                  <img className="img-fluid" alt={cp.title.rendered} src={`http://theordainedbarista.com${cp._embedded['wp:featuredmedia'][0].source_url}`} />
                </div>
              )
            }
          </div>
        </div>
        <div className="row content">
          <div className="col-md-8 mx-auto">
            <div dangerouslySetInnerHTML={{__html: cp.content.rendered}} />
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  posts: state.page.posts
})

export default connect(mapStateToProps)(BlogSingle)
