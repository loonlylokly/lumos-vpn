'use state';
import { AuthFields } from '@/shared/lib/types/common';
import { AuthSchema } from '@/shared/lib/types/schemas/common';
import { Button } from '@/shared/ui/button/Button';
import { CloseIcon } from '@/shared/ui/icons/CloseIcon';
import { LockIcon } from '@/shared/ui/icons/LockIcon';
import { InputText } from '@/shared/ui/input/inputText/InputText';
import { Typography } from '@/shared/ui/typography/Typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@radix-ui/react-form';
import { RefObject, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './DialogEmail.module.css';

type TProps = {
  name: string;
  refDialog: RefObject<HTMLDialogElement>;
};

export default function DialogEmail({ name, refDialog }: TProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setError
  } = useForm<AuthFields>({
    mode: 'onSubmit',
    resolver: zodResolver(AuthSchema)
  });

  const onSubmit: SubmitHandler<AuthFields> = async (data) => {
    try {
      console.log(data.email);
      refDialog.current?.close();
    } catch (error) {
      setError('root', {
        message: 'Error'
      });
    }
  };

  const handleClose = () => {
    refDialog.current?.close();
  };

  if (!isClient) {
    return <></>;
  }

  return (
    <>
      {createPortal(
        <dialog
          className={styles.dialog}
          id='emailForm'
          aria-label='Enter your email to get VPN'
          ref={refDialog}
        >
          <div className={styles.close_wrap}>
            <Button className={styles.close} onClick={handleClose}>
              <CloseIcon />
            </Button>
          </div>
          <div className={styles.content}>
            <Typography className={styles.title} variant='title_1'>
              Your Name
            </Typography>
            <Typography className={styles.name} variant='body'>
              {name}
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputText
                {...register('email')}
                type='text'
                message={errors.email?.message}
                placeholder='Enter your email'
              />
              <div className={styles.footnote}>
                <LockIcon />
                <Typography variant='footnote'>
                  Your information is 100% secure. We don’t share your personal information.
                </Typography>
              </div>
              <Button className={styles.submit}>
                <Typography variant='title_2' asChild>
                  <>Continue</>
                </Typography>
              </Button>
            </Form>
          </div>
        </dialog>,
        window.document.body
      )}
    </>
  );
}
