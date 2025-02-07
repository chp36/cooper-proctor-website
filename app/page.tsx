export default function Home() {
    return (
      <div>
        <section id="about">
          <div className="container about-container">
            <h2 className="section-title">About Me</h2>
            <p className="about-line">
              Computer Science at Cornell University
            </p>
            <p className="about-line">
              Developing a deep learning approach to detect iRBD from gaited walking patterns
            </p>
            <p className="about-paragraph">
              I&apos;m interested in the intersection of computer science, human-computer interaction, and biotechnology.
                Most recently, I&apos;ve been interested in processing data and developing wearable technologies to help people optimize
                performance and solve accessibility problems.
            </p>
          </div>
        </section>
        <section id="projects">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="project">
                <a
                    href="https://medium.com/@matthew.krakower21/generating-recipe-titles-with-neural-networks-4c669970c7d5"
                    target="_blank"
                >
                RNN and Transfer Learning Recipe Generator
                </a>
            </div>
            <div className="project">
                <a
                    href="https://www.babylonjs-playground.com/#BUXYWO"
                    target="_blank"
                >
                Snowflakes 3D Animation
                </a>
            </div>
            <div className="project">
                <a
                    href="VR Virtual Grasping Final Paper.pdf"
                    target="_blank"
                >
                Physics-Based Free-Hand Virtual Grasping in VR
                </a>
            </div>
            <div className="project">
                <a
                    href="Greed Philosophy Final Paper.pdf"
                    target="_blank"
                >
                Final Project Paper on the Philosophy of Greed
                </a>
            </div>
            <div className="project">
                <a
                    href="Social Media:AI Final Paper.pdf"
                    target="_blank"
                >
                Final Project Paper on Social Media and AI Echochambers
                </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
