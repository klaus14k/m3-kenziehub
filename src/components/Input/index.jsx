import { forwardRef } from "react"
import "./style.scss"

export const Input = forwardRef(({ error, label, id, ...rest }, ref) => {
    return (
        <div className="field">
            <label className="headline" htmlFor={id}>{label}</label>
            <input {...rest} ref={ref} id={id} />
            {error ? <p className="error">{error.message}</p> : null}
        </div>
    )
})