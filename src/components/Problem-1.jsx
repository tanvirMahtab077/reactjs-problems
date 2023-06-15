import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [list, setList] = useState([]);
  const [filteredObj, setFilteredObj] = useState([]);
  const handleClick = (val) => {
    setShow(val);
    const filterItems = list.filter((filtered) => filtered.status == val);
    setFilteredObj(filterItems);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formObj = Object.fromEntries(data);
    console.log(formObj);
    let formArray = [...list, formObj];
    let sortedArray = formArray.sort((a, b) =>
      a.status.toLowerCase() > b.status.toLowerCase() ? 1 : -1
    );
    setList(sortedArray);
  };

  const deleteItems = (index) => {
    list.splice(index, 1);
    filteredObj.splice(index, 1);
    setList([...list]);
    setFilteredObj([...filteredObj]);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={submitHandler}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div className="col-auto">
              <select name="status" className="form-select" aria-label="Default select example" required>
                <option value={''}>select</option>
                <option value="active">active</option>
                <option value="completed">completed</option>
                <option value="pending">pending</option>
              </select>
              {/* <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
                required
              /> */}
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary centered">
                Submit
              </button>
            </div>
          </form>
          <div className="text-center">
            {" "}
            <b>Total: {show === "all" ? list.length : filteredObj.length}</b>
          </div>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "pending" && "active"}`}
                type="button"
                onClick={() => handleClick("pending")}
              >
                Pending
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {show == "all"
                ? list.map((listItems, index) => {
                    return (
                      <tr>
                        <td>{listItems.name}</td>
                        <td>{listItems.status}</td>
                        <td>
                          <button onClick={() => deleteItems(index)}>
                            Delete
                          </button>{" "}
                          <button>Edit</button>
                        </td>
                      </tr>
                    );
                  })
                : filteredObj.map((listItems, index) => {
                    return (
                      <tr>
                        <td>{listItems.name}</td>
                        <td>{listItems.status}</td>
                        <td>
                          <button onClick={() => deleteItems(index)}>
                            Delete
                          </button>{" "}
                          <button>Edit</button>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
