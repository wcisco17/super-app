import Head from "../components/head";
import Nav from "../components/nav";

export default () => {
  return (
    <div>
      <Head title="Home" />
      <Nav />
      <div className="hero">
        <h1 style={{ textAlign: "center" }} className="title">
          Welcome to Your new website
        </h1>
      </div>
    </div>
  );
};
