import React, { Component } from 'react'
import axios from 'axios'

function RenderBlogs({ blog_list }) {
    let bl = blog_list.map((individualBlogs) => {
        console.log(JSON.stringify(individualBlogs));
        return (
            <div>
                <h1>{individualBlogs.title}</h1>
                {/* <h1>{individualBlogs.id}</h1> */}
                <img src={individualBlogs.image} alt="Trial_Image" />
                <p>{individualBlogs.content}</p>
            </div>
        )
    })

    return(bl);
}

export default class Blogs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blog_list: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/blog/blog_list')
            .then((response) => {
                this.setState({
                    blog_list: response.data,
                });
            })
            .catch((err) => {
                alert("Something went wrong!");
            })
    }

    render() {
        let renderBlogs;
        if (this.state.blog_list.length !== 0) {
            // eslint-disable-next-line array-callback-return

            renderBlogs = <RenderBlogs blog_list={this.state.blog_list} />
        }
        return (
            <div>
                {renderBlogs}
            </div>
        )
    }
}
