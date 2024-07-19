// /* eslint-disable react/prop-types */
// import axios from 'axios';
// import { createContext, useContext } from 'react';

// const baseURL = import.meta.env.VITE_BACKEND_HOSTNAME;

// const BackendContext = createContext();
// const useBackend = () => useContext(BackendContext);

// const BackendProvider = ({ children }) => {

//   const backend = axios.create({
//     baseURL,
//     withCredentials: false,
//   });

//   return <BackendContext.Provider value={{ backend }}>{children}</BackendContext.Provider>;
// };

// export { BackendProvider, useBackend };
