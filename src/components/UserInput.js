import { useState } from "react";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 3000,
  "expected-return": 7,
  duration: 5,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const handelFormSubmit = (event) => {
    event.preventDefault();
    // props.onCalculate(userInput);
  };

  const handelReset = (event) => {
    event.preventDefault();
    setUserInput(initialUserInput);
  };

  const inputChangeHandeler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form onSubmit={handelFormSubmit} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(e) =>
              inputChangeHandeler("current-savings", e.target.value)
            }
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={userInput["yearly-contribution"]}
            onChange={(e) =>
              inputChangeHandeler("yearly-contribution", e.target.value)
            }
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(e) =>
              inputChangeHandeler("expected-return", e.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => inputChangeHandeler("duration", e.target.value)}
            type="number"
            value={userInput.duration}
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={handelReset} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
