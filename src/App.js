function App() {
  const handleClick = () => {
    console.log("Animal is added");
  };
  return <button onClick={handleClick}>Add Animal</button>;
}

export default App;
