export default socket => store => next => action => {
  console.log('in middleware', action);
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  // We could also build in logic to not call next, if we decide to halt action (and hence
  // would never go the reducer or the store).
  return next(action);
}