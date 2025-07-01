
import './input.css';
import './output.css';
import { Setup } from './setup';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './auth';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
<>
<AuthProvider>
  <Setup/>
   <ToastContainer />
   </AuthProvider>
</>
    
  );
}

export default App;
