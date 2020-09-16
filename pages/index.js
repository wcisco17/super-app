import Head from "../components/head";
import Nav from "../components/nav";

const Index = () => {
  return (
    <div>
      <Head title="Home" />
      <Nav />
      <div className="hero">
        <h1 style={{ textAlign: "center" }} className="title">
          Welcome to your new Website,
        </h1>
      </div>
    </div>
  );
};

export default Index;
