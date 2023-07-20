import type { NextApiRequest, NextApiResponse } from 'next'
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
  await dbConnect()

  if (req.method === HttpMethod.GET) {
    
  } 
  
  if (req.method === HttpMethod.POST) {
    
  } 

  res.status(200).json({ name: 'John Doe' })
}
