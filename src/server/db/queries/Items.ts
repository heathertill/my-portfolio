import { connection as knex } from '../index';

const allItems = () => knex('items').select('users.name', 'users.id', 'items.id', 'items.item', 'items._created').join('users', 'items.userid', '=', 'users.id').orderBy('_created', 'desc');
const oneItem = (id: number) => knex('items').select('users.name', 'users.id', 'items.id', 'items.item', 'items._created').join('users', 'items.userid', '=', 'users.id').orderBy('_created', 'desc').where('items.id', id);
const createItem = (itemObject: any) => knex('items').insert(itemObject);
const updateItem = (itemObject: any, id: number) => knex('items').where('id', id).update(itemObject);
const deleteItem = (id: number) => knex('items').where('id', id).del();

export default {
    allItems,
    oneItem,
    createItem,
    updateItem,
    deleteItem
}

