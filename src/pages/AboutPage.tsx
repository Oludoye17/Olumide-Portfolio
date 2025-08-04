

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">About Me</h2>

        <p className="mb-4 text-lg leading-relaxed">
          Hello! I'm <span className="font-semibold">Oludoye Olumide Ismail</span>, a
          dedicated and detail-oriented <span className="font-semibold">Full-Stack Web Developer</span> with a strong passion for
          building modern, scalable, and user-friendly web applications. I specialize
          in both frontend and backend development, combining design aesthetics with
          functional logic.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          I started with <span className="font-medium">HTML, CSS, JavaScript</span>, and
          <span className="font-medium"> Bootstrap</span>, then transitioned into more advanced technologies like
          <span className="font-medium"> React</span>, <span className="font-medium">TypeScript</span>, and
          <span className="font-medium"> Tailwind CSS</span> for building dynamic user interfaces.
          On the backend, I work with <span className="font-medium">Node.js</span>, <span className="font-medium">Express.js</span>,
          and <span className="font-medium">MongoDB</span>, integrating RESTful APIs to create full-stack applications.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">🛠️ Tech Stack</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-lg list-disc list-inside">
          <li>React</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>REST APIs</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8 mb-4">🚀 Goals & Interests</h3>
        <p className="text-lg leading-relaxed">
          I'm actively seeking opportunities as a <span className="font-medium">Junior Web Developer</span> or to
          collaborate on real-world projects. I enjoy learning new tools, solving
          practical problems, and turning ideas into interactive experiences.
        </p>

        <p className="mt-6 text-lg">
          <span className="font-semibold">Let's connect!</span> I'm open to freelance work,
          internships, or full-time roles in tech.
        </p>
      </div>
    </section>
  );
};

export default About;

