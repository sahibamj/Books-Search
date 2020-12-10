import React from 'react'

export default function TableHeader(props) {
  const { headers } = props;

  return (
    <thead>
      <tr>
        {
          headers.map((header, index) => (
            <th
              onClick={header.onClick}
              scope="col"
              key={`table_header_${index + 1}`}
            >
              {header.title}
            </th>
          ))
        }
      </tr>
    </thead>
  )
}
