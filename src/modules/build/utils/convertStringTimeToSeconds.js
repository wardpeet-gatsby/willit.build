const convertStringTimeToSeconds = str => {
  // timestamps are in the form "3m 10s".
  // Convert this into # of seconds (190)
  const [, minutes, seconds] = str.match(/([\d]+)m\s+([\d]+)s/)
  return Number(seconds) + Number(minutes) * 60
}

export default convertStringTimeToSeconds
