import React from "react";

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      dob: e.target.dob.value,
    };
    if(data.phone.length !== 10){
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    if(data.dob) {
      const dobDate = new Date(data.dob);
      const today = new Date();
      if(dobDate > today) {
        alert("Invalid date of birth. Date of birth cannot be in the future.");
        return;
      }
    }
    setIsOpen(false);
  };

  return (
    <div className="modal-content" onClick={() => setIsOpen(false)}>
      <div className="modal-header">
        <h1>User Details Modal</h1>
        <button className="openFormBtn" onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}>
          Open Form
        </button>
      </div>
      {isOpen && (
        <div className="modal">
          <form onSubmit={(e) => handleSubmit(e)} onClick={(e) => e.stopPropagation()}>
            <h1>Fill Details</h1>
            <label htmlFor="username">Username:</label>
            <input for="username" type="text" id="username" required />
            <label htmlFor="email">Email:</label>
            <input for="email" type="email" id="email" required />
            <label htmlFor="phone">Phone:</label>
            <input for="phone" type="tel" id="phone" required />
            <label htmlFor="dob">Date of Birth:</label>
            <input for="dob" type="date" id="dob" required />
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
