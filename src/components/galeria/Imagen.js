import React,{Component} from 'react';
export default class PagInicio extends Component{
    render(){
        return (
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={process.env.PUBLIC_URL + '/logo192.png'} alt="Card image cap" />

                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">like</a>
                    <a href="#" className="card-link">dislike</a>
                    <a href="#" className="card-link">reportar</a>
                </div>
            </div>
        );
    }
}