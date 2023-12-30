import "./AboutComp.css";
const AboutComp = () => {
  return (
    <div>
      <div>
        <div>
          <div className="text-center p-12 ">
            <h1 className="text-4xl text-[#FF7501] mb-4">About Us</h1>
            <h2 className="text-2xl mb-5">Welcome to React_Router_DOM!</h2>
            <p className="aboutP">
              React Router DOM is a widely used library in the React ecosystem
              for handling navigation and routing within single-page
              applications (SPAs). SPAs aim to provide a seamless user
              experience by dynamically updating content on the same page,
              rather than navigating to entirely new pages. React Router DOM
              accomplishes this by allowing developers to define and manage
              different "routes" or views in their applications. <br />
              At its core, React Router DOM introduces key components that make
              it easier to implement client-side routing. The BrowserRouter
              component serves as the root of the routing system and uses the
              HTML5 history API to synchronize the application's UI with the
              URL. It enables the creation of a virtual path structure, which
              allows users to navigate between different views without a full
              page reload. <br />
              Routes are defined using the Route component, specifying the URL
              path and the corresponding component to render when the path
              matches the current location. The Link and NavLink components
              create navigation links, facilitating seamless transitions between
              different parts of the application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
