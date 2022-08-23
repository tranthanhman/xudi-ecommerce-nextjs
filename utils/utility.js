export const prettyDate = (date) => {
  const _ = date instanceof Date ? date : new Date(date)
  return _ > new Date(new Date().toDateString()) ? _.toLocaleTimeString('ko') : _.toLocaleDateString('ko');
}

export const toLocaleString = (value) => {
  if(typeof value == 'string') new Date(value).toLocaleString()
  else if(typeof value == 'number') value.toLocaleString()
  return ''
}

export const localeString = (value) => {
  if(typeof value == 'string') return new Date(value).toLocaleString()
  else if(typeof value == 'number') return value.toLocaleString()
  else if(value instanceof Date) return value.toLocaleString()
  else '-'
}

export const formatCurrency = (cur) => {
  return cur.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}
