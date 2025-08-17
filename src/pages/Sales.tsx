import { motion } from "framer-motion";
import "../styles/App.css";
import "../styles/fonts.css";
import SideBar from "../components/SideBar";
import SalesForm from "../components/SalesForm"


export default function Sales() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-row justify-center items-center h-full w-full cursor-default"
      >
        <div className="flex flex-col justify-start items-center flex-1 h-full bg-white bg-opacity-80 text-black font-sansation gap-4">
          <SideBar/>
        </div>
        <div className="flex flex-col justify-center items-stretch flex-10  h-full w-full bg-gray-700 p-6">
          <h1 className="font-sansation text-3xl text-white">Nova Venda</h1>
          <div className="flex flex-col justify-center items-start border-b-8 p-2 bg-gray-800 rounded-lg shadow-lg w-full h-full opacity-80">
          
            <SalesForm/>
          </div>
        </div>
      </motion.div>
    </>
  );
}