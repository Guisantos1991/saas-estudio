import { motion } from "framer-motion";
import "../styles/App.css";
import "../styles/fonts.css";
import Form from "../components/Form";


export default function SetClient() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-row justify-center items-center h-full w-full p-0 cursor-default"
      >
        
        <div className="flex flex-col justify-center items-center flex-10 h-full bg-gray-700 p-2">
          <div className="flex flex-col justify-center items-start border-b-8 p-8 bg-gray-800 rounded-lg shadow-lg w-full h-full opacity-80">
            <h1 className="font-sansation text-3xl text-white">Cadastro Cliente</h1>
            <Form/>
          </div>
        </div>
      </motion.div>
    </>
  );
}
