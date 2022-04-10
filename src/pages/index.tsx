import * as React from 'react';

import prisma from '../../lib/prisma';

export default function HomePage(props) {
  console.log(props.students)
  return <h1>Hello, world</h1>;
}


export async function getServerSideProps() {
  const students = await prisma.student.findMany();
  return {
    props: {
      name: 'world',
      students
    },
  };
}