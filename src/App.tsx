import './App.css'
import { TestScreen, ProjectScreen } from './screens';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TestScreen />}>
        <Route path='' element={<ProjectScreen/>} />
      </Route>
    </Routes>
  )
}

export default App;