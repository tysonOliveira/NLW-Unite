export function generateSlug(text: string): string {
    return text
        .normalize("NFD") // Remove acentos
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-') // Substitui símbolos e espaços por hífens
        .replace(/^-+|-+$/g, ''); // Remove hífens extras no início ou no fim
}
