import { motion } from "framer-motion";
import "../styles/App.css";
import "../styles/fonts.css";
import StudioLogo from "../assets/images/icone-logo.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Form from "../components/Form";
import { Link } from "react-router-dom";

export default function SetClient() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-row justify-center items-center h-full w-full p-0 cursor-default"
      >
        <div className="flex flex-col justify-start items-center flex-1 h-full bg-white bg-opacity-80 text-black font-sansation gap-4">
          <motion.img
            src={StudioLogo}
            alt="Logo Estudio"
            className="w-24 h-24 rounded-full mt-4 p-1 mb-4"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity, // 🔁 loop infinito
              repeatType: "loop", // padrão de repetição
              duration: 30, // segundos para uma volta completa
              ease: "linear", // giro constante
            }}
          />
          <motion.div
            whileHover={{ outline: "2px solid white", backgroundColor: "gray", boxShadow: "0px 0px 10px 1px white"}}
            whileTap={{ scale: 0.9 }}
            whileFocus={{ scale: 1.1 }}
            className="w-24 h-20 rounded-lg shadow-lg flex justify-center flex-col items-center cursor-pointer p-2"
          >
            <DotLottieReact
              src="https://lottie.host/5d52bb03-fa16-4b24-8744-750b325710f9/4PBgtQU9M0.lottie"
              loop
              autoplay
            />
            <h1 className="text-l">Cadastro</h1>
          </motion.div>
          <Link to="/vendas" >
          <motion.div
            whileHover={{ outline: "2px solid white", backgroundColor: "#333", boxShadow: "0px 0px 10px 1px white"}}
            whileTap={{ scale: 0.9 }}
            whileFocus={{ scale: 1.1 }}
            className="w-24 h-20 bg-gray-200/40 rounded-lg shadow-lg flex justify-center flex-col items-center cursor-pointer p-2"
          >
            <DotLottieReact
              src="https://lottie.host/172700c6-7994-4aea-a03b-412e7da9284c/hJNqnOVqFw.lottie"
              loop
              autoplay
            />
            <h1 className="text-l">Vendas</h1>
          </motion.div>
          </Link>
          <motion.div
            whileHover={{ outline: "2px solid white", backgroundColor: "#333", boxShadow: "0px 0px 10px 1px white"}}
            whileTap={{ scale: 0.9 }}
            whileFocus={{ scale: 1.1 }}
            className="w-24 h-20 bg-gray-200/40 rounded-lg shadow-lg flex justify-center flex-col items-center cursor-pointer p-2"
          >
            <DotLottieReact
              src="https://lottie.host/e0a671a9-2fa8-46a3-ab63-b92e7600392e/G2nEF58Qzb.lottie"
              loop
              autoplay
            />
            <h1 className="text-l">Agenda</h1>
          </motion.div>
          <motion.div
            whileHover={{ outline: "2px solid white", backgroundColor: "#333", boxShadow: "0px 0px 10px 1px white"}}
            whileTap={{ scale: 0.9 }}
            whileFocus={{ scale: 1.1 }}
            className="w-24 h-20 bg-gray-200/40 rounded-lg shadow-lg flex justify-center flex-col items-center cursor-pointer p-2"
          >
            <DotLottieReact
              src="https://lottie.host/444786d1-0e16-4c62-acd4-81e8f10c419b/wn1imczxr5.lottie"
              loop
              autoplay
            />
            <h1 className="text-l font">Admin</h1>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center flex-10 h-full bg-black p-2">
          <div className="flex flex-col justify-center items-start border-b-8 bg-gray-800 p-6  rounded-lg shadow-lg w-full h-full opacity-80">
            <h1 className="font-sansation text-3xl text-white">Cadastro Cliente</h1>
            <Form/>
          </div>
        </div>
      </motion.div>
    </>
  );
}
