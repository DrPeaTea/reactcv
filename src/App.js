import { useState } from "react";
import Personal from "./components/personal";
import Education from "./components/education";
import Work from "./components/work";
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

  // function handleFormSubmit(event) {
  //   console.log("First form submitted");

  //   // event.target = form
  //   // form.name
  //   setName(event.target.name.value);
  //   setEmail(event.target.email.value);
  //   setPhoneNumber(event.target.phoneNumber.value);
  //   setFormState("submitted");
  //   event.target.reset();
  //   event.preventDefault();
  // }

  // function handleFormSubmit1(event) {
  //   setSchool(event.target.school.value);
  //   setTitle(event.target.title.value);
  //   setDate(event.target.date.value);
  //   setFormState("submitted1");
  //   event.target.reset();
  //   event.preventDefault();
  // }

  // function handleFormSubmit2(event) {
  //   setCompany(event.target.company.value);
  //   setPosition(event.target.position.value);
  //   setTask(event.target.task.value);
  //   setWorkDate(event.target.workDate.value);
  //   setFormState("finished");
  //   event.target.reset();
  //   event.preventDefault();
  // }

  // App
  // -> Education
  function updatePersonalData(data) {
    // Put data into my state (App)
    setName(data.name);
    setEmail(data.email);
    setPhoneNumber(data.phoneNumber);
    setFormState("education");
  }

  function updateEducationData(data) {
    // Put data into my state (App)
    setSchool(data.school);
    setTitle(data.title);
    setDate(data.date);

    setFormState("work-experience");
  }
  function updateWorkData(data) {
    // Put data into my state (App)
    setCompany(data.company);
    setPosition(data.position);
    setTask(data.task);
    setWorkDate(data.workDate);

    setFormState("finished");
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
  } else if (formState === "work-experience") {
    return <Work onDataUpdate={updateWorkData} />;
  } else if (formState === "education") {
    return <Education onDataUpdate={updateEducationData} />;
  }
  return <Personal onDataUpdate={updatePersonalData} />;
}

export default App;
