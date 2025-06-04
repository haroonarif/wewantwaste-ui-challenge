 const components:any={
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        height: '3rem',
      },
      inputRoot: {
        height: '100%',
        padding: '0 !important',
        alignItems: 'center',
        '& .MuiOutlinedInput-input': {
          padding: '0 !important',
          height: '3.3rem',
          fontSize: '0.875rem',
          display: 'flex',
          alignItems: 'center', 
        },
        '& .MuiInputLabel-root': {
          transform: 'translate(1px, 10%) scale(1)', 
          '&.MuiInputLabel-shrink': {
            transform: 'translate(1px, -0px) scale(0.1)',
          },
        },
      },
      tag: {
        height: '2rem', 
        margin: '0.5rem 0.125rem',
        display: 'flex',
        alignItems: 'center',
        '& .MuiChip-label': {
          padding: '0 0.5rem',
          fontSize: '0.75rem',
        },
      },
      clearIndicator: {
        padding: '0.5rem',
      },
      popupIndicator: {
        padding: '0.5rem',
      },
      option: {
        minHeight: 'auto',
        '&[aria-selected="true"]': {
          backgroundColor: 'rgba(25, 118, 210, 0.08)',
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-notchedOutline': {
          top: 0,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          top: 0,
        },
      },
      input: {
        padding: '0.75rem 14px', 
        height: 'calc(100% - 1.5rem)', 
        boxSizing: 'border-box',
      },
    },
  },
}

export default components