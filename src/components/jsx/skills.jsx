import React from "react";
import "../css/skills.css";
export default function Skills() {
  function Star({ filled }) {
    if (filled) {
      return <span>★</span>;
    }
    return <span>☆</span>;
  }
  function Rating({ value, onChange }) {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((starValue) => (
          <Star
            key={starValue}
            filled={starValue <= value}
            onClick={() => onChange(starValue)}
          />
        ))}
      </div>
    );
  }
  function Skill({ name, value }) {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };
  
    return (
      <div className="skill-item" onClick={handleOpen}>
        <h2>{name}:</h2>
        <Rating value={value} />
        <Modal isOpen={isOpen} onClose={handleClose} skillName={name} rating={value} />
      </div>
    );
  }
  function Modal({ isOpen, onClose, skillName, rating }) {
    const skillDescriptions = {
      "ReactJS": "ReactJS fue mi primer framework aprendido, fue el framework de mis primeras páginas como freelancer.",
      "Python": "Python fue mi segundo lenguaje de programación aprendido luego de C++, en este he hecho desde algoritmos de RPA, hasta inteligencia artificial.",
      "Django": "En Django he hecho mis páginas más complejas y completas, ya que Python es un lenguaje en el que me manejo bien.",
      "MySQL": "En MySQL he hecho la mayoría de mis proyectos, junto a Django, ya que es el motor de base de datos que más me gusta.",
      "MongoDB": "MongoDB es el motor de base de datos que aprendí primero, ya que es muy fácil de usar y de entender.",
      "Firebase": "Firebase ha sido el motor de base de datos que más he usado en proyectos que nunca publiqué, ya que es un motor muy fácil de utilizar.",
      "AWS": "AWS es el servicio de la nube que más he usado, ya que es el que más me gusta y el que más me ha servido.",
      "Google Cloud Platform": "Google Cloud Platform lo utilizo principalmente con proyectos de Django, para guardar los archivos static.",
      "HTML": "HTML es el lenguaje de marcado que más he usado, ya que es el más conocido por ende fue de los primeros que aprendí, mucho antes de entrar a la universidad.",
      "CSS": "CSS es el lenguaje que prefiero para hacer páginas, ya que puedo personalizar al 100% los estilos.",
      "JavaScript": "JavaScript es un lenguaje que me ha servido mucho, porque me ha permitido hacer páginas más dinámicas.",
      "Inglés": "El inglés es un idioma que me gusta mucho, ya que me ha permitido aprender mucho más sobre programación, ya que la mayoría de la información está en inglés." 
    };
    const description = skillDescriptions[skillName];

    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h3>{skillName}</h3>
          <Rating value={rating} />
          <p>{description}</p>
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="skills-container">
        <Skill name="ReactJS" value={4} />
        <Skill name="Python" value={5} />
        <Skill name="Django" value={5} />
        <Skill name="MySQL" value={5} />
        <Skill name="MongoDB" value={4} />
        <Skill name="Firebase" value={5} />
        <Skill name="AWS" value={4} />
        <Skill name="Google Cloud Platform" value={4} />
        <Skill name="HTML" value={5} />
        <Skill name="CSS" value={4} />
        <Skill name="JavaScript" value={5} />
        <Skill name="Inglés" value={4} />
    </div>

  );
}
