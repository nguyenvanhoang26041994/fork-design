import Circle from './Circle';
import Linear from './Linear';
import useSimulateProgress from './useSimulateProgress';

const Progress = f => f;

Progress.Circle = Circle;
Progress.Linear = Linear;

Progress.useSimulateProgress = useSimulateProgress;
Progress.displayName = 'Progress';
Progress.propTypes = {};
Progress.defaultProps = {};

export default Progress;
