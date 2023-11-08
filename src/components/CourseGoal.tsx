import { PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  id,
  title,
  description,
  onDelete,
  children,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>{children}</div>
        <button onClick={() => onDelete(id)}>Delete Goal</button>
      </div>
    </article>
  );
}
