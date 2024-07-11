import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <ol>
        <Link to={'/BasicComponentCreation'}><li>Basic Component Creation</li></Link>
        <Link to={'/StateManagment'}><li>State Management:</li></Link>
       <Link to={'/ConditionalRendering'}> <li>Conditional Rendering:</li></Link>
        <Link to={"/FormControlled"}><li>Forms and Controlled Components:</li></Link>
        <Link to={'/DisplayWindowWidth'}><li>Component Composition:</li></Link>
        <Link to={'/DataFetchingComponent'}><li>Lifecycle Methods</li></Link>
        <Link to={'/ParentComponent'}><li>PropsDrilling</li></Link>
        <Link to={'/api'}><li>ContextApi</li></Link>
        <Link to={'/ui'}><li>AdvancedUi</li></Link>
        <Link to={'/ErrorExample'}><li>ErrorBoundary</li></Link>
        <Link to={'/TodoList'}><li>Optimistic UI Updates</li></Link>
      </ol>
    </div>
  );
}

export default Home;
