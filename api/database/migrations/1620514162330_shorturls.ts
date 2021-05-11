import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Shorturls extends BaseSchema {
  protected tableName = 'short_urls'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('shortcode').unique()
      table.string('dest_url')
      table.boolean('deletable').defaultTo('true')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
