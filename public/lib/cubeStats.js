const round = num => Math.round(num * 100) / 100

const getSum = nums => nums.reduce((avg, num) => avg + num, 0)

const getMean = timeArray =>
  timeArray.length > 0
    ? round(timeArray.reduce((avg, time) => avg + time, 0) / timeArray.length)
    : 0

const getBestMean = (timeArray, length) => {
  if (timeArray.length < length) return 0
  const means = timeArray
    .map((time, index) => timeArray.slice(index, length))
    .filter(timeList => timeList.length === length)
    .map(timeList => getMean(timeList))
  return Math.min(...means)
}

const getAverage = timeArray => {
  if (timeArray.length < 3) return 0
  const max = Math.max(...timeArray)
  const min = Math.min(...timeArray)
  return round((getSum(timeArray) - max - min) / (timeArray.length - 2))
}

const getBestAverage = (timeArray, length) => {
  if (length < 3 || timeArray.length < length) return 0
  const averages = timeArray
    .map((time, index) => timeArray.slice(index, length))
    .filter(timeList => timeList.length === length)
    .map(timeList => getAverage(timeList))
  return Math.min(...averages)
}
