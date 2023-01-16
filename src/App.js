import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News pageSize={9} country="in" category="general" />}
            />
            <Route
              path="/home"
              element={<News pageSize={9} country="in" category="general" />}
            />
            <Route
              path="/business"
              element={<News pageSize={9} country="in" category="business" />}
            />
            <Route
              path="/entertainment"
              element={
                <News pageSize={9} country="in" category="entertainment" />
              }
            />
            <Route
              path="/health"
              element={<News pageSize={9} country="in" category="health" />}
            />
            <Route
              path="/science"
              element={<News pageSize={9} country="in" category="science" />}
            />
            <Route
              path="/technology"
              element={<News pageSize={9} country="in" category="technology" />}
            />
            <Route
              path="/sports"
              element={
                <News pageSize={9} country="in" category="sciensportsce" />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
