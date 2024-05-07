const Computer = (props) => {
  const { state, setState } = props;

  const toggleCheating = () => {
    setState((prev)=> ({
      // If we only need to modify one key
      ...prev, cheating: !prev.cheating
    }))
  }

  return (
    <section className="computer">
      <span
        role="img"
        aria-label="robot"
        data-testid="robot-icon"
        // onClick which toggles a cheating state
        onClick={toggleCheating}
        // to enable the cheating class
        // If cheating is true, this element will have a cheating class else make it blank
        // if(state.cheating === true)
          // className = "cheating"
        // else
          // className = ""
        className={state.cheating ? "cheating" : ""}
      >
        🤖
      </span>
      <div>
        <h1>Good game to you</h1>
        <div className="choices">
          <button>
            <span role="img" aria-label="rock">
              {state.compSelection === "Rock" ? "⛰️" : " ? "}
            </span>
          </button>
          <button>
            <span role="img" aria-label="scissors">
              {state.compSelection === "Scissors" ? "✂️" : " ? "}
            </span>
          </button>
          <button>
            <span role="img" aria-label="paper">
              {state.compSelection === "Paper" ? "📄" : " ? "}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Computer;
