
import React, { Component } from 'react'
import Newsitem from './Newsitem'


export class News extends Component {

    constructor() {
        super();

        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=61e73f1910264bf8974228d10699c0cd&page=1&pageSize=15";
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })

    }

    handlePreviousClick = async () => {
        console.log("back");

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=61e73f1910264bf8974228d10699c0cd&page=${this.state.page - 1}&pageSize=15`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }

    handleNextClick = async () => {
        console.log("next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/ 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=61e73f1910264bf8974228d10699c0cd&page=${this.state.page + 1}&pageSize=15`;
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }

    }


    render() {
        return (
            <>
                <div className="container my-4">
                    <h2>NewsAllOver Top Headlines</h2>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title ? element.title.slice(0, 60) : " "} description={element.description ? element.description.slice(0, 100) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                    <div className="container">
                        <div className="container d-flex justify-content-between">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.handlePreviousClick}> &larr; Previous</button>
                            <button type="button" className="btn btn-info" onClick={this.handleNextClick} >Next &rarr;</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default News