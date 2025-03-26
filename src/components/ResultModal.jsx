import { forwardRef, useImperativeHandle, useRef } from "react"; // for versions of React < 19, otherwise ref can be sent as any other prop

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
  const dialog = useRef();

  // detach
  useImperativeHandle(ref, () => { // functions that will be exposed
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return <dialog ref={dialog} className="result-modal">
    <h2>You {result}</h2>
    <p>The target time was <strong>{targetTime} seconds</strong></p>
    <p>You stopped the timer with <strong>x seconds left</strong></p>
    <form method="dialog">
      <button>Close</button>
    </form>
  </dialog>
})

export default ResultModal;