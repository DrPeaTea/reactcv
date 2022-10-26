import { useState } from "react";

// data -> [ Component ] -> html to render
// props ->
// state ->

function App() {
  const [formState, setFormState] = useState("new-form");

  function handleResetForm() {
    setFormState("new-form");
  }
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [school, setSchool] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [company, setCompany] = useState();
  const [position, setPosition] = useState();
  const [task, setTask] = useState();
  const [workDate, setWorkDate] = useState();

  function handleFormSubmit(event) {
    // event.target = form
    // form.name
    setName(event.target.name.value);
    setEmail(event.target.email.value);
    setPhoneNumber(event.target.phoneNumber.value);
    setFormState("submitted");
    event.target.reset();
    event.preventDefault();
  }
  function handleFormSubmit1(event) {
    setSchool(event.target.school.value);
    setTitle(event.target.title.value);
    setDate(event.target.date.value);
    setFormState("submitted1");
    event.target.reset();
    event.preventDefault();
  }
  function handleFormSubmit2(event) {
    setCompany(event.target.company.value);
    setPosition(event.target.position.value);
    setTask(event.target.task.value);
    setWorkDate(event.target.workDate.value);
    setFormState("finished");
    event.target.reset();
    event.preventDefault();
  }
  if (formState === "finished") {
    return (
      <div>
        <div className="personal">
          <div className="name">{name}</div>
          <div className="email">{email}</div>
          <div className="phone-number">{phoneNumber}</div>
        </div>
        <div className="school">{school}</div>
        <div className="title">{title}</div>
        <div className="date">{date}</div>
        <div className="company">{company}</div>
        <div className="position">{position}</div>
        <div className="task">{task}</div>
        <div className="work-date">{workDate}</div>
        <button onClick={handleResetForm}>reset</button>
      </div>
    );
  } else if (formState === "submitted1") {
    return (
      <div>
        <form className="work-history" onSubmit={handleFormSubmit2}>
          <input type="text" id="company" placeholder="Company Name"></input>
          <input type="text" id="position" placeholder="Job Position"></input>
          <input type="text" id="task" placeholder="Main Tasks"></input>
          <input
            type="text"
            id="workDate"
            placeholder="period of employment"
          ></input>
          <button type="submit">submit</button>
        </form>
        <button onClick={handleResetForm}>reset</button>
      </div>
    );
  } else if (formState === "submitted") {
    return (
      <div>
        <form className="education" onSubmit={handleFormSubmit1}>
          <input type="text" id="school" placeholder="School Name"></input>
          <input type="text" id="title" placeholder="education title"></input>
          <input type="text" id="date" placeholder="date of study"></input>
          <button type="submit">submit</button>
        </form>
        <button onClick={handleResetForm}>reset</button>
      </div>
    );
  }

  return (
    <div>
      <form className="personal" onSubmit={handleFormSubmit}>
        <input type="text" id="name" placeholder="Name"></input>
        <input type="text" id="email" placeholder="Email"></input>
        <input type="text" placeholder="Phone number" id="phoneNumber"></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
