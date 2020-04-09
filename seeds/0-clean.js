
exports.seed = (knex, Promise) => {
  const empty = table =>
    () => knex(table).del()

  return empty('articles')()
  // Chain calls to empty in
  // order as required, e.g.:
  // .then(empty('profiles'))
}
