/* Colours for icons, so they are not all brand purple. Each has a strong `fg` and a soft `bg`. */
export const ICON_COLORS = {
  orange: { fg: '#F2622E', bg: '#FFEDE4' },
  sky: { fg: '#1E88E5', bg: '#E4F1FD' },
  pink: { fg: '#E0457B', bg: '#FDE8F0' },
  green: { fg: '#1F9D63', bg: '#E2F5EC' },
  amber: { fg: '#D98A00', bg: '#FFF3D6' },
  teal: { fg: '#0E9AA0', bg: '#DFF5F5' },
} as const;

export type IconColor = keyof typeof ICON_COLORS;

export const ICON_COLOR_ORDER: IconColor[] = ['orange', 'sky', 'pink', 'green', 'amber', 'teal'];

/** Brand colours. No pink. */
export const BRAND = { purple: '#35167f', purpleSoft: '#efebf9' } as const;

/** Icons are plain grey with no background. */
export const BRAND_ICON = { fg: '#8e8e93', bg: 'transparent' } as const;
export const ICON_GREY_ON_DARK = '#c7c7cc';