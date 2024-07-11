import './App.css';
import { Route,Routes } from 'react-router-dom';
import BasicComponentCreation from './components/BasicComponentCreation';
import ComponentComposition from './components/ComponentComposition';
import ConditionalRendering from './components/ConditionalRendering';
import DisplayWindowWidth from './components/DisplayWindowWidth';
import FormControlled from './components/FormControlled';
import DataFetchingComponent from './components/LifeCycleMethod';
import StateManagment from './components/StateManagment';
import Home from './components/Home';
import ParentComponent from './components/PropsDrilling';
import Api from './components/ContextApi';
import Ui from './components/AdvancedUi';
import ErrorExample from './components/ErrorBoundary';
import TodoList from './components/OptimisticUi';






function App() {
  return (
    <div className="App">

      <Routes>
      <Route path='' element={ <Home/>}/>
      <Route path='BasicComponentCreation' element={ <BasicComponentCreation/>}/>
      <Route path='StateManagment' element={ <StateManagment/>}/>
      <Route path='ConditionalRendering' element={ <ConditionalRendering/>}/>
      <Route path='FormControlled' element={ <FormControlled/>}/>
      <Route path='ComponentComposition' element={ <ComponentComposition/>}/>
      <Route path='DisplayWindowWidth' element={ <DisplayWindowWidth/>}/>
      <Route path='DataFetchingComponent' element={ <DataFetchingComponent/>}/>
      <Route path='ParentComponent' element={ <ParentComponent/>}/>
      <Route path='api' element={ <Api/>}/>
      <Route path='ui' element={ <Ui/>}/>
      <Route path='ErrorExample' element={ <ErrorExample/>}/>
      <Route path='TodoList' element={ <TodoList/>}/>






    
    </Routes>
    </div>
  );
}

export default App;
