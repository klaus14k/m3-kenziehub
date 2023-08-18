import { forwardRef } from "react"
import "../Input/style.scss"

export const Select = forwardRef(({ error, ...rest }, ref) => {
    return (
        <div className="field">
            <label className="headline">Selecionar Módulo</label>
            <select {...rest} ref={ref}>
                <option value="">Selecione o seu módulo atual</option>
                <option value={"Primeiro módulo (Introdução ao Frontend)"}>Primeiro módulo</option>
                <option value={"Segundo módulo (Frontend Avançado)"}>Segundo módulo</option>
                <option value={"Terceiro módulo (Introdução ao Backend)"}>Terceiro módulo</option>
                <option value={"Quarto módulo (Backend Avançado)"}>Quarto módulo</option>
            </select>
            {error ? <p className="error">{error.message}</p> : null}
        </div>       
    )
})