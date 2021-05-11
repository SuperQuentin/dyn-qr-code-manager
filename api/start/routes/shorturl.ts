import Route from '@ioc:Adonis/Core/Route'

Route.resource('shorturl','ShortUrlsController').apiOnly()