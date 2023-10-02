import { Route, Routes } from 'react-router-dom';

import './App.css';
import Main from './Components/Main/Main';
import RequireAuth from './Components/RequireAuth.tsx/RequireAuth';
import SignIn from './Components/SignIn/SignIn';

export interface AuthChildrenProps {
  component: typeof App;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Main />
            </RequireAuth>
          }
        />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
