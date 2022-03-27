
import React, { Component } from 'react'

export class Newsitem extends Component {

   

    render() {

        let { title, description, imageUrl, newsUrl } = this.props;

        return (
            <>
                <div className="container my-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={!imageUrl? "https://cleantechnica.com/files/2021/02/6-Ford-Mustang-Mach-E-Bazaar.jpeg" : imageUrl} alt="..." height="250" />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}</p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-outline-info">Read more</a>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Newsitem