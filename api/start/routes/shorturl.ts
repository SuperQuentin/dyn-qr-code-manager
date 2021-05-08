import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get('/', 'ShortUrlsController.index')
    Route.get('/new', 'ShortUrlsController.create')
    Route.post('/', 'ShortUrlsController.store')
    Route.get('/:code', 'ShortUrlsController.show')
    Route.get('/:code/edit', 'ShortUrlsController.edit')
    Route.patch('/:code', 'ShortUrlsController.update')
    Route.delete('/:code', 'ShortUrlsController.delete')

}).prefix('/shorturl')