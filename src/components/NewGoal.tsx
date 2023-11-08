import { useRef, type FormEvent } from 'react';

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset();

    onAddGoal(enteredGoal, enteredSummary);
  }

  // new FormData(event.currentTarget).forEach((value, name) => {
  //   console.log(value, name);
  // });

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" name="goal" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" name="summary" id="summary" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
