export type MenuItem = {
    id: number
    Nombre: string
    Categoria: string
}

export type CategoryItem = {
    id: number
    name: string
}

export type OrderItem = MenuItem & {
    quantity: number
}

