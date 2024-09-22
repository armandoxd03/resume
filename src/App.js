import './App.css';
function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <h1>JOHN ROY DUCUT</h1>
          <h2><em>FUTURE BACK-END DEVELOPER</em></h2>
        </div>
  
        <div className="Content">
          <div className="Contact">
            <h1>Contact</h1>
           <section> <a href="mailto:johnroyducut04@gmail.com">johnroyducut04@gmail.com
            <span className="material-icons gray-icon">email</span></a></section>

          <section> <a href="tel:09069346013">09069346013
            <span className="material-icons gray-icon">call</span></a></section>

          <section><span className="contact-text"></span>
          <a href="https://www.google.com/maps/place/Poblacion,+Macabebe,+Pampanga" target="_blank" rel="noopener noreferrer">Poblacion, Macabebe Pampanga</a>
          <i className="fas fa-map-marker-alt gray-icon"></i></section>
          
          <section><a href="https://github.com/armandoxd03" target="_blank" rel="noopener noreferrer">Github <i class="fa-brands fa-github gray-icon"></i></a> </section>

          <section><a href="https://www.facebook.com/john.r.ducut/" target="_blank" rel="noopener noreferrer">johnroyducut@yahoo.com<i class="fa-brands fa-facebook gray-icon"></i></a> </section>          
          
          <section><a href="https://www.instagram.com/roy_john_03/" target="_blank" rel="noopener noreferrer">@roy_john_03 <i class="fa-brands fa-instagram gray-icon"></i></a> </section>          
          
          <section><a href="https://x.com/Armandox_03" target="_blank" rel="noopener noreferrer">@Armandox_03 <i class="fa-brands fa-twitter gray-icon"></i></a> </section>          


          <h1>Education</h1>
          <p>
Bachelor of Information Technology University of the Assumption San Fernando Philippines 2022-present
          </p>

          <h1>Skills</h1>
          <ul>
            <li>Python</li>
            <li>Javascript</li>
            <li>MySQL</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Boostrap</li>
            </ul>
          </div>

          <div className="Experience">
            <h1>Experience Section</h1>

            <h2>1st Year 2022-2023</h2>
            <h3>Python and Figma</h3>
            <p>During our first year, we learned the fundamentals of Python, covering essential concepts such as variables, functions, and loops. This foundational knowledge allowed us to create functional outputs and even simple games. Additionally, Figma introduced us to designing wireframes and mock-ups for websites, thereby enhancing our understanding of user interface and user experience design.
</p>
            <h3>Projects</h3>
            <ul>
              <li>Python Calculator</li>
              <li>Python Tic-tac-toE</li>
              <li>Motion Detector</li>
              <li>Wireframe of the University of the Assumption Website</li>
              <li>Mockup of the University of the Assumption Website</li>
            </ul>

            <h2>2nd Year 2023-2024</h2>
            <h3>Javascript, MySQL, HTML and CSS</h3>
            <p>In our second year, we delved into JavaScript, MySQL, HTML, and CSS. For JavaScript, we learned the basics, including how to prompt, handle input and output, and perform calculations. MySQL introduced us to database creation, data input, querying, and generating graphs based on the data stored. In our HTML and CSS lessons, we focused on structuring and styling web content, using CodePen to combine CSS, HTML, and JavaScript, which allowed us to create interactive projects.
            <h3>Projects</h3>

            <ul>
              <li>Code Pen Calculator</li>
              <li>Code Pen Order Form</li>
              <li>Code Pen Order Form</li>
              <li>Actual Database with graphs</li>
            </ul>
            </p>
            <h2>3rd Year 2024-present</h2>
            <h3>HTML, CSS, REACTJS, and Bootstrap</h3>
            <p>In my third year, our focus shifted to web development, where we explored more advanced HTML concepts and design techniques, as well as deploying projects on GitHub. We engaged in replicating different web designs and pages to sharpen our skills. Additionally, we studied Bootstrap for creating responsive layouts and delved into React.js, learning to build dynamic user interfaces and work with component-based architecture.</p>
            <h3>Projects</h3>
            <ul>
              <li> Responsive Web Portfolio</li>
              <li>Github Resume</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;