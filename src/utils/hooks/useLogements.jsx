import { useContext, useState } from "react";
import { LogementsContext, SetLogementsContext } from "../logementsContext";

const useLogements = () => {
  const [error, setError] = useState(null);
  const logements = useContext(LogementsContext);
  const setLogements = useContext(SetLogementsContext);

  if (!setLogements || !logements)
    throw new Error(
      "useLogements must be used within a LogementsContextProvider"
    );

  const getAllLogements = async () => {
    if (logements.loaded === false) {
      try {
        setError(null);
        const response = await fetch("/data/logements.json");

        if (!response.ok) {
          const error = new Error(
            response.statusText || "Error while fetching logements.json"
          );
          error.status = response.status || 500;
          throw error;
        }

        const data = await response.json();

        setLogements({ data, loaded: true });
        console.log("Logements loaded");
      } catch (error) {
        setLogements({ data: [], loaded: true });
        setError(error);
      }
    }
  };

  const getLogement = async (id) => {
    if (!logements.loaded) await getAllLogements();

    return logements.data?.find((logement) => logement.id === id);
  };

  return {
    logements: logements.data,
    setLogements,
    getAllLogements,
    loaded: logements.loaded,
    getLogement,
    error,
  };
};

export default useLogements;
