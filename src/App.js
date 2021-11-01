import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <nav className="App-header">
          <div className="App-logo"> </div>
          <div>
            <button className="Home-button">Home</button>
            <button className="Nav-button">About Us</button>
            <button className="Nav-button">How it works</button>
            <button className="Nav-button">Categories</button>
            <button className="Nav-button">Testimony</button>
            <button className="SignUp-button">{"Sign Up".toUpperCase()}</button>
          </div>
        </nav>
        <main className="Explore-card">
          <h5 className="Explore-question">
            Are you looking for <strong>woodden furniture</strong> for your
            place?
          </h5>
          <h2>This is the Right Place</h2>
          <button className="Theme-button">Explore Furniture</button>
        </main>
      </div>
      <div className="AboutUs">
        <div className="Page-heading">
          <div className="Small-logo"></div>
          <h3>Who we are</h3>
          <hr className="Line"></hr>
          <h1>{"About Us".toUpperCase()}</h1>
        </div>
        <div className="AboutUs-content">
          <div className="SaladBowlsImg"></div>
          <div className="AboutUs-text1">
            <h5>
              <strong>{"Woodies".toUpperCase()}</strong> is the{" "}
              <strong>home of modern wooden furniture</strong>{" "}
            </h5>
            <h6>
              the answer to your need for furniture with shapes, sizes and
              colors.
            </h6>
          </div>
          <div className="AboutUs-text2">
            <h5>
              Customised furniture
              <strong> made just for you</strong>
            </h5>
            <h6>
              Get it easy to adjust furniture to the shape and size of your
              dwelling or business.
            </h6>
          </div>
          <div className="WoodenSpoonsImg"></div>
        </div>
      </div>
      <div className="HowItWorks">
        <div className="Page-heading">
          <div className="Small-logo"></div>
          <h3>How to custom</h3>
          <hr className="Line"></hr>
          <h1>{"How it works".toUpperCase()}</h1>
        </div>
        <div className="HowItWorks-content">
          <div className="HowItWorks-design"></div>
          <div className="HowItWorks-measure"></div>
          <div className="HowItWorks-budget"></div>
          <div className="HowItWorks-make"></div>
        </div>

        <button className="Theme-button">Get Personalized Now</button>
      </div>
    </div>
  );
}

export default App;
