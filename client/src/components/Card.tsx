import { ReactNode } from 'react'

type Props = {
    children: ReactNode
  }

const Card = ({children}: Props) => {
    return (
        <div
            className="card w-96 bg-base-300 shadow-xl mx-auto p-4 h-full">
            {children}
        </div>
    )
}

export default Card