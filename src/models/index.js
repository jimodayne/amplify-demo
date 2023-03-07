// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Machine, Factory } = initSchema(schema);

export {
  Machine,
  Factory
};