'use client';
import { useRef, useState } from 'react';
import styles from './ChooseName.module.css';
import { ChooseNameForm } from './ui/chooseNameForm/ChooseNameForm';
import DialogEmail from './ui/dialogEmail/DialogEmail';

export function ChooseName() {
  const [name, setName] = useState('');
  const refDialog = useRef<HTMLDialogElement>(null);

  return (
    <section className={styles.choose_name}>
      <ChooseNameForm setName={setName} openDialog={() => refDialog.current?.showModal()} />
      <DialogEmail name={name} refDialog={refDialog} />
    </section>
  );
}
