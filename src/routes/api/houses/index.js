import prisma from '$lib/prisma.js'

/** @type {import('./__types/items').RequestHandler} */
export async function GET() {
    const houses = await prisma.house.findMany();
    return {
        body: { houses }
    };
}

// /** @type {import('./__types/items').RequestHandler} */
// export async function POST({ request }) {
//     const [errors, item] = await db.create(request);
//
//     if (errors) {
//         // return validation errors
//         return {
//             status: 400,
//             body: { errors }
//         };
//     }
//
//     // redirect to the newly created item
//     return {
//         status: 303,
//         headers: {
//             location: `/items/${item.id}`
//         }
//     };
// }