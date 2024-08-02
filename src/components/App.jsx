import React, { useState } from "react";

function App() {
  const [fname, setName] = useState("");
  const [sname, setSName] = useState("");

  function handleClick(event) {
    setName(event.target.value);
  }

  function handleClick1(event) {
    setSName(event.target.value);
  }
  return (
    <div className="container">
      <h1>
        Hello {fname} {sname}{" "}
      </h1>
      <form>
        <input
          onChange={handleClick}
          name="fName"
          placeholder="First Name"
          value={fname}
        />
        <input
          onChange={handleClick1}
          name="lName"
          placeholder="Last Name"
          value={sname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
