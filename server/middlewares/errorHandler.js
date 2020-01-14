module.exports = (err, req, res, next) => {
  let status = 500;
  console.log(err)
  let message = 'Internal Server Error';
  if(err.name === 'MongoError') {
    status = 400;
    message = 'Email already used';
  } else if(err.name === 'ValidationError') {
    status = 400;
    message = {
      type: 'Validation Error',
      messages: [] 
    };
    for(key in err.errors) {
      message.messages.push(err.errors[key].message);
    }
  } else if(err.name === 'Bad Request') {
    status = err.status;
    message = err.message;
  }
  res.status(status).json({message});
}