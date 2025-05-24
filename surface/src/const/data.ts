import { faker } from '@faker-js/faker';
import { DateTime } from 'luxon';

let datetime = DateTime.local();
datetime = datetime.minus({ day: 14 })
const exampleData: any[] = [];
for (let i = 0; i < 14; ++i)
{
  exampleData.push({
    value: faker.number.int({ min: 100, max: 2300 }),
    createdAt: datetime.toISO()
  });

  datetime = datetime.plus({ day: 1 });
}

export { exampleData };
