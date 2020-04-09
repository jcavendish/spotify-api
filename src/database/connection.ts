import knex from "knex";
const configuration = require("../../knexfile");

export default knex(configuration.development);
