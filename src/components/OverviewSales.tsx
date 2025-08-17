import { motion } from "framer-motion";

export default function OverviewSales() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Resumo de Vendas</h2>
      
      <div className="space-y-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-blue-500/20 rounded-lg p-4"
        >
          <h3 className="text-lg font-semibold">Total do Dia</h3>
          <p className="text-2xl font-bold">R$ 0,00</p>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-green-500/20 rounded-lg p-4"
        >
          <h3 className="text-lg font-semibold">Total do Mês</h3>
          <p className="text-2xl font-bold">R$ 0,00</p>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-purple-500/20 rounded-lg p-4"
        >
          <h3 className="text-lg font-semibold">Vendas Realizadas</h3>
          <p className="text-2xl font-bold">0</p>
        </motion.div>
      </div>
    </div>
  );
}