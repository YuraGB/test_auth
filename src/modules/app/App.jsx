import RouterComponent from '../providers/routerProvider/index.jsx';
import ReactQueryProvider from '../providers/ReactQueryProvider/index.jsx';

function App() {
  return (
    <ReactQueryProvider>
      <RouterComponent />
    </ReactQueryProvider>
  );
}

export default App;
