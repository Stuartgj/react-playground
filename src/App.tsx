import {
  HashRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

function AppLayout() {
  return (
    <div>
      <h1>🏠 Main Layout</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return <p>Welcome to the homepage!</p>;
}

function DashboardLayout() {
  return (
    <div>
      <h2>📊 Dashboard</h2>
      <nav>
        <Link to="">Overview</Link> | <Link to="reports">Reports</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Overview() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Overview Page</h3>
      <button onClick={() => navigate("reports")}>
        Go to Reports (relative)
      </button>
    </div>
  );
}

function Reports() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Reports Page</h3>
      <button onClick={() => navigate("/")}>Back to Home (absolute)</button>
    </div>
  );
}

export default App;
