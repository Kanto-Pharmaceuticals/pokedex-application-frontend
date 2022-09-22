/**
 * search-result-item.jsx
 * A component to render highlighted search results from FuseJS.
 * Reference:
 * - https://dev.to/noclat/using-fuse-js-with-react-to-build-an-advanced-search-with-highlighting-4b93
 */

import "./search-result-item.scss"

// Finds `obj[path][to][key]` from `path.to.key`
const resolveAttribute = (obj, key) =>
  key.split(".").reduce((prev, curr) => prev?.[curr], obj)

// Recursively builds JSX output adding `<mark>` tags around matches
const highlight = (value, indices = [], i = 1) => {
  const pair = indices[indices.length - i]
  return !pair ? (
    value
  ) : (
    <>
      {highlight(value.substring(0, pair[0]), indices, i + 1)}
      <mark>{value.substring(pair[0], pair[1] + 1)}</mark>
      {value.substring(pair[1] + 1)}
    </>
  )
}

// FuseHighlight component
const SearchResultItem = ({ hit, attribute }) => {
  const matches =
    typeof hit.item === "string"
      ? hit.matches?.[0]
      : hit.matches?.find(m => m.key === attribute)
  const fallback =
    typeof hit.item === "string"
      ? hit.item
      : resolveAttribute(hit.item, attribute)
  return highlight(
    (
      matches?.value.toLowerCase().charAt(0).toUpperCase() +
      matches?.value.slice(1)
    ).replace(/-/g, " ") || fallback,
    matches?.indices
  )
}

export default SearchResultItem
