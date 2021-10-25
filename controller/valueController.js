const Values = require("./../model/valueModel");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const schema = Joi.object({
  title: Joi.string().min(2).max(30).required(),
  wavelength: Joi.number().min(1).max(10).required(),
  frequency: Joi.number().min(1).max(10).required(),
});

const schemaId = Joi.object({
  id: Joi.objectId(),
});


const getValue = async (req, res) => {
  try {
    const data = await Values.find();
    res.json(data);
  } catch (e) {
    console.log(e);
  }
};

const getIdValue = async (req, res) => {
  try {
    const data = await Values.findById(req.params.valueId);
    if (data !== null) {
      res.json(data);
    }
  } catch (e) {
    res.status(404).send({ message: "Not found" });
  }
};

const postValue = async (req, res) => {
  try {
    const { title, wavelength, frequency } = req.body;
    await schema.validateAsync(req.body);

    const value = new Values({
      title,
      wavelength,
      frequency,
    });

    const data = await value.save();
    res.status(201).send({ data });
  } catch (e) {
    res.status(400).send({ message: "missing required name field" });
  }
};

const deleteValue = async (req, res) => {
  try {
    const id = await schemaId.validateAsync({ id: req.params.valueId });
    const data = await Values.findByIdAndDelete(id.id);
    console.log(id);
    if (data !== null) {
      res.status(200).send({ message: "value deleted" });
    }
  } catch (e) {
    console.log(e);
    res.status(404).send({ message: "Not found" });
  }
};
const patchValue = async (req, res) => {
  try {
    const dataValidate = await schema.validateAsync(req.body);

    const data = await Values.findByIdAndUpdate(
      req.params.valueId,
      dataValidate
    );

    res.status(200).send({ message: data });
  } catch (e) {
    res.status(400).send({ message: "missing fields" });
  }
};
exports.getValue = getValue;
exports.getIdValue = getIdValue;
exports.postValue = postValue;
exports.patchValue = patchValue;
exports.deleteValue = deleteValue;