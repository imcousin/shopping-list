import React from "react";

// Using file name for function; pass props inside params
export default ({ handleChange, handleSubmit, item }) => {
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <input
            className="col-12 form-control"
            name="name"
            onChange={handleChange}
            type="text"
            value={item.name}
            placeholder="Item"
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Add to Shopping list
        </button>
      </form>
    </div>
  );
};