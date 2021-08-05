import { FC, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import Api from '../../services/api';

import { AddStoreContext } from '../../contexts';

const StoreNotes: FC = () => {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const { setStatus } = useContext(AddStoreContext);

  const saveNotes = async () => {
    if (subject && description) {
      const res = await Api.post('/notes', { subject, description });

      if (res?.data) {
        toast.success('Nota guardada com sucesso!');

        setSubject('');
        setDescription('');
        setStatus(true);

        return;
      }

      toast.error('Erro inesperado ao cadastrar!');

      return;
    }

    toast.error('Preencha todos os campos!');
  };

  return (
    <div className="container-store-notes">
      <h2>Bloco de notas</h2>

      <div className="container-input">
        <input
          type="text"
          placeholder="Assunto"
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />

        <textarea
          placeholder="Texto"
          cols={30}
          rows={10}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>

      <button onClick={saveNotes}>CRIAR CONTA</button>
    </div>
  );
};

export default StoreNotes;
