const Relations = (ListCources, Comments, Cources) => {
    Cources.hasMany(ListCources);
    ListCources.hasMany(Comments);
};

export default Relations;