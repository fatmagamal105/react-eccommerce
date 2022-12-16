import React from "react";
import "./Limit.css"
export default function Limit(props) {
    const {limitHandler} = props;
  return (
    
    <div className="container">
      {/* <div className="btn-group" role="group" aria-label="Basic example">
        <button onClick={() => limitHandler(10)} type="button" className="btn btn-primary">
          Limit 10
        </button>
        <button onClick={() => limitHandler(30)} type="button" className="btn btn-primary">
          Limit 30
        </button>
        <button onClick={() => limitHandler(50)} type="button" className="btn btn-primary">
          Limit 50
        </button>

        <button onClick={() => limitHandler(100)} type="button" className="btn btn-primary">
          Limit 100
        </button>
      </div> */}
      <select class="form-select" aria-label="Default select example">
        <option >
          <button onClick={() => limitHandler(10)} type="button" className="btn btn-primary">
            Limit 10
          </button>
        </option>
        <option >
          <button onClick={() => limitHandler(30)} type="button" className="btn btn-primary">
            Limit 30
          </button>
        </option>
        <option >
          <button onClick={() => limitHandler(50)} type="button" className="btn btn-primary">
            Limit 50
          </button>
        </option>
        <option >
          <button onClick={() => limitHandler(100)} type="button" className="btn btn-primary">
            Limit 100
          </button>
        </option>
        
      </select>
    </div>
  );
}
