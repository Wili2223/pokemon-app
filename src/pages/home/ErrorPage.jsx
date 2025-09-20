import React from "react";
import { Link } from "react-router";


export default function ErrorPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>404 - Not Found</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

