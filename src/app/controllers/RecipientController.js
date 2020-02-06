import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const recipients = await Recipient.findAll();

    return res.json(recipients);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      number: Yup.string().required(),
      zipcode: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const {
      name,
      address,
      city,
      state,
      number,
      complement,
      zipcode,
    } = await Recipient.create(req.body);

    return res.json({
      name,
      address,
      city,
      state,
      number,
      complement,
      zipcode,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      number: Yup.string().required(),
      zipcode: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient)
      return res.status(404).json({ error: 'Recipient not found' });

    const {
      name,
      address,
      city,
      state,
      number,
      complement,
      zipcode,
    } = await recipient.update(req.body);

    return res.json({
      name,
      address,
      city,
      state,
      number,
      complement,
      zipcode,
    });
  }

  async delete(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient)
      return res.status(404).json({ error: 'Recipient not found' });

    recipient.destroy();

    const recipients = await Recipient.findAll();

    return res.json(recipients);
  }
}

export default new RecipientController();
