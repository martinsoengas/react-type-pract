import CourseGoal from './CourseGoal';
import { type CourseGoal as CourseGoalType } from '../App';

type CourseGoalListProps = { goals: CourseGoalType[] };

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title="TITLE" description="DESCRIPTION">
            <p>Learn it from the ground up</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
