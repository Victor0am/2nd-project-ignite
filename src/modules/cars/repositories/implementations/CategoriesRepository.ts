import { Category } from '../../models/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';


//classe com as funções de repositório para a entidade Category
class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[] = [];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories=[];
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
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