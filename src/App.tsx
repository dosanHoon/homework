import React from "react";

import "./App.css";
import CardList from "./components/CardList";
import { UserHomeStoreProvider } from "./store/UserHomeStore";

function App() {
  return (
    <main className="PC-__">
      <UserHomeStoreProvider>
        <CardList />
      </UserHomeStoreProvider>
    </main>
  );
}

export default App;
