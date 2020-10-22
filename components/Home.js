import Head from 'next/head';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ghosts, evidences } from '../data';

// const { Checkbox } = antd;

// function onChange(e) {
//   console.log(`checked = ${e.target.checked}`);
// }

// ReactDOM.render(<Checkbox onChange={onChange}>Checkbox</Checkbox>, mountNode);

const getCurrentCount = state => state.count.currentCount;
const setCurrentCount = value => ({ type: 'CHANGE_VALUE', payload: value });

const Home = ({ currentCount, updateCurrentCount }) => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>{currentCount}</div>
    <button type="button" onClick={() => updateCurrentCount(currentCount + 1)}>
      Next
    </button>
    {evidences && evidences.map(ev => <div key={ev.name}>{ev.name}</div>)}
    {ghosts && ghosts.map(ghost => <div key={ghost.name}>{ghost.name}</div>)}
  </div>
);

Home.propTypes = {
  currentCount: PropTypes.number.isRequired,
  updateCurrentCount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentCount: getCurrentCount(state),
});
const mapDispatchToProps = dispatch => ({
  updateCurrentCount: value => dispatch(setCurrentCount(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
