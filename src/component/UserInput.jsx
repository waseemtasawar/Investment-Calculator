const UserInput = ({ onChange, inputUser }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={inputUser.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label> Annual Investment</label>
          <input
            type="number"
            required
            value={inputUser.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={inputUser.expectedReturns}
            onChange={(event) =>
              onChange("expectedReturns", event.target.value)
            }
          />
        </p>
        <p>
          <label>Durations</label>
          <input
            type="number"
            required
            value={inputUser.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
