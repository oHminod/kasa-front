import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LogementsContext = createContext(undefined);
export const SetLogementsContext = createContext(undefined);

const LogementsContextProvider = ({ children }) => {
  const [logements, setLogements] = useState({
    data: [],
    loaded: false,
  });

  return (
    <LogementsContext.Provider value={logements}>
      <SetLogementsContext.Provider value={setLogements}>
        {children}
      </SetLogementsContext.Provider>
    </LogementsContext.Provider>
  );
};

LogementsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LogementsContextProvider;
