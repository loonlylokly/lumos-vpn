import { EMAIL_MAX, MIN, VALIDATE_MESSAGES } from '@/shared/lib/constants/validation';
import { z } from 'zod';

const { required, email, maxText } = VALIDATE_MESSAGES;
export const SUserEmail = z
  .string()
  .min(MIN, { message: required.msg })
  .max(EMAIL_MAX, { message: maxText.msg(EMAIL_MAX) })
  .email({ message: email.msg });

export const AuthSchema = z.object({
  email: SUserEmail
});
