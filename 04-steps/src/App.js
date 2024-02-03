import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // Note: state should be delcared only in the scope of component
  // not insid of any other statement or loop,expression.
  // ex: if(true)
  // {
  // const [step,setStep] = useState(1);
  // }
  // this is not allowed. Becuase it is inside App component.
  // then inside if-else statement. It is not allowed.
  //NOTE: State should be declared just inside the component's scope only.

  // declaring state to change step value
  const [step, setStep] = useState(1);
  // declaring another state for UI(cross button)
  const [isOpen, setIsOpen] = useState(true);

  // previous button handler
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  // next button handler
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  // BAD Practice
  // test.name = "murr";
  // GOOD PRACTICE: setTest({test.name = "murr"};)
  return (
    // using react fragment as we are returning two things
    // X(cross button) and full steps div
    <>
      {/* cross button: when it is click, whole UI is vanished.
      UI will reappear for clicking again  */}
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          {/* step message component  */}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            {/* previous button  */}
            <Button bgColor="#7905f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous{" "}
            </Button>
            {/* next button  */}
            <Button bgColor="#7905f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>{" "}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

// component to show step message
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
// generic button component
// Note: we used the children prop here
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
