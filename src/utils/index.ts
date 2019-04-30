// 格式化日期：yyyy-MM-dd
export type TypeFormatDate = Date | number | string
export function formatDate(dateInput: TypeFormatDate) {
  if (!(dateInput instanceof Date)) {
    dateInput = new Date(dateInput)
  }
  const myyear = dateInput.getFullYear()
  let mymonth: any = dateInput.getMonth() + 1
  let myweekday: any = dateInput.getDate()
  if (mymonth < 10) {
    mymonth = '0' + mymonth
  }
  if (myweekday < 10) {
    myweekday = '0' + myweekday
  }
  return myyear + '-' + mymonth + '-' + myweekday
}

// // 获取某月的天数
// export function getMonthDays(myMonth) {
//   const monthStartDate = new Date(nowYear, myMonth, 1).getTime();
//   const monthEndDate = new Date(nowYear, myMonth + 1, 1).getTime();
//   const days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
//   return days;
// }

// 几天前
export function getDateDiff(dateInput: TypeFormatDate) {
  if (!(dateInput instanceof Date)) {
    dateInput = new Date(dateInput)
  }
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const halfmonth = day * 15
  const month = day * 30
  const now = new Date().getTime()
  const diffValue = now - dateInput.getTime()
  if (diffValue < 0) return
  const monthC = diffValue / month
  const weekC = diffValue / (7 * day)
  const dayC = diffValue / day
  const hourC = diffValue / hour
  const minC = diffValue / minute
  let result = ''
  if (monthC >= 1) {
    result = parseInt(monthC.toString()) + '月前'
  } else if (weekC >= 1) {
    result = parseInt(weekC.toString()) + '周前'
  } else if (dayC >= 1) {
    result = parseInt(dayC.toString()) + '天前'
  } else if (hourC >= 1) {
    result = parseInt(hourC.toString()) + '小时前'
  } else if (minC >= 1) {
    result = parseInt(minC.toString()) + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
}
