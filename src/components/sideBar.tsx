import StudioLogo from "../assets/images/icone-logo.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/App.css";

export default function SideBar() {
    return (
        <>
            <motion.img
            src={StudioLogo}
            alt="Logo Estudio"
            className="w-24 h-24 rounded-full mt-4 p-1 mb-4"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          />
          <Link to={"/"}>
          <motion.div
            whileHover={{ outline: "3px solid #034078", backgroundColor:"ice", boxShadow: "5px 5px 5px 2px #034078"}}
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
          </Link>
          <Link to="/sales" >
          <motion.div
            whileHover={{ outline: "3px solid #034078", backgroundColor:"ice", boxShadow: "5px 5px 5px 2px #034078"}}
            whileTap={{ scale: 0.9 }}
            whileFocus={{ scale: 1.1 }}
            className="w-24 h-20 rounded-lg shadow-lg flex justify-center flex-col items-center cursor-pointer p-2"
          >
            <DotLottieReact
              src="https://lottie.host/172700c6-7994-4aea-a03b-412e7da9284c/hJNqnOVqFw.lottie"
              loop
              autoplay
            />
            <h1 className="text-l">Vendas</h1>
          </motion.div>
          </Link>
          <Link to="/calendar">
          <motion.div
            whileHover={{ outline: "3px solid #034078", backgroundColor:"ice", boxShadow: "5px 5px 5px 2px #034078"}}
            whileTap={{ scale: 0.9 }}
            whileFocus={{ scale: 1.1 }}
            className="w-24 h-20 rounded-lg shadow-lg flex justify-center flex-col items-center cursor-pointer p-2"
          >
            <DotLottieReact
              src="https://lottie.host/e0a671a9-2fa8-46a3-ab63-b92e7600392e/G2nEF58Qzb.lottie"
              loop
              autoplay
            />
            <h1 className="text-l">Agenda</h1>
          </motion.div>
          </Link>
          <Link to="/overview">
          <motion.div
            whileHover={{ outline: "3px solid #034078", backgroundColor:"ice", boxShadow: "5px 5px 5px 2px #034078"}}
            whileTap={{ scale: 0.9 }}
            whileFocus={{ scale: 1.1 }}
            className="w-24 h-20 rounded-lg shadow-lg flex justify-center flex-col items-center cursor-pointer p-2"
          >
            <DotLottieReact
              src="https://lottie.host/444786d1-0e16-4c62-acd4-81e8f10c419b/wn1imczxr5.lottie"
              loop
              autoplay
            />
            <h1 className="text-l font">Admin</h1>
          </motion.div>
          </Link>
        
        </>
    )
}