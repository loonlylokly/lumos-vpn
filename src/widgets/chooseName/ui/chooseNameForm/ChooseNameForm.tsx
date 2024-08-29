'use client';
import { BlueText } from '@/entities/blueText/BlueText';
import { API_ROUTES } from '@/shared/lib/constants/common';
import { Button } from '@/shared/ui/button/Button';
import { RadioButton } from '@/shared/ui/input/RadioButton/RadioButton';
import { Typography } from '@/shared/ui/typography/Typography';
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react';
import styles from './ChooseNameForm.module.css';

type TProps = {
  setName: Dispatch<SetStateAction<string>>;
  openDialog: () => void;
};

export function ChooseNameForm({ setName, openDialog }: TProps) {
  const [names, setNames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        const signal = controller.signal;
        const res = await fetch(`${API_ROUTES.names}/?results=10`, {
          signal: controller.signal
        });

        const names = await res.json();
        if (!signal.aborted) {
          setNames(names.results.map((item: any) => `${item.name.first} ${item.name.last}`));
          setIsLoading(false);
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          setNames(['Anonymous', 'Anonymous']);
          setError((err as Error).message);
        }
      }
    };
    fetchUsers();

    return () => controller.abort();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    setName(Array.from(data.entries())[0][1] as string);
    openDialog();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset className={styles.fieldset}>
        <Typography variant='title_1' asChild>
          <legend className={styles.legend}>
            Choose <BlueText>your name</BlueText>
          </legend>
        </Typography>
        {names.map((name, index) => (
          <Typography key={name} variant='subtitle' asChild>
            <label className={styles.label}>
              <RadioButton name='name' value={name} defaultChecked={index === 1} required />
              {name}
            </label>
          </Typography>
        ))}
      </fieldset>
      <Button className={styles.submit} type='submit'>
        <Typography variant='title_2' asChild>
          <>Get VPN</>
        </Typography>
      </Button>
    </form>
  );
}
