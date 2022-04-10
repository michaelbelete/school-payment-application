import React from 'react';
import DataTable from 'react-data-table-component';

export default function PaymentTable() {
  const columns = [
    {
      name: 'September',
      selector: (row) => {
        const amount = row.months.filter(
          (month) => month.name == 'september'
        )[0]?.transaction?.amount;
        if (amount != null) return amount;
        return <p className='text-red-500'>Unpaid</p>;
      },
    },
    {
      name: 'October',
      selector: (row) => row.october,
    },
    {
      name: 'November',
      selector: (row) => row.november,
    },
  ];

  const data = [
    {
      name: 'John Doe',
      grade: '2A',
      months: [
        {
          name: 'september',
          transaction: null,
        },
      ],
    },
  ];
  return <DataTable columns={columns} data={data} pagination />;
}
