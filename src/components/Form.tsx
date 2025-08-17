// src/components/Form.tsx
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import "../styles/Form.css";
import { saveClient, type ClientData } from "../api/clientService";



type FormData = ClientData & {
  telefone: string;
  atendenteResponsavel: string;
  email: string;
  canalAtendimento: string;
  observacoes?: string;
};

export default function Form() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const newId = await saveClient(data);
      alert(`✅ Cliente “${data.nomeCriança}” salvo com ID ${newId}`);
      reset();
    } catch (err) {
      console.error("❌ Erro ao salvar cliente:", err);
      alert("❌ Falha ao salvar cliente. Veja o console.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center w-full h-full gap-6"
    >
      {/* Linha 1: Nome Criança / Nome Responsável */}
      <div className="flex flex-row gap-12 w-full">
        <div className="flex flex-col gap-1 w-full">
          <label className="text-white font-sansation">Nome Criança</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="text"
            {...register("nomeCriança", { required: true })}
            placeholder="Digite o nome da criança"
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-full"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-white font-sansation">Nome Responsável</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="text"
            {...register("nomeResponsável", { required: true })}
            placeholder="Digite o nome do responsável"
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-full"
          />
        </div>
      </div>

      <div className="flex flex-row gap-12 w-full">
        <div className="flex flex-col gap-1 w-1/2">
          <label className="text-white font-sansation">E-mail Responsável</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="email"
            {...register("email", { required: true })}
            placeholder="Digite o nome da criança"
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-full"
          />
        </div>
      </div>

      {/* Linha 2: Datas e Telefone */}
      <div className="flex flex-row gap-12 w-full">
        <div className="flex flex-col gap-1">
          <label className="text-white font-sansation">Data Nascimento</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="date"
            {...register("dataNascimento")}
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-80"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white font-sansation">Data Cadastro</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="date"
            {...register("dataCadastro")}
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-80"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white font-sansation">Telefone</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="tel"
            {...register("telefone")}
            placeholder="(xx) xxxxx-xxxx"
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-80"
          />
        </div>
      </div>

      {/* Linha 3: Atendente / Canal de Atendimento */}
      <div className="flex flex-row gap-12 w-full">
        <div className="flex flex-col gap-1">
          <label className="text-white font-sansation">Atendente Responsável</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="text"
            {...register("atendenteResponsavel")}
            placeholder="Funcionário responsável"
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-80"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white font-sansation">Canal de Atendimento</label>
          <motion.select
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            {...register("canalAtendimento")}
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-80 bg-transparent"
          >
            <option value="">Selecione</option>
            <option value="instagram">Instagram</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="outros">Outros</option>
          </motion.select>
        </div>
      </div>

      {/* Observações */}
      <div className="flex flex-col gap-1 w-full">
        <label className="text-white font-sansation">Observações</label>
        <motion.textarea
          whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
          {...register("observacoes")}
          placeholder="Adicione aqui uma observação"
          className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-full h-36"
        />
      </div>

      {/* Botão de Submit */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px 1px white", cursor: "pointer" }}
        whileTap={{ scale: 0.9 }}
        className="w-60 h-12 bg-gray-500 rounded-md text-white font-sansation"
      >
        Salvar Cliente
      </motion.button>
    </form>
  );
}