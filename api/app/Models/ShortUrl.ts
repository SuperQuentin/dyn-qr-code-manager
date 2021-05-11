import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ShortUrl extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public shortcode: string
  
  @column()
  public dest_url: string

  @column()
  public deletable: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
