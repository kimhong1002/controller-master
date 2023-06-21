import react, {useState} from 'react';
import axios from 'axios';

const Get = (probs) => {
    const setGameClass = (isplay) => {
        if (isplay) return "border border-success"
        else return "border border-danger"
    }

    return (
        <div className="d-flex justify-content-center flex-wrap">
            {probs.list.map(data =>
                <button style={{boxShadow: "5px 0px 5px -1px rgba(0,0,0,0.49)", width: '18rem', height: '20rem'}}
                        className={`m-3 card ${setGameClass(data.isplay)}`} key={data._id}>
                    <img src={data.img} className="card-img-top" alt="..." style={{width: "274px", height: "175px", objectFit: "contain"}}/>
                    <div className="card-body" style={{display: "flex", flexDirection: "column", textAlign: "left"}}>
                        <p>{data.title}</p>
                        <p>{data.genre}</p>
                        <p>{data.developper}</p>
                    </div>
                </button>)}
        </div>
    )
}

export default Get