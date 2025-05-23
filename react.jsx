const App = () => {
  // functions
  const title = "welcome React course";
  const subtitle = "this is website ";
  //template
  return (
    <div className="text_div">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>Today's date is {new Date()}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
