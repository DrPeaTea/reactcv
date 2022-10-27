export default function work(props) {
  function handleSubmit(event) {
    // Do things for this form
    const form = event.target;

    const workData = {
      company: form.company.value,
      position: form.position.value,
      task: form.task.value,
      workDate: form.workDate.value,
    };

    props.onDataUpdate(workData);
  }

  return (
    <form className="work-history" onSubmit={handleSubmit}>
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
  );
}
