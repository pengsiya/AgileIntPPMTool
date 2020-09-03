import React from "react";
import { Link } from "react-router-dom";

// Functional Component is Stateless (no lifecycle hooks)
const CreateProjectButton = () => {
  return (
    // use fragment than div
    <React.Fragment>
      <Link
        to="/addProject"
        href="ProjectForm.html"
        className="btn btn-lg btn-info"
      >
        Create a Project
      </Link>
    </React.Fragment>
  );
};

export default CreateProjectButton;
