import { useState } from "react";

// data -> [ Component ] -> html to render
// props ->
// state ->

function App() {
  const [formState, setFormState] = useState("new-form");

  function handleResetForm() {
    setFormState("new-form");
  }

  function handleFormSubmit(event) {
    // event.target = form
    // form.name

    console.log(event.target.name.value);
    setFormState("submitted");
  }

  if (formState === "submitted") {
    return (
      <div>
        Submitted
        <button onClick={handleResetForm}>reset</button>
      </div>
    );
  }

  return (
    <div>
      <form className="personal" onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="Name"
        ></input>
        <input
          type="text"
          id="email"
          placeholder="Email"
          className="Email"
        ></input>
        <input
          type="text"
          placeholder="Phone number"
          className="Phone-number"
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default App;

// {/* <form className="education">
//   <input type="text" placeholder="school name"></input>
//   <input type="text" placeholder="title of study"></input>
//   <input type="text" placeholder="date of study"></input>
//   <input type="submit"></input>
// </form>
// <form className="history">
//   <input type="text" placeholder="Company name"></input>
//   <input type="text" placeholder="position"></input>
//   <input type="text" placeholder="main tasks"></input>
//   <input type="text" placeholder="work dates"></input>
//   <input type="submit"></input>
// </form> */}
