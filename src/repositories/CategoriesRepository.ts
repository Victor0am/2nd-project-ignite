import { Category } from '../models/Category';

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

//classe com as funções de repositório para a entidade Category
class CategoriesRepository {
    private categories: Category[] = [];

    constructor() {
        this.categories=[];
    }

    create({description, name}: ICreateCategoryDTO): void {
        const category: Category = new Category();

        Object.assign(category, {
            name, description, created_at: new Date()
        })

        this.categories.push(category);

    }

    list(): Category[] {
        return this.categories;
    }
    
    findByName(name: string): Category | undefined {
        return this.categories.find(category => category.name === name);
    }

}

export { CategoriesRepository };