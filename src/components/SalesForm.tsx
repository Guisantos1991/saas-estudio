import "../styles/Form.css"
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

type FormValues = {
  tipoEnsaio: string;
  dataEnsaio: string;
  dataVenda: string;
  quantidadeFotos: number;
  fotosExtras: number;
  album: string;
  dataEntrega?: string;
  dataNascimento?: string;
  dataCadastro?: string;
  telefone?: string;
  atendenteResponsavel?: string;
  canalAtendimento?: string;
  observacoes?: string;
};


export default function SalesForm() {
    const { register, handleSubmit, reset } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
      console.log('Sales form data:', data);
      reset();
    };
    

    return (

        <div className="w-full h-full p-2">
            <form onSubmit={handleSubmit(onSubmit)}
      
      className="flex flex-col justify-center items-center w-full h-full gap-2 p-4"
    >
      {/* Linha 1: Nome Criança / Nome Responsável */}
      <div className="flex flex-row gap-2 w-full">
        <div className="flex flex-col gap-1 w-44">
          <label className="text-white font-sansation">Tipo Ensaio</label>
          <motion.select
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            {...register("tipoEnsaio", { required: true })}
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-44"
          >
            <option value="">Selecione o ensaio</option>
            <option value="Acompanhamento Mensal">Acomp. Mensal</option>
            <option value="Acompanhamento Bimestral">Acomp. Bimestral</option>
            <option value="Acompanhamento Trimestral">Acomp. Trimestral</option>
            <option value="Aniversario">Aniversário</option>
            <option value="Batizado">Batizado</option>
            <option value="Cake Smash">Cake Smash</option>
            <option value="Cake Smash Familia">Cake Smash Família</option>
            <option value="Chá Revelação">Chá Revelação</option>
            <option value="Casamento">Casamento</option>
            <option value="Corporativo">Corporativo</option>
            <option value="Dia das Crianças">Dia das Crianças</option>
            <option value="Dia das Mães">Dia das Mães</option>
            <option value="Dia dos Pais">Dia dos Pais</option>
            <option value="Ensaio Junino">Ensaio Junino</option>
            <option value="Ensaio Natal">Ensaio Natal</option>
            <option value="Ensaio Pascoa">Ensaio Pascoa</option>
            <option value="Mini Ensaio Infantil">Mini Ensaio Infantil</option>
            <option value="New Born">New Born</option>
            </motion.select>
        </div>
        <div className="flex flex-col gap-1 w-48">
          <label className="text-white font-sansation">Data Ensaio:</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="date"
            {...register("dataEnsaio", { required: true })}
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-38"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-white font-sansation">Data Venda:</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="date"
            {...register("dataVenda", { required: true })}
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-38"
          />
        </div>
      </div>

      <div className="flex flex-row gap-2 w-full">
        <div className="flex flex-col gap-1 w-44">
          <label className="text-white font-sansation">Quantidade Fotos:</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="number"
            {...register("quantidadeFotos", { required: true, valueAsNumber: true })}
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-38"
          />
        </div>
        <div className="flex flex-col gap-1 w-44">
          <label className="text-white font-sansation">Fotos Extras:</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="number"
            {...register("fotosExtras", { valueAsNumber: true })}
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-38"
          />
        </div>
        <div className="flex flex-col gap-1 w-44">
          <label className="text-white font-sansation">Album</label>
          <motion.select
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            {...register("album", { required: true })}
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-full"
          >
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="não">Não</option>

          </motion.select>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label className="text-white font-sansation">Data Entrega:</label>
          <motion.input
            whileFocus={{ boxShadow: "0px 0px 10px 1px white" }}
            type="date"
            {...register("dataEntrega")}
            className="text-white border-2 border-white rounded-md p-2 outline-0 font-light w-38"
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
            
        </div>
    )

}