import { useContext } from "react";
import { TechContext } from "/src/contexts/TechContext";
import TechListItem from "../TechListItem";
import { PlusButton, PlusIcon, TechListDiv, TechListUl } from "./style";

const TechList = () => {
  const { techs } = useContext(TechContext);

  return (
    <TechListDiv className="column">
      <div className="TechList-header row a-center j-between">
        <h2 className="Title1">Tecnologias</h2>

        <PlusButton
          className="bg-grey-3 flex"
          onClick={() => console.log("va")}
        >
          <PlusIcon />
        </PlusButton>
      </div>
      <TechListUl className="bg-grey-3 column">
        {techs.map((tech) => (
          <TechListItem key={tech.id} tech={tech} />
        ))}
      </TechListUl>
    </TechListDiv>
  );
};

export default TechList;
