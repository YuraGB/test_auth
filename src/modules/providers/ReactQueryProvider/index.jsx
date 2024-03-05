import { QueryClient, QueryClientProvider } from 'react-query';
import PropTypes from 'prop-types';

const ReactQueryProvider = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;

ReactQueryProvider.propTypes = {
  children: PropTypes.node,
};
