/**
 * Email.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {
    from: {
      type: 'string'
    },
    to: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    text: {
      type: 'string'
    },
	firstname: {
	  type: 'string'
	},
	lastname: {
	  type: 'string'
	}
  }
};

