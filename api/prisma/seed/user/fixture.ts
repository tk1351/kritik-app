import { Prisma } from '@prisma/client';

export const fixture: Prisma.UserCreateInput[] = [
  { name: 'testuser', email: 'testuser@example.com', password: 'pass' },
  { name: 'tom', email: 'tom@example.com', password: 'pass' },
];
