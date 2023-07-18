import { Text } from './ErrorMessage.styled'
import PropTypes from 'prop-types';

export const ErrorMessage = ({ error, children }) => {
  return <Text>
          <p style={{ textAlign: "left" }} > Oops! Something went wrong! Try reloading the page!
            <code>
              {JSON.stringify(error, null, 2)}
            </code>
          </p>
          {children}
        </Text>;
};

ErrorMessage.propTypes = {
  error: PropTypes.any,
  children: PropTypes.node,
};
