export const sortArrayBySlug = array => {
  const sortedArray = array.sort(function(a, b) {
    let nameA = a.slug.toUpperCase()
    let nameB = b.slug.toUpperCase()

    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
  return sortedArray
}

export const reDate = string => {
  const reDated = string
    .slice(0, 10)
    .split("-")
    .reverse()
    .join(".")

  return reDated
}
