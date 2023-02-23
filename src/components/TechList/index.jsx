import { useContext } from "react";
import { TechContext } from "/src/contexts/TechContext";
import { TechListItem } from "../TechListItem";
import { PlusButton, PlusIcon, TechListDiv, TechListUl } from "./style";
import { LoadingComponent } from "../Loading";

export const TechList = () => {
  const {
    techLoading,
    registerModal,
    techsStates: [techs],
  } = useContext(TechContext);

  const techsLength = techs.length;

  return (
    <TechListDiv className="column">
      <div className="TechList-header row a-center j-between">
        <h2 className="Title1">Tecnologias</h2>

        <PlusButton className="bg-grey-3 flex" onClick={registerModal}>
          <PlusIcon />
        </PlusButton>
      </div>
      <TechListUl className="bg-grey-3 column">
        {techLoading ? (
          <LoadingComponent />
        ) : techsLength ? (
          techs.map((tech) => <TechListItem key={tech.id} tech={tech} />)
        ) : (
          <li className="Title3">
            Você ainda não possui tecnologias cadastradas
          </li>
        )}
      </TechListUl>
    </TechListDiv>
  );
};
