import { polaris } from '@theme-ui/presets'
export default {
  ...polaris,
  styles: {
    ...polaris.styles
  },
  // fonts: {
  //   body:
  //     '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  // },
  sizes: {
    maxWidth: '1050px',
    maxWidthCentered: '650px',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
}
