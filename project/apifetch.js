  /* Fetching API */

  window.onload = function() {
    fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
      .then( response => {
        if (response) {
          return response.json();
        }
        throw new Error('Network response failed.');
      })
      .then( data => {
        console.log(data);
        const mainSection = document.querySelector(".simplify");
        const projectSection = document.querySelector(".projects");

        const others  = loadMainProject(mainSection, data, "1");
        loadOtherProjects(projectSection, others);
        
      })
      .catch( error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  // Having the main section, the data, and the uuid, load data in the main section
  // Return the array of the other projects (not main)
  const loadMainProject = (section, apiData, uuid) => {

    const mainData = apiData.find(project => project.uuid === uuid); //Find is like filter but returns the first found element
    
    // Get html elements
    const title = section.querySelector("h1");
    const images = section.querySelectorAll("img");
    const description = section.querySelector(".subtitle p:first-child");
    const date = section.querySelector(".subtitle p:nth-child(2");
    const content = section.querySelector(".container p");

    //Edit html elements
    title.innerHTML = mainData.name;
    images.forEach(img => img.setAttribute("src", mainData.image));
    description.innerHTML = mainData.description;
    date.innerHTML = mainData.completed_on;
    content.innerHTML = mainData.content;
    
    return apiData.filter(project => project.uuid !== uuid);
  }

  // For every element in otherProjects, add in the proper section said project
  const loadOtherProjects = (section, otherProjects) => {
    otherProjects.forEach(project => {

      // Main div, project element
      const newProject = document.createElement("div");
      newProject.classList.add("project");
      section.appendChild(newProject);

      // Image of the project
      const img = document.createElement("img");
      img.setAttribute("src", project.image);
      newProject.appendChild(img);

      // Main text of the project
      const title = document.createElement("div");
      title.classList.add("title");
      newProject.appendChild(title);


      // Title of the project
      const title1 = document.createElement("h4");
      title1.innerHTML = project.name;
      title.appendChild(title1);

      // Subtitle of the project
      const title2 = document.createElement("p");
      title2.innerHTML = project.description;
      title.appendChild(title2);

      // Learn more link of the project
      const link = document.createElement("a");
      link.innerHTML = "Learn more";
      newProject.appendChild(link);

    })
  }