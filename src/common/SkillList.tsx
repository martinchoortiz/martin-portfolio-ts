interface SkillProps {
  skillName: string;
  srcImg: string;
}

function SkillList(skillProps: SkillProps) {
  return (
    <span>
      <img src={skillProps.srcImg} alt="Skill icon" />
      <p>{skillProps.skillName}</p>
    </span>
  );
}

export default SkillList;
