import "./container.css";

const Container = ({ children }) => {
  return (
    <main className="container">
      <div className="main-container">{children}</div>
    </main>
  );
};

export default Container;
