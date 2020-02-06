import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        state: Sequelize.STRING,
        zipcode: Sequelize.STRING,
        city: Sequelize.STRING,
        complement: Sequelize.STRING,
        number: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Recipient;
