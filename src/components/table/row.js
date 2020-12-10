import React from 'react'

export default function TableRow(props) {
  const { fields } = props;

  return (
    <tr>
      {
        fields.map((field, index) => (
          <td key={`table_row_${index + 1}_${field.content}`}>{field.content}</td>
        ))
      }
    </tr>
  )
}
