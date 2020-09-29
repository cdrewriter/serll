import React from 'react';
import ReactDOM from 'react-dom';
import  './cards.module.scss'

//Temporarily store data here
const PostsData = [
    {
      "category": "News",
      "title": "CNN Acquire BEME",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://res.cloudinary.com/dpiuthi6q/image/upload/v1601286292/my-keystone-app/5f71b090b75a7c4680f85ff5.jpg"
    },
    {
      "category": "Travel",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://res.cloudinary.com/dpiuthi6q/image/upload/v1601286292/my-keystone-app/5f71b090b75a7c4680f85ff5.jpg"
    },
    {
      "category": "Development",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://res.cloudinary.com/dpiuthi6q/image/upload/v1601286292/my-keystone-app/5f71b090b75a7c4680f85ff5.jpg"
    },
    {
      "category": "News",
      "title": "CNN Acquire BEME",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://res.cloudinary.com/dpiuthi6q/image/upload/v1601286292/my-keystone-app/5f71b090b75a7c4680f85ff5.jpg"
    },
    {
      "category": "Travel",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://res.cloudinary.com/dpiuthi6q/image/upload/v1601286292/my-keystone-app/5f71b090b75a7c4680f85ff5.jpg"
    },
    {
      "category": "Development",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://res.cloudinary.com/dpiuthi6q/image/upload/v1601286292/my-keystone-app/5f71b090b75a7c4680f85ff5.jpg"
    }
  ]
  
  
  // Start App
  
class Main extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {
      return <div className="cardsh">
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }
  
  
  class Title extends React.Component {
    render() {
      return <section className="app-title">
      <div className="app-title-content">
          <h2>Latest News</h2>
          <p>Covering March & April 2015</p>
          <a className="designer-link" href="https://dribbble.com/shots/1978243-Latest-News" target="_blank">Design from <i className="fa fa-dribbble"></i></a>
        </div>
      </section>
    }
  }
  
  
  class Button extends React.Component {
    render() {
      return (
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button>
      )
    }
  }
  
  
  class CardHeader extends React.Component {
    render() {
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">

          <h4 className="card-header--title">{category}</h4>
        </header>
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
        <p className="date">March 20 2015</p>
          
          <h2>{this.props.title}</h2>
          
          <p className="body-content">{this.props.text}</p>
          
          <Button />
        </div>
      )
    }
  }
  
  
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
        </article>
      )
    }
  }
  
export default Main