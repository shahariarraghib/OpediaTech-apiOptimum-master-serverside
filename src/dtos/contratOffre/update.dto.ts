export default interface UpdateContratOffreDto {
    pdfContratOffre: string
    signature: string
    operation: string
}

export interface ActiveContratOffreDto {
    operation: string
    prixOffre: number
    user_id: number
    packoffre_id: number
    idContrat: number
}
