import { useContext } from "react";
import { LogementsContext, SetLogementsContext } from "../logementsContext";

const useLogements = () => {
  const logements = useContext(LogementsContext);
  const setLogements = useContext(SetLogementsContext);

  if (!setLogements || !logements)
    throw new Error(
      "useLogements must be used within a LogementsContextProvider"
    );

  const getAllLogements = async () => {
    if (logements.loaded === false) {
      const response = await fetch("http://localhost:5173/data/logements.json");
      const data = await response.json();
      setLogements({ data, loaded: true });
      console.log("Logements loaded");
    }
  };

  const getLogement = async (id) => {
    if (!logements.loaded) await getAllLogements();

    return logements.data.find((logement) => logement.id === id);
  };

  return {
    logements: logements.data,
    setLogements,
    getAllLogements,
    loaded: logements.loaded,
    getLogement,
  };
};

export default useLogements;
