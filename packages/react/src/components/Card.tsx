import { ComponentProps, ElementType } from "react"
import { styled } from "../styles"

export const Card = styled('div', {
  padding: '$4',
  backgroundColor: '$white100',
  border: 'none',
  width: '400px'
})

export interface CardProps extends ComponentProps<typeof Card> {
  as?: ElementType
}