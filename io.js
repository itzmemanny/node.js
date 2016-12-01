module.exports = function(server){
  var io = require('socket.id')(server);

  return io;
}
