export const formatText = text => {
  const lowercaseText = text.toLowerCase()
  return `${lowercaseText.charAt(0).toUpperCase()}${lowercaseText.slice(1)}`
}
