import React, { Component } from 'react';
import axios from 'axios';

function RenderPodcast({ podcast_list }) {
  let bl = podcast_list.map((individualBlogs) => {
    console.log(JSON.stringify(individualBlogs));
    return (
      <div className='blog'>
        <h1 className='blog-heading'>{individualBlogs.title}</h1>
        {/* <h1>{individualBlogs.id}</h1> */}
        <img
          className='blog-img'
          src={individualBlogs.image}
          alt='Trial_Image'
        />
        <p>{individualBlogs.description}</p>
      </div>
    );
  });

  return bl;
}

export default class Podcast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      podcast_list: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/podcasts')
      .then((response) => {
        this.setState({
          podcast_list: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        alert('Something went wrong!');
      });
  }
  render() {
    let renderBlogs;
    if (this.state.podcast_list.length !== 0) {
      // eslint-disable-next-line array-callback-return

      renderBlogs = <RenderPodcast blog_list={this.state.podcast_list} />;
    }
    return <div>{renderBlogs}</div>;
  }
}
