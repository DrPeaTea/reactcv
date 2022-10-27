export default function personal(props) {
  //   {
  //     onDataUpdate -> function
  //     propertyOne -> "Hello"
  //     propertyTwo -> "World"
  //   }

  function handleSubmit(event) {
    // Do things for this form
    const form = event.target;

    const personalData = {
      name: form.name.value,
      email: form.email.value,
      phoneNumber: form.phoneNumber.value,
    };

    props.onDataUpdate(personalData);
  }

  return (
    <form className="personal" onSubmit={handleSubmit}>
      <input type="text" id="name" placeholder="Name"></input>
      <input type="text" id="email" placeholder="Email"></input>
      <input type="text" placeholder="Phone number" id="phoneNumber"></input>
      <button type="submit">submit</button>
    </form>
  );
}
