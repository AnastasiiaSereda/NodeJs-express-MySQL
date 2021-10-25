const path = require("path");
const { v4: uuidv4 } = require("uuid");
const util = require("util");
const fs = require("fs");
const writeFilePromisified = util.promisify(fs.writeFile);
const readFilePromise = util.promisify(fs.readFile);
const valuesPath = path.join("./db", "values.json");

async function getListOfValues() {
  const data = await readFilePromise(valuesPath);
  return JSON.parse(data);
}

async function getValueById(valueId) {
  const data = await getListOfValues();
  return data.filter(({ id }) => id.toString() === valueId);
}


async function removeValue(valueId) {
  try {
    const data = await getListOfValues();
    const infData = data.filter(({ id }) => id.toString() === valueId);
    const newArr = data.filter(({ id }) => id.toString() !== valueId);
    await writeFilePromisified(valuesPath, JSON.stringify(newArr));
    if (infData.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
}

async function addValue(title, wavelength, frequency) {
  try {
    const data = await getListOfValues();
    const newObj = {
      id: uuidv4(),
      title,
      wavelength,
      frequency,
    };
    const arrNew = [newObj, ...data];
    await writeFilePromisified(valuesPath, JSON.stringify(arrNew));
    return newObj;
  } catch (err) {
    console.log(err);
  }
}
async function updateValue(id, body) {
  try {
    function isEmpty(obj) {
      for (let key in obj) {
        return true;
      }
      return false;
    }
    if (isEmpty(body) === false) {
      return { inf: false, message: "missing fields" };
    } else {
      const data = await getListOfValues();
      const idx = data.findIndex((el) => {
        return el.id.toString() === id;
      });
      if (idx === -1) {
        return { inf: false, message: "Not found" };
      } else {
        let foundObj = data[idx];
        function setData(newData, oldData) {
          if (newData === undefined || newData.trim() === "") {
            return oldData;
          } else {
            return newData;
          }
        }

        const setObj = {
          id: foundObj.id,
          title: setData(body.title, foundObj.title),
          wavelength: setData(body.wavelength, foundObj.wavelength),
          frequency: setData(body.frequency, foundObj.frequency),
        };
        const newArr = [...data.slice(0, idx), setObj, ...data.slice(idx + 1)];

        await writeFilePromisified(valuesPath, JSON.stringify(newArr));
        return { inf: true, obj: setObj };
      }
    }
  } catch (err) {
    console.log(err);
  }
}
exports.getListOfValues = getListOfValues;
exports.getValueById = getValueById;
exports.removeValue = removeValue;
exports.addValue = addValue;
exports.updateValue = updateValue;

