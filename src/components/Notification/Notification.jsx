import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
export const Notification = ({ title }) => {
  return (
    <Box mt="40px" as="p">
      {title}
    </Box>
  );
};
Notification.prototype = {
  title: PropTypes.string.isRequired,
};
