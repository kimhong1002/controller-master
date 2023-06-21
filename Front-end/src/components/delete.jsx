import react, { useState } from 'react';
import axios from 'axios';

const Delete = (probs) => {

    const setGameClass = (isplay) => {
        if (isplay) return "border border-success"
        else return "border border-danger"
    }

    const handleOnClick = (id) => {
        console.log(id);
        axios.delete("http://localhost:5000/api/gamestore/games/" + id)
            .then(res => { console.log("http://localhost:5000/api/gamestore/games/" + { id }); probs.reload() })
            .catch(error => console.log(error));
    }

    return (
        <div className="d-flex justify-content-center flex-wrap">
            {probs.list.map(data =>
                <button onClick={() => handleOnClick(data._id)} className={`m-3 card ${setGameClass(data.isplay)}`} key={data._id} style={{ width: '18rem', height: '20rem' }}>
                    <img src={data.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p>{data.title}</p>
                        <p>{data.genre}</p>
                        <p>{data.developper}</p>
                    </div>
                </button>)}
        </div>
    )
}

export default Delete