export default function Education(props) {
  function handleSubmit(event) {
    // Do things for this form
    const form = event.target;

    const educationData = {
      school: form.school.value,
      title: form.title.value,
      date: form.date.value,
    };

    props.onDataUpdate(educationData);
  }

  return (
    <form className="education" onSubmit={handleSubmit}>
      <input type="text" id="school" placeholder="School Name"></input>
      <input type="text" id="title" placeholder="education title"></input>
      <input type="text" id="date" placeholder="date of study"></input>
      <button type="submit">submit</button>
    </form>
  );
}
