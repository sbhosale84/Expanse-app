import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Budget } from "./components/Budget";
import { Remaining } from "./components/Remaining";
import ExpenseTotal from "./components/ExpanseTotal";
import { ExpenseList } from "./components/ExpenseList";
import { AddExpenseForm } from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="container">
          <h1 className="mt-3">My Budget Planner</h1>
          <div className="row mt-3">
            <div className="col-sm">
              <Budget />
            </div>
            <div className="col-sm">
              <Remaining />
            </div>
            <div className="col-sm">
              <ExpenseTotal />
            </div>
          </div>
          <h3 className="mt-3">Expenses</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <ExpenseList />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm">
              <Link to="/addExpense" className="btn btn-primary"> 
                Add Expense
              </Link>
              <Link to="/" className="btn btn-primary " style={{marginLeft:'5px'}}> 
                Back
              </Link>
            </div>
          </div>
          <Routes>
            <Route path="/addExpense" element={<AddExpenseForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
