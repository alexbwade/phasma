import PropTypes from 'prop-types';
import store from '../redux/store';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
export default store.withRedux(MyApp);
