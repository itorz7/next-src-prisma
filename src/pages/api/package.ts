// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {PackageList} from "../../@types/package";
import prisma from "../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PackageList[]>
) {
  res.status(200).json(await prisma.packages.findMany())
}
