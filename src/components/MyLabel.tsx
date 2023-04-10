import './MyLabel.css'

export interface MyLabelProps {
  /**
   * This is the labal text
   */
  label: string
  /**
   * The size of the font
   */
  size: 'normal' | 'h1' | 'h2' | 'h3'
  /**
   * Show capital letters
   */
  allCaps?: boolean
  /**
   * Color
   */
  color?: 'primary' | 'secondary' | 'tertiary'
  /**
   * Font Color
   */
  fontColor?: string
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor = ''
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{
        textTransform: allCaps ? 'uppercase' : 'none',
        color: fontColor
      }}
    >
      {label}
    </span>
  )
}
