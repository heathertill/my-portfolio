import config from '../config';
import * as knex from 'knex';

import Users from './queries/Users';
import Items from './queries/Items';
import Tokens from './queries/Tokens';

export const connection = knex(config.knex);

export default {
    Users,
    Items,
    Tokens
}