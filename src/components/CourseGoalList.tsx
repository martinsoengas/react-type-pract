import CourseGoal from './CourseGoal';
import { type CourseGoal as CourseGoalType } from '../App';
import InfoBox from './InfoBox';
import { ReactNode } from 'react';

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">No goals yet. Maybe add one?</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You are collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              description={goal.description}
              onDelete={onDeleteGoal}
            ></CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
