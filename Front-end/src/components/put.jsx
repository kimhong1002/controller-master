import react, { useState } from 'react';
import axios from 'axios';

const Put = (probs) => {
    const [formStatus, setFormStatus] = useState('invisible');
    const [checked, setChecked] = useState(true);
    const [idPut, setIDPut] = useState('');

    const setGameClass = (isplay) => {
        // if (isplay) return "border border-success"
        // else return "border border-danger"
    };

    const handlePut = (id) => {
        setFormStatus('visible');
        setIDPut(id);
        console.log("http://localhost:5000/api/gamestore/games/" + idPut);
    };

    const handleOnSubmit = (e) => {
        axios
            .put("http://localhost:5000/api/gamestore/games/" + idPut, {
                title: e.target[0].value,
                genre: e.target[1].value,
                developper: e.target[2].value,
                img: e.target[3].value,
                isplay: e.target[4].checked,
            })
            .then((response) => {
                probs.reload();
            });
    }

    return (
        <div className='container'>
            <div className='position-absolute'>
                <form className={`mx-auto d-block ${formStatus}`} onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Genre</label>
                        <input className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Developper</label>
                        <input className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
                        <input className="form-control" />
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Isplay
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary mx-auto d-block">Submit</button>
                </form>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
                {probs.list.map(data =>
                    <button onClick={() => handlePut(data._id)} className={`m-3 card ${setGameClass(data.isplay)}`} key={data._id} style={{ boxShadow: "5px 0px 5px -1px rgba(0,0,0,0.49)", width: '18rem', height: '20rem' }}>
                        <img src={data.img} className="card-img-top" alt="..." style={{width: "274px", height: "175px", objectFit: "contain"}}/>
                        <div className="card-body" style={{display: "flex", flexDirection: "column", textAlign: "left"}}>
                            <p>{data.title}</p>
                            <p>{data.genre}</p>
                            <p>{data.developper}</p>
                        </div>
                    </button>)}
            </div>
        </div>
    )
}

export default Put