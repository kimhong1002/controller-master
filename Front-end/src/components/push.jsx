import react, { useState } from 'react';
import axios from 'axios';

const Push = (probs) => {
    const [checked, setChecked] = useState(true);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/gamestore/games/`, {
            title: e.target[0].value,
            genre: e.target[1].value,
            developper: e.target[2].value,
            img: e.target[3].value,
            isplay: e.target[4].checked,
        })
            .then(res => {
                console.log(res.data);
                window.location.pathname = '/get';
            })
            .catch(error => {
                console.log(error.response);
            })
        console.log(e);
        probs.reload();
    }
    return (
        <div className="col-4 mx-auto d-block">
            <form onSubmit={handleOnSubmit}>
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
    )
}

export default Push;