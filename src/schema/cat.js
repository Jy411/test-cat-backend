import { Cat, CatTC } from '../models/cat';

const CatQuery = {
    catById: CatTC.getResolver('findById'),
    catByIds: CatTC.getResolver('findByIds'),
    catMany: CatTC.getResolver('findMany'),
    catCount: CatTC.getResolver('count'),
    catConnection: CatTC.getResolver('connection'),
};

export { CatQuery };
