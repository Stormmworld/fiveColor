import App from './../Components/App';
import { connect } from 'react-redux';
import { updateDeck } from '../Redux/actions';
import { getDeck } from '../Selectors/AppSelectors';

const mapStateToProps = state => {
  return {
    deck: getDeck(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateDeck: (deck) => {
      dispatch(updateDeck(deck));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);