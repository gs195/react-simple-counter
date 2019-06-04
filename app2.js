class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.startCount };
    this.decrementCount = this.decrementCount.bind(this);
    this.newClass = "display";
  }

  incrementCount() {
    console.log("I was clicked");
    this.setState(state => {
      return { count: state.count + 1 };
    });
    // this.toggleClass();
  }

  decrementCount() {
    this.setState(state => ({ count: state.count - 1 }));
    // this.toggleClass();
  }

  toggleClass() {
    return (this.newClass =
      this.state.count > 0 ? "display-positive" : "display-negative");
  }

  initialCount(value) {
    this.startValue = value;
  }

  render() {
    return (
      <div className="counter">
        <h1>React-Simple-Counter</h1>
        <Display count={this.state.count} className={this.toggleClass()} />
        {/* <div className={this.newClass}>{this.state.count}</div> */}
        <Button
          className={"btn"}
          text="Increment"
          onClick={this.incrementCount.bind(this)}
        />
        {/* <button onClick={this.incrementCount.bind(this)}>increment</button> */}
        <Button
          className={"btn"}
          text="Decrement"
          onClick={this.decrementCount}
        />
        {/* <button onClick={this.decrementCount}>decrement</button> */}
      </div>
    );
  }
}

// function App() {
//     return(
//   <React.Fragment>
//     <Counter />
//     <Counter />
//     <Counter />
//     <Counter />
//     <Counter />
//   </React.Fragment>
//     )};

function App() {

    const counters = [
    { id: "123", initialCount: 0 },
    { id: "456", initialCount: -10 },
    { id: "123", initialCount: 9 },
    { id: "789", initialCount: 2 }
    ];

    const counterItems = counters.map(counter => {
        return <Counter key={counter.id} startCount={counter.initialCount} />;
    });

    return <React.Fragment>{counterItems}</React.Fragment>

} 

// function App() {
//   return (
//     <React.Fragment>
//       {[0, 1, 2, 3, 4].map((number, index) => { //index can only be used in array is not muted
//           return <Counter key={index} count={number} />;
//       })}
//     </React.Fragment>
//   );
// }

function Button({ className, onClick, text }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

// const Display = props => {
//   return <div className={`display ${props.method}`}>{props.count}</div>;
// };

const Display = ({ count, className }) => {
  return <div className={className}>{count}</div>;
};

// const element = <Counter />;
const element = <App />;

const container = document.querySelector("#app");

ReactDOM.render(element, container);
