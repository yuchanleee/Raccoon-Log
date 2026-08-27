export type CategoryTree = {
    [key: string]: CategoryTree;
};

export function buildCategoryTree(categories: string[][]): CategoryTree {
    const tree: CategoryTree = {};

    for (const path of categories) {
        let current = tree;

        for (const category of path) {
            if (!current[category]) {
                current[category] = {};
            }

            current = current[category];
        }
    }

    return tree;
}