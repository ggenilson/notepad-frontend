/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import Api from '../../services/api';
import { NotesType } from './types';

import { AddStoreContext } from '../../contexts/';
import { takeNewDesc } from './utils';

const GetNotes: FC = () => {
  const [notes, setNotes] = useState<NotesType[]>([]);
  const { status, setStatus } = useContext(AddStoreContext);

  const getNotes = async () => {
    const res = await Api.get('/notes');
    const { data } = res;

    setNotes(data);
  };

  async function onDeleteItem(id: string) {
    const res = await Api.delete(`/notes/${id}`);

    if (res?.data) {
      toast.success('Nota eliminada com sucesso!');
      setStatus(true);

      return;
    }

    toast.error('Erro ao eliminar!');
  }

  useEffect(() => {
    getNotes();
    setStatus(false);
  }, [status]);

  return (
    <div className="container-get-notes">
      <h3>Suas notas</h3>

      <div className="all-notes">
        {notes.map(value => (
          <div key={value.id} className="note-item">
            <button className="delete" onClick={() => onDeleteItem(value.id)}>
              <span>x</span>
            </button>
            <span className="subject">{value.subject}</span>
            <span className="description">
              {takeNewDesc(value.description)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetNotes;
