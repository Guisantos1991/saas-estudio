import { motion } from "framer-motion";
import "../styles/App.css";
import StudioLogo from "../assets/images/icone-logo.png";


export default function Sales() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full p-0 cursor-default">
      <div className="flex flex-col justify-center items-center flex-1 h-full bg-gray-800 bg-opacity-80 text-white     font-sansation gap-4">
        <motion.img
          src={StudioLogo}
          alt="Logo Estudio"
          className="w-24 h-24 rounded-full bg-white mt-4 p-1 mb-4"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity, // 🔁 loop infinito
            repeatType: "loop", // padrão de repetição
            duration: 30, // segundos para uma volta completa
            ease: "linear", // giro constante
          }}
        />
        <motion.div
          whileHover={{ outline: "2px solid white", backgroundColor: "#333", boxShadow: "0px 0px 10px 1px white"}}
          whileTap={{ scale: 0.9 }}
          whileFocus={{ scale: 1.1 }}/>
          className="w-24 h-20 bg-gray-200/40 rounded-lg shadow-lg flex justify-center flex-col items-center cursor-pointer p-2"
          <h1 className="text-l">Vendas</h1>

          <motion.div>  
            <h1 className="text-3xl font-sansation font-white">Hello World</h1>
          </motion.div>
          </div>
          </div>
  );
}