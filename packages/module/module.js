const gretting = (name) => {
  const saludate = `Hello, ${name}!!`;
  return saludate;
}

const farawell = (name) => {
  const bye = `Good bye, ${name}!!`;
  return bye;
}

module.exports = {
  gretting,
  farawell,
};

