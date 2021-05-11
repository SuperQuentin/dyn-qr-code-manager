// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from '@ioc:Adonis/Core/Validator'
import ShortUrl from 'App/Models/ShortUrl'

export default class ShortUrlsController {
    public async index(ctx: HttpContextContract) {
        const shorturls = await ShortUrl.all()
        console.log(shorturls)
        return {
            shorturls: shorturls ?? 'Nothing'
        }
    }
    public async show(ctx: HttpContextContract) {
        let code = await ctx.request.params().id
        let shorturl = await ShortUrl.findBy('shortcode', code)

        return {
            shorturl: shorturl ?? 'Nothing'
        }
    }
    public async store(ctx: HttpContextContract) {
        const newShortUrlSchema = schema.create({
            shortcode: schema.string(),
            dest_url: schema.string.optional(),
            deletable: schema.boolean.optional()
        })

        try {
            const payload = await ctx.request.validate({
                schema: newShortUrlSchema
            })
            return ShortUrl.create({
                shortcode: payload.shortcode,
                dest_url: payload.dest_url,
                deletable: payload.deletable ?? true
            })
        }
        catch (error) {
            ctx.response.badRequest(error.message)
        }

    }
    public async update(ctx: HttpContextContract) {
        const updateShortUrlSchema = schema.create({
            dest_url: schema.string(),
            deletable: schema.boolean.optional(),
        })

        try {
            const payload = await ctx.request.validate({
                schema: updateShortUrlSchema
            })

            return ShortUrl.updateOrCreate({
                shortcode: ctx.request.param('id'),
            },{
                dest_url: payload.dest_url,
                deletable: payload.deletable
            })
        }
        catch(error) {
            ctx.response.badRequest(error.message)
        }
    }
    public async destroy(ctx: HttpContextContract) {

    }
}
