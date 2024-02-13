import React from "react";
import ProtectedRoute from "./context/ProtectedRoute";
import { GlobalStyle } from "./styles/Global.style";
import LoginPage from "./pages/LoginPage";
import ThemeContext from "./context/ThemeContext";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeContext>
      <ProtectedRoute>
        <GlobalStyle />
        <Layout>
          <LoginPage />
        </Layout>
      </ProtectedRoute>
    </ThemeContext>
  );
}

export default App;
