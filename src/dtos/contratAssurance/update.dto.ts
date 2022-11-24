export default interface UpdateContratAssuranceDto {
    signature: string
    pdfContratAssurance: string
    operation: string
}

export interface ActiveContratAssurDto {
    operation: string
    prixAssur: number
    user_id: number
    packassur_id: number
    idContrat: number
}