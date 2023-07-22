import type {NextApiRequest, NextApiResponse} from 'next'
import {HttpMethod} from './constants'
import dbConnect from '../../../db/utils/mongo'
import Product from '../../../db/models/Product'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {method} = req
  dbConnect()

  if (req.method === HttpMethod.GET) {

  }

  if (req.method === HttpMethod.POST) {
    try {
      const product = await Product.create(req.body)

      res.status(201).json(product as any)
    } catch (err) {
      res.status(500).json(err as Data)
    }
  }

  res.status(200).json({name: 'John Doe'})
}
