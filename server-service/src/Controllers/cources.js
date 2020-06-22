import { Cources } from "#root/db/models/cource";
import { Comments } from "#root/db/models/comments";
import { ListCources } from "#root/db/models/list_cource";
import Relations from "#root/db/relations/cources";

Relations(ListCources, Comments, Cources);


// get cources data 
exports.cources = async(req, res, next) => {
    var perPage = req.params.perPage || 5;
    var page = req.params.page || 1;

    try {
        const data = await Cources.findAll({
            attributes: ["id", "image", "title", "price", "author", "subscriber"],
            offset: page,
            limit: perPage
        });
        const { count, row } = await Cources.findAndCountAll({
            offset: page,
            limit: perPage
        });
        return res.json({
            data: data,
            currentPage: page,
            totalData: count,
            pages: Math.ceil(count / perPage)
        });
    } catch (error) {
        next(error);
    }
}



// get cource by PK
exports.cource = async(req, res, next) => {
    var perPage = req.params.perPage || 5;
    var page = req.params.page || 1;

    try {
        const data = await Cources.findByPk(req.params.id, {
            attributes: ["id", "title", "price", "author", "subscriber"],
            include: {
                model: ListCources,
                attributes: ["title", "id", "chapter"],
                offset: page,
                limit: perPage,
                include: {
                    model: Comments,
                    offset: page,
                    limit: 10
                }
            }
        });

        const { count, row } = await ListCources.findAndCountAll({
            where: { courceId: req.params.id }
        });
        return res.json({
            data: data,
            currentPage: page,
            totalData: count,
            pages: Math.ceil(count / perPage)
        });
    } catch (error) {
        next(error)
    }
}
