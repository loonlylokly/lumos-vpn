import { z } from 'zod';
import { AuthSchema } from './schemas/common';

export type Advantage = {
  keyWord: string;
  title: string;
  description: string;
};

export type AuthFields = z.infer<typeof AuthSchema>;
