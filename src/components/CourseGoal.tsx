import { PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export default function CourseGoal({
  title,
  description,
  children,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>{children}</div>
        <button>Delete</button>
      </div>
    </article>
  );
}
