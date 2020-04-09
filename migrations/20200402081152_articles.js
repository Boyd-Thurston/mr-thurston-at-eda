
exports.up = knex => {
    return knex.schema.createTable('articles', table => {
        table.increments('id').primary()
        table.string('banner_url')
        table.string('title')
        table.string('subtitle')
        table.string('type')
        table.text('content', 20000)
    })
}

exports.down = knex => {
  return knex.schema.dropTable('articles')
}
