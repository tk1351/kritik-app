import * as brcypt from 'bcrypt';
import { prisma } from '..';
import { fixture } from './fixture';

export const user = () => {
  const response = [];
  fixture.forEach(async (data) => {
    const hashedPassword = await brcypt.hash(data.password, 10);
    const row = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
    response.push(row);
  });
  return response;
};
