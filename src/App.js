import './styles/App.css'
import React, {Component} from 'react'
import Feed from './components/Feed'

class App extends Component {
  state={
    feeds:[],
    page:1,
    feedPerPage:20,
  }

  componentDidMount(){
    const content = new Array(10000).fill('This color is')
    this.setState({feeds: content})
    this.checkScroll()
  }

  checkScroll = () =>{
    document.addEventListener('scroll',()=>{
      if ((window.innerHeight*1.5 + window.scrollY) >= document.body.offsetHeight) {
        console.log(window.innerHeight, window.scrollY, document.body.offsetHeight)
        this.setState({page: this.state.page+1})
      }
    })
  }

  displayFeeds = () =>{
    const {page, feedPerPage} = this.state
    return this.state.feeds.slice(0,page * feedPerPage).map((feed,index)=>{
      return <Feed key={index} feed={feed} index={index}/>
    })
  }

  render(){
    console.log('page '+this.state.page+' added')
    return (
      <div className="App">
        {this.displayFeeds()}
      </div>
    );
  }
}

export default App;
