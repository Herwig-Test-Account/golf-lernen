import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'fd57e7847aa60fb01b2fda9f6b61a0b07085e8fe', queries,  });
export default client;
  