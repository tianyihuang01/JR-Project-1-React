const SkillsBar = ({ items }) => (
  <span>
    {items.map(({ key, foo, bar }) => (
      <span key={key}>
        <h4 className="resume__skill">{foo}</h4>
        <div className="bar">
          <div className={["skill", bar].join(" ")}></div>
        </div>
      </span>
    ))}
  </span>
);

export default SkillsBar;
