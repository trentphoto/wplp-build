import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Provider } from 'react-redux'
import store from './store'
import './sass/App.css'
import FetchData from './Components/FetchData'
// pages
import PageHome from './Components/pages/Home'
import PageAbout from './Components/pages/about/About'
import PageWPLPNetwork from './Components/pages/network/WPLPNetwork'
import PageBlog from './Components/pages/blog/Blog'
import PageContact from './Components/pages/Contact'
import PageNominate from './Components/pages/Nominate'
import PageApply from './Components/pages/Apply'

import scrollToTop from './functions/scrollToTop'

// icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCircleNotch, faSearch, faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add( fab, faCircleNotch, faSearch, faMapMarkerAlt, faPhone, faEnvelope )

const PageTransition = (props) => (
  <CSSTransition
    {...props}
    classNames="fadeTranslate"
    timeout={0}
    mountOnEnter={true}
    unmountOnExit={true}
    onExit={scrollToTop}
  />
)

const App = ({ location }) => {
    return (
      <div className="App">
      <TransitionGroup>
        <PageTransition key={window.location.key}>
          <div>
            <FetchData />
            <Switch>
              {
                // <Route path="/:slug" component={PageTemplateDefault} />
              }
              <Route exact path="/" component={PageHome} />
              <Route path="/about" component={PageAbout} />
              <Route path="/wplp-network" component={PageWPLPNetwork} />
              <Route path="/learn" component={PageBlog} />
              <Route path="/contact" component={PageContact} />
              <Route path="/nominate" component={PageNominate} />
              <Route path="/apply" component={PageApply} />
            </Switch>
          </div>
        </PageTransition>
      </TransitionGroup>
      </div>
    );
}

const Wrapper = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" render={App} />
    </BrowserRouter>
  </Provider>
)

export default Wrapper
