var fs = require("fs");
const { v4 } = require("uuid");

//initializing database......

async function createBox(data) {
  var data1 = [];
  var json = JSON.stringify(data1);

  const callback = (status) => {};

  if (data.length > 0) {
    fs.writeFile(`./node_modules/tulip-db/${data}.json`, json, callback);
    return {
      sucess: true,
    };
  } else {
    return {
      sucess: false,
    };
  }
}

// add single data in json file.......
async function addOne(data) {
  var genuid = await v4();
  if (data.data[0] == undefined && data.table != undefined) {
    var dataall = require(`./${data.table}.json`);

    const callback = (status) => {};

    var dataallhere = dataall;
    dataallhere.push({
      id: genuid,
      tulip: data.data,
    });

    var json = JSON.stringify(dataallhere);

    fs.writeFile(`./node_modules/tulip-db/${data.table}.json`, json, callback);

    return {
      sucess: true,
      data: data.data,
    };
  } else {
    return {
      sucess: false,
    };
  }
}

//get aall data from json file................

async function getAll(data) {
  var dataall = require(`./${data}.json`);

  return {
    sucess: true,
    data: dataall,
  };
}

//delete specific data ..............
async function deleteOne(data) {
  if (data.table != undefined && data.id != undefined) {
    var dataall = require(`./${data.table}.json`);

    var dd = await dataall.find((item) => item.id === data.id);

    const filteredItems = await dataall.filter(function (item) {
      return item !== dd;
    });

    var json = JSON.stringify(filteredItems);

    const callback = (status) => {};

    fs.writeFile(`./node_modules/tulip-db/${data.table}.json`, json, callback);
    return {
      sucess: true,
    };
    // console.log(dataall)
  }
}

// find data from database.....
async function findAll(data) {
  if (data.table != undefined) {
    var dataall = require(`./${data.table}.json`);
    var key = data.key;
    var value = data.value;

    const filteredItems = await dataall.filter(function (item) {
      if (item.tulip[key] == value) {
        return item;
      }
    });
    return filteredItems;
  }
}

async function clearBox(data) {
  if (data.table != undefined) {
    var dataal = [];
    var json = JSON.stringify(dataal);

    const callback = (status) => {};

    fs.writeFile(`./node_modules/tulip-db/${data.table}.json`, json, callback);

    return {
      sucess: true,
      msg: `table ${data.table} is cleared`,
    };
  }
}

module.exports.addOne = addOne;
module.exports.getAll = getAll;
module.exports.createBox = createBox;
module.exports.deleteOne = deleteOne;
module.exports.findAll = findAll;
module.exports.clearBox = clearBox;
