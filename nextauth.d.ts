import { Session, User } from 'next-auth';
export type Session = {
  user: User;
};
