import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'ShortUrlsController.index')
    Route.post('/', 'ShortUrlsController.store')
    Route.get('/:code', 'ShortUrlsController.show')
    Route.patch('/:code', 'ShortUrlsController.update')
    Route.delete('/:code', 'ShortUrlsController.delete')

}).prefix('/shorturl')