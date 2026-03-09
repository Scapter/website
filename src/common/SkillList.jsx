function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
      <div></div>
    </span>
  );
}

export default SkillList;
