import { 
  getFirestore, 
  doc, 
  runTransaction 
} from "firebase/firestore";
import app from "../firebase";

export type ClientData = {
  nomeCriança: string;
  nomeResponsável: string;
  dataNascimento: string;
  dataCadastro: string;
  canalAtendimento: string;
  observação?: string;
};

const db = getFirestore(app);
const COUNTER_DOC = doc(db, "counters", "clientesCounter");
const COLLECTION = "clientes";

export async function saveClient(data: ClientData): Promise<string> {
  // Transaction encapsula atomicidade do ID + insert
  const newId = await runTransaction<number>(db, async (tx) => {
    const snap = await tx.get(COUNTER_DOC);
    const lastId = snap.exists() ? (snap.data().lastId as number) : 202500;
    const nextId = lastId + 1;

    tx.set(
      COUNTER_DOC,
      { lastId: nextId },
      { merge: true }
    );

    const clientRef = doc(db, COLLECTION, nextId.toString());
    tx.set(clientRef, { ...data, idResponsavel: nextId.toString() });
    return nextId;
  });

  return newId.toString();
}