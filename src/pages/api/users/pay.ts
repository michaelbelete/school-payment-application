import prisma from '../../../../lib/prisma';

export default async function handle(req, res) {
    const {
        date,
        month,
        montlyPayment,
        penalty,
        student_id,
        month_id,
    } = req.body;

    if (req.method === 'POST') {
        const result = await prisma.transaction.create({
            data: {
                date: date,
                monthId: month_id,
                amount: montlyPayment,
                studentId: student_id,
            }
        });

        res.json(result);
    }
    // else {
    // const result = await prisma.user.findMany();
    // res.json(result);
    // }
}