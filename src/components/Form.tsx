import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import "../styles/Form.css";

export default function Form() {
  const { register } = useForm(); //

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-12 p-8">
      <div className="flex flex-row gap-12 justify-center items-center w-full">
        <div className="flex flex-col justify-center items-start gap-1 w-full">
          <label className="text-white font-sansation">Nome Criança</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="text"
            {...register("nomeCriança")}
            placeholder="Digite o nome da criança"
            className="text-white font-sansation border-2 border-white rounded-md p-2 outline-0 font-light w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-1 w-full">
          <label className="text-white font-sansation">Nome Responsável</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="text"
            {...register("nomeResponsável")}
            placeholder="Digite o nome do responsável"
            className="text-white font-sansation border-2 border-white rounded-md p-2 outline-0 font-light w-full"
          />
        </div>
      </div>

      <div className="flex flex-row gap-12 justify-start items-center w-full">
        <div className="flex flex-col justify-center items-start gap-1">
          <label className="text-white font-sansation">Data Nascimento</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="date"
            {...register("dataNascimento")}
            className="text-white font-sansation w-80 border-2 border-white rounded-md p-2 outline-0 font-light"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <label className="text-white font-sansation">Data Cadastro</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="date"
            {...register("dataCadastro")}
            className="text-white font-sansation w-80 border-2 border-white rounded-md p-2 outline-0 font-light"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <label className="text-white font-sansation">Telefone</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="tel"
            {...register("telefone")}
            placeholder="(xx) xxxxx-xxxx"
            className="text-white font-sansation w-80 border-2 border-white rounded-md p-2 outline-0 font-light"
          />
        </div>
      </div>

      <div className="flex flex-row gap-12 justify-start items-center w-full">
        <div className="flex flex-col justify-center items-start gap-1 ">
          <label className="text-white font-sansation">Atendimento</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="text"
            {...register("atendenteResponsavel")}
            placeholder="Funcionário resposável pelo atendimento"
            className="text-white font-sansation border-2 border-white rounded-md p-2 outline-0 font-light w-80"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-1 ">
          <label className="text-white font-sansation">Recebido por:</label>
          <motion.select
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            {...register("canalAtendimento")}
            className="text-white font-sansation border-2 border-white rounded-md p-2 outline-0 font-light w-80"
          >
            <option value="">Selecione</option>
            <option value="1">Instagram</option>
            <option value="2">WhatsApp</option>
            <option value="3">Outros</option>
          </motion.select>
        </div>
      </div>

      <div className="flex flex-row gap-12 justify-center items-center w-full">
        
        <div className="flex flex-col justify-center items-start gap-1 w-full">
          <label className="text-white font-sansation">Observações</label>
          <motion.textarea
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            {...register("nomeResponsável")}
            placeholder="Adicione aqui uma observação"
            className="text-white font-sansation border-2 border-white rounded-md p-2 outline-0 font-light w-180 h-36"
          />
        </div>
      </div>
      <motion.button whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px 1px white", cursor:"pointer" }}
      whileTap={{ scale: 0.9 }}
      className="w-60 h-12 bg-gray-500 rounded-md text-white font-sansation"
      >Salvar Cliente
      </motion.button>
    </div>
  );
}

//
