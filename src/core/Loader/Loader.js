import Dots from './Dots';
import Spinner from './Spinner';
import NiceSpinner from './NiceSpinner';

const Loader = f => f;

Loader.Dots = Dots;
Loader.Spinner = Spinner;
Loader.NiceSpinner = NiceSpinner;

Loader.displayName = 'Loader';
Loader.propTypes = {};
Loader.defaultProps = {};

export default Loader;
