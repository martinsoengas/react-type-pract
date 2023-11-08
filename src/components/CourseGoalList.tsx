import CourseGoal from './CourseGoal';
import { type CourseGoal as CourseGoalType } from '../App';

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            id={goal.id}
            title="TITLE"
            description="DESCRIPTION"
            onDelete={onDeleteGoal}
          >
            <p>Learn it from the ground up</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
