import { useRef } from "react";
const UserForm = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const userNameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      username: userNameRef.current.value
    };
    myFn(data);
  };
  const myFn = async (myData) => {
    const response = await fetch(
      "https://react-http-request-6538b-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
      {
        method: "POST",
        body: JSON.stringify(myData)
      }
    );
    const data = await response.json();
    console.log(data);
    nameRef.current.value = "";
    ageRef.current.value = "";
    userNameRef.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter name</label>
      <input type="text" ref={nameRef} />
      <label>Enter age</label>
      <input type="text" ref={ageRef} />
      <label>Enter username</label>
      <input type="text" ref={userNameRef} />
      <button type="submit">Add User</button>
    </form>
  );
};
export default UserForm;
