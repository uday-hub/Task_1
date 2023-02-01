import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [name, setName] = useState({
    fname: "",
    lname: "",
  });

  const [data, setData] = useState([]);

  function changeHandle(e) {
    setName({ ...name, [e.target.name]: e.target.value });
  }

  let { fname, lname } = name;
  function saveData() {
    if (fname !== "" && lname !== "") {
      setData([...data, { fname, lname }]);
      setName({ fname: "", lname: "" });
    } else alert("You need to fill all input data first..");
  }

  return (
    <div className="Home ">
      <div className="container my-5">
        <div className="w-50 p-4 m-auto form border shadow ">
          <div class="mb-3">
            <label htmlFor="fname" class="form-label">
              First Name
            </label>
            <input
              type="text"
              name="fname"
              className="form-control"
              value={name.fname}
              onChange={changeHandle}
              autoComplete="off"
              placeholder="Enter text here"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="lname" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              className="form-control"
              value={name.lname}
              onChange={changeHandle}
              autoComplete="off"
              placeholder="Enter text here"
            />
          </div>

          <button type="submit" class="btn btn-primary" onClick={saveData}>
            Submit
          </button>
          <Link exact to="/">
            <button type="submit" class="m-3 btn btn-secondary">
              Back
            </button>
          </Link>
        </div>

        {/* --------------------------- */}

        <table className="table text-center w-50 m-auto my-3">
          <thead className="table-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>

          {data.map((val) => {
            return (
              <tbody class="">
                <tr>
                  <td>{val.fname}</td>
                  <td>{val.lname}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Home;
