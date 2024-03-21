export const  categories = {
        title: "Kategorier",
        name: "categories", //Prøv å bruke engelske navn
        type: "document",
        fields: [
            {
                title: "Kategoritittel",
                name: "categorytitle",
                type: "string"
            },
            {
                title: "Kategorilink",
                name: "categoryurl",
                type: "slug",
                options: {
                    source: "categorytitle",
                    slugify: input => input.toLowerCase().replace(/\s+/g, '-') //Regler for slug
                }
            }
        ]
}

