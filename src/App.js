import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AddExpense from "./pages/add-expense/AddExpense";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-expense" component={AddExpense} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
