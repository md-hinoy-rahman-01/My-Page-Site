import "./AcademicsContent.css";

function AcademicsContent() {
  return (
    <div className="welcome">
      <h2>📚 My Academic Journey</h2>
      <table>
        <thead>
          <tr>
            <th>Institution</th>
            <th>Degree</th>
            <th>Year</th>
            <th>Grade/Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dublin City University, Ireland</td>
            <td>MSc in Computing (Data Analytics)</td>
            <td>2025</td>
            <td>First Class</td>
          </tr>
          <tr>
            <td>Military Institute of Science and Technology (MIST), Bangladesh</td>
            <td>BSc in Computer Science and Engineering</td>
            <td>2022</td>
            <td>3.50 / 4.00</td>
          </tr>
          <tr>
            <td>Notre Dame College, Bangladesh</td>
            <td>Higher Secondary Education</td>
            <td>2017</td>
            <td>5.00 / 5.00</td>
          </tr>
        </tbody>
      </table>

      <h2>🏫 Reflections</h2>

      <h3>Dublin City University</h3>
      <p>
        My time at DCU has been transformative. Pursuing an MSc in Computing with a focus on Data Analytics has pushed me to explore the depths of machine learning, data engineering, and AI ethics. I’ve worked on benchmarking large language models and diving into real-world data challenges — and it’s been thrilling. DCU has given me the tools and confidence to think critically and build responsibly in the tech space.
      </p>

      <h3>Military Institute of Science and Technology (MIST)</h3>
      <p>
        MIST was where my technical foundation was built. Studying Computer Science and Engineering taught me discipline, precision, and creativity. I led projects like a blockchain-based voting system and an ERP for e-waste management — both of which challenged me to think beyond code and into impact. MIST shaped my engineering mindset and gave me the courage to experiment.
      </p>

      <h3>Notre Dame College</h3>
      <p>
        Notre Dame was more than academics — it was where I found my voice. I graduated with a perfect GPA, but what I cherish most is my time with the debating club. Being on the senior panel taught me how to listen, argue, and lead. It was here that I learned the power of words and the importance of perspective — lessons I carry into every room I enter.
      </p>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default AcademicsContent;